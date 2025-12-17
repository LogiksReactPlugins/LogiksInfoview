import React, { useState, useMemo, useRef } from 'react';
import axios from "axios";
import type { InfoViewGroup } from '../InfoView.types.js';
import { copyToClipboard } from '../utils.js';



type SortDirection = 'asc' | 'desc' | null;

interface SortConfig {
    key: string;
    direction: SortDirection;
}

export default function GridView({ tabObj, methods, tabName, sqlOpsUrls, refid }:
    {
        tabObj: InfoViewGroup, methods: Record<string, Function>, tabName: string,
        sqlOpsUrls?: Record<string, any>, refid: string
    }) { 
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    // Get the array of data
    const [data, setData] = React.useState<Array<Record<string, any>>>([]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [copiedCell, setCopiedCell] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });

    React.useEffect(() => {
        let cancelled = false; // flag for cleanup

        const fetchData = async () => {
            const source = tabObj?.config;

            if (!source?.type) {
                if (!cancelled) setData([]);
                return;
            }

            if (source.type === "method") {
                const methodName = source.method as keyof typeof methods | undefined;
                const methodFn = methodName ? methods[methodName] : undefined;

                if (methodFn) {
                    try {
                        const result = await Promise.resolve(methodFn());
                        if (!cancelled) setData(result || []);
                    } catch (err) {
                        if (!cancelled) setData([]);
                    }
                } else {
                    if (!cancelled) setData([]);
                }
            }

            if (source.type === "api") {
                try {
                    const response = await axios({
                        method: source.method || "GET",  // GET, POST, etc.
                        url: source.url,
                        data: source.body || {},         // request body
                        params: source.params || {},     // query params
                        headers: source.headers || {},   // optional headers
                    });

                    if (!cancelled) setData(response.data || {});
                } catch (error) {
                    console.error("API fetch failed:", error);
                    if (!cancelled) setData([]);
                }
            }

            if (source.type === "sql" && refid &&
                refid != "0") {

                if (!sqlOpsUrls) {
                    console.error("SQL source requires formJson.endPoints but it is missing");
                    return;
                }

                try {
                    const resHashId = await axios({
                        method: "GET",
                        url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetHash,
                        headers: {
                            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                        },
                    });

                    const resQueryId = await axios({
                        method: "POST",
                        url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsGetRefId,
                        data: {
                            "operation": "fetch",
                            "source": { ...source, refid },
                              "fields": {},
                            "datahash": resHashId.data.refhash
                        },
                        headers: {
                            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                        },
                    });

                    const res = await axios({
                        method: "POST",
                        url: sqlOpsUrls.baseURL + sqlOpsUrls.dbopsFetch,
                        data: {
                            "refid": resQueryId.data.refid,
                            "datahash": resHashId.data.refhash
                        },

                        headers: {
                            "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
                        },
                    });
 console.log("res.data",res.data);
                    if (!cancelled) setData(res.data?.data ?? res.data ?? {});
                } catch (err) {
                    console.error("API fetch failed:", err);
                }
            }
        };

        fetchData();

        // cleanup: prevents state update after unmount
        return () => {
            cancelled = true;
        };
    }, [
        tabObj?.config?.type || "",
        tabObj?.config?.method || "",
        tabObj?.config?.url || "",
        JSON.stringify(tabObj?.config?.params || {}),
        JSON.stringify(tabObj?.config?.body || {}),
        JSON.stringify(tabObj?.config?.headers || {}),
    ]);

    // If data is not an array, convert single object to array
    const tableData: Array<Record<string, string>> = Array.isArray(data) ? data : [data];

    // Extract all unique column names from all rows
    const getAllColumns = (dataArray: Array<Record<string, string>>): string[] => {
        const columnSet = new Set<string>();
        dataArray.forEach(row => {
            if (row && typeof row === 'object') {
                Object.keys(row).forEach(key => columnSet.add(key));
            }
        });
        return Array.from(columnSet);
    };

    const columns = getAllColumns(tableData);

    // Check if edit mode is enabled
    const isEditMode = tabObj?.vmode === "edit";
    const hasFormConfig = tabObj?.config?.form && Object.keys(tabObj.config.form).length > 0;
    const hasInfoConfig = tabObj?.config?.info && Object.keys(tabObj.config.info).length > 0;



    const handleSort = (column: string) => {
        let direction: SortDirection = 'asc';

        if (sortConfig.key === column && sortConfig.direction === 'asc') {
            direction = 'desc';
        } else if (sortConfig.key === column && sortConfig.direction === 'desc') {
            direction = null;
        }

        setSortConfig({ key: column, direction });
    };

    const sortData = (data: Array<Record<string, any>>) => {
        if (!sortConfig.key || !sortConfig.direction) {
            return data;
        }

        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];

            // Handle null/undefined values
            if (aVal === null || aVal === undefined) return sortConfig.direction === 'asc' ? 1 : -1;
            if (bVal === null || bVal === undefined) return sortConfig.direction === 'asc' ? -1 : 1;

            // Handle boolean values
            if (typeof aVal === 'boolean' && typeof bVal === 'boolean') {
                return sortConfig.direction === 'asc'
                    ? (aVal === bVal ? 0 : aVal ? -1 : 1)
                    : (aVal === bVal ? 0 : aVal ? 1 : -1);
            }

            // Handle dates
            const aDate = new Date(aVal);
            const bDate = new Date(bVal);
            if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
                return sortConfig.direction === 'asc'
                    ? aDate.getTime() - bDate.getTime()
                    : bDate.getTime() - aDate.getTime();
            }

            // Handle numbers
            const aNum = parseFloat(aVal);
            const bNum = parseFloat(bVal);
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return sortConfig.direction === 'asc'
                    ? aNum - bNum
                    : bNum - aNum;
            }

            // Handle strings (case-insensitive)
            const aStr = String(aVal).toLowerCase();
            const bStr = String(bVal).toLowerCase();

            if (sortConfig.direction === 'asc') {
                return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
            } else {
                return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
            }
        });
    };

    const filteredAndSortedData = useMemo(() => {
        // First filter
        let filtered = tableData;
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = tableData.filter(row => {
                return columns.some(column => {
                    const value = row[column];
                    if (value === null || value === undefined) return false;
                    return String(value).toLowerCase().includes(query);
                });
            });
        }

        // Then sort
        return sortData(filtered);
    }, [tableData, searchQuery, columns, sortConfig]);

    // Sort data function


    // Pagination calculations
    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = filteredAndSortedData.slice(startIndex, endIndex);

    // Pagination helpers
    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page
    };

    // Clear search
    const handleClearSearch = () => {
        setSearchQuery("");
    };

    // Action handlers
    const handleEdit = (row: Record<string, string>, index: number) => {
        methods?.editInfoRecord?.(row, tabName)
        // Implement edit logic here
    };

    const handleView = (row: Record<string, string>) => {
        methods?.viewInfoRecord?.(row, tabObj?.config?.info)
        // Implement view logic here
    };

    const handleDelete = (row: Record<string, string>, index: number) => {
        methods?.deleteInfoRecord?.(row, tabName)
        // Implement delete logic here
    };

    const handleAddRecord = () => {
        methods?.addInfoRecord?.(tabObj?.config?.form, tabName)
        // Implement add record logic here
    };

    // Format field names to be more readable
    const formatFieldName = (fieldName: string) => {
        return fieldName
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Format field values for better display



    const formatCellValue = (value: string, formatter: string) => {
        if (value === null || value === undefined || value === '') {
            return <span className="text-gray-400 italic">-</span>;
        }

        if (typeof value === 'boolean') {
            return (
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {value ? 'Yes' : 'No'}
                </span>
            );
        }

        switch (formatter?.toLowerCase()) {
            case 'checkbox':
                return (
                    <input
                        type="checkbox"
                        checked={Boolean(value)}
                        readOnly
                        className="w-4 h-4 text-green-600 accent-green-600 cursor-default"
                    />
                );

            case 'date':
                return new Date(value).toLocaleDateString();

            case 'time':
                return new Date(value).toLocaleTimeString();

            case 'datetime':
                return new Date(value).toLocaleString();

            case 'currency':
                if (typeof value === "number") {
                    return new Intl.NumberFormat(undefined, {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                    }).format(value)
                };

            case 'number':
            case 'num':
                return <span className="text-center">{Number(value).toLocaleString()}</span>;

            case 'url':
                return value ? (
                    <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        {value}
                    </a>
                ) : null;

            case 'email':
                return value ? (
                    <a
                        href={`mailto:${value}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                        {value}
                    </a>
                ) : null;

            case 'tel':
            case 'mob':
            case 'phone':
            case 'mobile':
                return value ? (

                    <a
                        href={`tel:${value}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                        {value}
                    </a>
                ) : null;

            case 'geoloc':
            case 'geolocation':
            case 'geoaddress':
                return value ? (
                    <a
                        href={`https://www.google.com/maps/place/${encodeURIComponent(value)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        {value}
                    </a>
                ) : null;

            case 'color':
                return value ? (
                    <div className="flex items-center justify-center">
                        <span className="w-5 h-5 rounded-full border" style={{ backgroundColor: value }}></span>
                    </div>
                ) : null;

            case 'avatar':
                return (
                    <img
                        src={value || '/images/user.png'}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                );

            case 'photo':
            case 'picture':
            case 'media':
                return (
                    <img
                        src={value || '/images/noimg.png'}
                        alt="media"
                        className="w-12 h-12 rounded object-cover"
                    />
                );

            case 'file':
            case 'attachment':
                return value ? (
                    <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        FILE
                    </a>
                ) : (
                    'No File'
                );

            case 'json':
                try {
                    const parsed = typeof value === 'string' ? JSON.parse(value) : value;
                    return (
                        <pre className="whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded">
                            {JSON.stringify(parsed, null, 2)}
                        </pre>
                    );
                } catch {
                    return String(value);
                }

            case 'pretty':
                return (
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded">
                        {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                    </pre>
                );

            case 'uppercase':
                return String(value).toUpperCase();

            case 'lowercase':
                return String(value).toLowerCase();

            case 'html':
                return <div dangerouslySetInnerHTML={{ __html: value }} />;

            default:
                return String(value);
        }
    };

    const handleCopy = (value: string, cellKey: string) => {

        copyToClipboard(value).then(() => {

            setCopiedCell(cellKey)
            // Clear any existing timeout before setting a new one
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setCopiedCell("");
            }, 2000);
        }).catch(() => {
            setCopiedCell("");
        });
    };

    // Get statistics
    const stats = useMemo(() => ({
        totalRows: filteredAndSortedData.length,
        columns: columns.length,
        currentPageStart: startIndex + 1,
        currentPageEnd: Math.min(endIndex, filteredAndSortedData.length),
        isFiltered: searchQuery.trim().length > 0
    }), [filteredAndSortedData, tableData, columns, startIndex, endIndex]);

    if (tableData.length === 0 || columns.length === 0) {
        return (
            <div className="flex flex-1 flex-col items-center justify-center text-gray-500">
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 7 4-4 4 4" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
                <p className="text-sm text-gray-500 text-center max-w-sm">
                    There are no records to display in the grid view at the moment.
                </p>
                {hasFormConfig && (
                    <button
                        onClick={handleAddRecord}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Record
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="w-full overflow-hidden flex-1 flex flex-col">
            <div className="my-4 mx-2 flex  gap-4 justify-between items-start sm:items-center">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search across all columns..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                        />
                        {searchQuery && (
                            <button
                                onClick={handleClearSearch}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                title="Clear search"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                {hasFormConfig && (

                    <button
                        onClick={handleAddRecord}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-action cursor-pointer"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Record
                    </button>

                )}
            </div>

            <div className="flex items-center justify-between py-1 border-t border-gray-200 ">
                {/* Stats */}
                <div className="flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-2">
                        <span className="text-gray-600">
                            Showing <strong className="text-gray-900">{stats.currentPageStart}-{stats.currentPageEnd}</strong> of <strong className="text-gray-900">{stats.totalRows}</strong> records
                        </span>
                    </span>
                </div>

                <div className="flex-1 flex justify-end gap-4">
                    <div className="flex items-center gap-4">
                        {/* Items per page selector */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600">Show:</span>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                                className="border border-gray-300 text-gray-900 rounded px-1 py-1 text-sm outline-0"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                            <span className="text-gray-600">per page</span>
                        </div>
                    </div>

                    {/* Simple Pagination - Previous/Next only */}

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600">
                                Page <strong className="text-gray-900">{currentPage}</strong> of <strong className="text-gray-900">{totalPages}</strong>
                            </span>
                        </span>
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-2 text-sm font-medium text-action cursor-pointer bg-white rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>


            {/* No Results Found */}
            {filteredAndSortedData.length === 0 && searchQuery.trim() && (
                <div className="h-full flex flex-1 flex-col items-center justify-center py-22 text-gray-500">
                    <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Found</h3>
                    <p className="text-sm text-gray-500 text-center max-w-sm mb-4">
                        No records match your search for <strong>"{searchQuery}"</strong>
                    </p>
                    <button
                        onClick={handleClearSearch}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                        Clear Search
                    </button>
                </div>
            )}


            {/* Table Container */}
            {filteredAndSortedData.length > 0 && (<>
                <div className=" overflow-auto min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t">
                    <table className="min-w-full h-full">
                        {/* Fixed Header */}
                        <thead className=" text-action">
                            <tr>
                                {/* Actions column - only show in edit mode */}

                                {isEditMode && (
                                    <th
                                        scope="col"
                                        className="bg-muted px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider w-32 sticky top-0 left-0 z-20"
                                    >
                                        Actions
                                    </th>
                                )}

                                {/* Dynamic columns */}
                                {columns.map((column, index) => (
                                    <th
                                        key={column}
                                        scope="col"
                                        className="bg-muted sticky top-0 z-0 px-4 sm:px-6 py-2 text-left text-xs font-bold uppercase tracking-wider"
                                    >


                                        <div
                                            className="flex items-center gap-1 cursor-pointer select-none"
                                            onClick={() => handleSort(column)}
                                        >
                                            <span className="truncate" title={formatFieldName(column)}>
                                                {formatFieldName(column)}
                                            </span>
                                            {sortConfig?.key === column ? (
                                                sortConfig.direction === "asc" ? (
                                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M5 12l5-5 5 5H5z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M5 8l5 5 5-5H5z" />
                                                    </svg>
                                                )
                                            ) : (
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                                </svg>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Scrollable Body */}
                        <tbody className="bg-white divide-y divide-gray-200 ">
                            {currentData.map((row, rowIndex) => (
                                <tr
                                    key={startIndex + rowIndex}
                                    className={`hover:bg-secondary transition-colors duration-150 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                        }`}
                                >
                                    {/* Actions column - only show in edit mode */}

                                    {isEditMode && (
                                        <td className="px-4 sm:px-6 py-1 whitespace-nowrap text-sm bg-muted text-gray-900 sticky left-0 z-10">
                                            <div className="flex items-center gap-2">
                                                {hasInfoConfig && <button
                                                    onClick={() => handleView(row)}
                                                    className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                                                    title="View"
                                                >
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                </button>}
                                                <button
                                                    onClick={() => handleEdit(row, startIndex + rowIndex)}
                                                    className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                                                    title="Edit"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(row, startIndex + rowIndex)}
                                                    className="text-red-600 hover:text-red-800 cursor-pointer transition-colors p-1 hover:bg-red-100 rounded"
                                                    title="Delete"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    )}

                                    {/* Data columns */}
                                    {columns.map((column) => (
                                        <td
                                            key={column}
                                            className="px-4 sm:px-6 py-1 text-sm text-gray-900"
                                        >
                                            <div className="relative group flex items-center">
                                                <div className="truncate max-w-xs sm:max-w-none">
                                                    {formatCellValue(row[column] ?? "", column)}
                                                </div>
                                                <button
                                                    onClick={() => handleCopy(row[column] || "", `${row.id}-${column}`)}
                                                    className="absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer"
                                                    title="Copy"
                                                >
                                                    {copiedCell === `${row.id}-${column}` ? (
                                                        <>
                                                            <span className="text-xs text-gray-600">Copied!</span>
                                                        </>
                                                    ) : (
                                                        <i className="fa-regular fa-copy"></i>
                                                    )}
                                                </button>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </>
            )}
        </div>
    );
}
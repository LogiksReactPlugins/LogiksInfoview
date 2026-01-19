import react, { useEffect, useRef, useState } from 'react';

import type { ComponentType } from "react";
import SingleView from './SingleView.js';
import GridView from './GridView.js';
import InfoFieldRenderer from './InfoFieldRenderer.js';
import { groupFields, tailwindCols, tailwindGrid, toColWidth } from '../utils.js';
import type { InfoViewGroup, InfoViewProps, InfoViewField, InfoData, Infoview, SqlEndpoints } from '../InfoView.types.js';

interface TabViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup, tabName: string) => React.ReactNode>;
    layoutConfig?: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    viewMode: string;
    sqlOpsUrls?: SqlEndpoints;
    refid: string;
    Reports?: ComponentType<any>;
    toast?: Record<string, Function>;
    handleAction?: Function;
    infoViewJson: {
        script?: string;
        fields: Record<string, Omit<InfoViewField, "name">>;
        infoview?: Infoview;
        source?: Record<string, any>,
        endPoints?: Record<string, any>;
        module_refid?: string | undefined;
    };
}


interface VerticalNavProps {
    groups: Record<string, InfoViewGroup>;
    groupNames: string[];
    setActiveTabIndex: (index: number) => void;
    activeTabIndex: number;

}


interface TopNavProps extends VerticalNavProps {
    // extra props only TopNav needs
    showScrollHint: boolean;
    layoutConfig: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    tabsNavRef: React.RefObject<HTMLDivElement | null>;
}

interface ContentAreaPrps extends VerticalNavProps {
    layoutConfig: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    infoData: InfoData;
    tabObj: InfoViewGroup | null;
    renderView: (tab: InfoViewGroup, tabName: string) => React.ReactNode;
    methods?: Record<string, Function>;
    sqlOpsUrls?: SqlEndpoints;
    refid?: string | undefined;
    module_refid?: string | undefined;

}

const VerticalNav = ({ groups, groupNames, setActiveTabIndex, activeTabIndex }: VerticalNavProps) => (
    <nav

        className="flex flex-col overflow-y-auto h-full px-2 py-1 space-y-1"
    >
        {groupNames.length > 0 ? groupNames.map((group, index) => (
            <button
                key={group}
                type="button"
                onClick={() => setActiveTabIndex(index)}
                className={`cursor-pointer w-full text-left py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${activeTabIndex === index
                    ? 'bg-white shadow text-action'
                    : 'text-gray-600 hover:bg-white/50'
                    }`}
            >
                <span className="truncate">{groups[group]?.label || group}</span>
            </button>
        )) : (
            <div className="py-3 px-2 text-sm text-gray-500">No group available</div>
        )}
    </nav>
);




const TopNav = ({
    groups,
    groupNames,
    setActiveTabIndex,
    activeTabIndex,
    layoutConfig,
    showScrollHint,
    isCommonInfo,
    tabsNavRef
}: TopNavProps) => {
    const [showAllTabs, setShowAllTabs] = useState(false);
    const dropdownRef = useRef(null);
    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
                setShowAllTabs(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return <div className={layoutConfig?.tabNavClass || "relative z-10"}>

        {/* LEFT SCROLL BUTTON */}
        {showScrollHint && <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 flex items-center justify-center">
            <button
                onClick={() => tabsNavRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}
                className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
            >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </div>}

        {/* RIGHT SCROLL BUTTON + DROPDOWN */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-18 flex items-center justify-between pr-1">

            {/* Scroll Arrow */}
            {showScrollHint && <button
                onClick={() => tabsNavRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
                className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
            >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>}

            {/* Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setShowAllTabs(!showAllTabs)}
                    className="ml-1 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200"
                >
                    ⋮
                </button>

                {showAllTabs && (
                    <div className="absolute right-0 mt-2 w-48 max-h-100 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-30">
                        {groupNames.map((group, index) => (
                            <button
                                key={group}
                                type="button"
                                onClick={() => {
                                    setActiveTabIndex(index);
                                    setShowAllTabs(false);
                                }}
                                className={`w-full text-left px-3 py-2 text-sm truncate hover:bg-gray-100 ${activeTabIndex === index ? 'bg-gray-50 font-semibold text-action' : 'text-gray-700'}`}
                            >
                                {groups[group]?.label || group}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* SCROLLABLE TABS */}
        <div className={`relative bg-gray-100 ${isCommonInfo ? "" : "rounded-t-lg"} px-12 pt-1 shadow-inner overflow-hidden`}>
            <nav
                ref={tabsNavRef}
                className="relative flex overflow-x-auto scrollbar-hide scroll-smooth"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {groupNames.length > 0 ? groupNames.map((group, index) => (
                    <button
                        key={group}
                        type="button"
                        onClick={() => setActiveTabIndex(index)}
                        className={`relative cursor-pointer flex-shrink-0
            min-w-[8rem]   
            py-2 px-8
            rounded-t-lg text-xs sm:text-sm font-semibold
            transition-all duration-300 ease-out
            focus:outline-none whitespace-nowrap
            ${activeTabIndex === index
                                ? 'text-action bg-white'
                                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                            }`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                            <span className="truncate">{groups[group]?.label || group}</span>
                        </span>
                    </button>
                )) : (
                    <div className="py-3 px-6 text-sm text-gray-500">
                        No group available
                    </div>
                )}
            </nav>
        </div>
    </div>


}

const ContentArea = (
    {
        groupNames,
        activeTabIndex,
        layoutConfig,
        tabObj,
        infoData,
        setActiveTabIndex,
        renderView,
        methods = {},
        refid,
        sqlOpsUrls,
        module_refid
    }: ContentAreaPrps
) => (
    <div
        key={groupNames[activeTabIndex]}
        className="bg-white rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex-1 flex flex-col min-h-0"
    >

        {/* Fields Container */}
        {groupNames.length > 0 ? (
            tabObj?.fields ? (
                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                    <div className={layoutConfig?.fieldGridClass || "grid grid-cols-12 gap-2"}>
                        {tabObj.fields.map((field: InfoViewField, index: number) => (
                            <div
                                key={field?.name ?? `field-${index}`}
                                className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(field.width)] || "lg:col-span-2"
                                    }`}
                            >
                                <InfoFieldRenderer
                                    field={field}
                                    data={infoData ?? {}}
                                    methods={methods}
                                    refid={refid}
                                    {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
                                    module_refid={module_refid}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : tabObj ? (
                <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
                    {renderView(tabObj, groupNames[activeTabIndex] || "")}
                </div>
            ) : null
        ) : (
            <div className="flex-1 col-span-full text-center py-8 text-gray-500">
                No data available
            </div>
        )}

        {/* Navigation controls for many tabs */}
        {groupNames.length > 5 && (
            <div className="mt-10 pt-2 border-t border-gray-100 flex items-center justify-between gap-4">
                {/* Progress indicator */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Tab {activeTabIndex + 1} of {groupNames.length}</span>
                    <div className="flex gap-1">
                        {groupNames.slice(0, 5).map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTabIndex ? 'bg-action w-6' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                        {groupNames.length > 5 && (
                            <span className="text-xs text-gray-400 ml-1">
                                +{groupNames.length - 5}
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="hidden sm:flex gap-2">
                    <button
                        onClick={() => setActiveTabIndex(Math.max(0, activeTabIndex - 1))}
                        disabled={activeTabIndex === 0}
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setActiveTabIndex(Math.min(groupNames.length - 1, activeTabIndex + 1))}
                        disabled={activeTabIndex === groupNames.length - 1}
                        className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>
        )}

        {/* Simple progress for fewer tabs */}
        {groupNames.length <= 5 && (
            <div className="mt-6 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Tab {activeTabIndex + 1} of {groupNames.length}</span>
                    <div className="flex gap-1">
                        {groupNames.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTabIndex ? 'bg-action w-6' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
)

export default function TabView({
    groups,
    methods = {},
    infoData,
    viewRenderers = {},
    isCommonInfo,
    layoutConfig = {},
    viewMode,
    sqlOpsUrls,
    refid,
    Reports,
    toast = {},
    handleAction = () => { },
    infoViewJson
}: TabViewProps) {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [showScrollHint, setShowScrollHint] = useState(false);
    const tabsNavRef = useRef<HTMLDivElement | null>(null);

    const groupNames = Object.keys(groups);


    useEffect(() => {

        const checkOverflow = () => {
            if (tabsNavRef.current) {
                const container = tabsNavRef.current;
                setShowScrollHint(container.scrollWidth > container.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [groupNames.length]);

    // Auto-scroll active tab into view
    useEffect(() => {

        if (tabsNavRef.current && groupNames.length > 0) {
            const activeButton = tabsNavRef.current.children[activeTabIndex];
            if (activeButton) {
                activeButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeTabIndex, groupNames.length]);



    const isLeft = viewMode === "tableft";
    const isRight = viewMode === "tabright";
    const isTop = !isLeft && !isRight;
    const tabObj = groups[groupNames[activeTabIndex] ?? ""] || null;

    console.log("tabObj", tabObj);



    type RendererKey = "single" | "grid";
    const defaultRenderer: Record<string, (tab: InfoViewGroup, tabName: string) => React.JSX.Element> = {
        single: (tab, tabName) => (
            <SingleView module_refid={infoViewJson.module_refid} tabObj={tab} methods={methods} tabName={tabName}  {...(sqlOpsUrls ? { sqlOpsUrls } : {})} refid={refid} />
        ),
        grid: (tab, tabName) => (
            <GridView
                {...(Reports ? { Reports } : {})}
                toast={toast}
                handleAction={handleAction}
                tabObj={tab}
                methods={methods}
                tabName={tabName}
                {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
                refid={refid}
                infoViewJson={infoViewJson}
            />
        ),
    };

    const uiModeKey = tabObj?.config?.uimode;

    const renderView = viewRenderers[uiModeKey] || defaultRenderer[uiModeKey] ||
        (() => <div className="flex-1 flex justify-center p-4">No UI mode for this type</div>);


    console.log("tabObjjjjjjjjjjjjjjjjjjjjjj", tabObj);


    if (isTop) {
        return (
            <div className='flex-1 flex flex-col min-h-0 '>
                <TopNav
                    groupNames={groupNames}
                    groups={groups}
                    setActiveTabIndex={setActiveTabIndex}
                    activeTabIndex={activeTabIndex}
                    tabsNavRef={tabsNavRef}
                    isCommonInfo={isCommonInfo}
                    showScrollHint={showScrollHint}
                    layoutConfig={layoutConfig}
                />

                <ContentArea
                    groupNames={groupNames}
                    activeTabIndex={activeTabIndex}
                    layoutConfig={layoutConfig}
                    tabObj={tabObj}
                    infoData={infoData}
                    setActiveTabIndex={setActiveTabIndex}
                    renderView={renderView}
                    groups={groups}
                    methods={methods}
                    refid={refid}
                    {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
                    module_refid={infoViewJson.module_refid}

                />

            </div>
        );
    }

    return (


        <div className="flex-1 flex min-h-0">
            {isLeft && (
                <aside className="flex-shrink-0 w-56 border-r border-gray-200 bg-gray-50 p-2">
                    <VerticalNav
                        groupNames={groupNames}
                        groups={groups}
                        setActiveTabIndex={setActiveTabIndex}
                        activeTabIndex={activeTabIndex}
                    />
                </aside>
            )}

            <main className="flex-1 flex flex-col min-h-0 overflow-auto">
                <ContentArea
                    groupNames={groupNames}
                    activeTabIndex={activeTabIndex}
                    layoutConfig={layoutConfig}
                    tabObj={tabObj}
                    infoData={infoData}
                    setActiveTabIndex={setActiveTabIndex}
                    renderView={renderView}
                    groups={groups}
                    methods={methods}
                    refid={refid}
                    module_refid={infoViewJson.module_refid}
                    {...(sqlOpsUrls ? { sqlOpsUrls } : {})}
                />
            </main>

            {isRight && (
                <aside className="flex-shrink-0 w-56 border-l border-gray-200 bg-gray-50 p-2">
                    <VerticalNav
                        groupNames={groupNames}
                        groups={groups}
                        setActiveTabIndex={setActiveTabIndex}
                        activeTabIndex={activeTabIndex}
                    />
                </aside>
            )}
        </div>

    )
}

import React from 'react'
import SingleView from './SingleView.js';
import GridView from './GridView.js';
import InfoFieldRenderer from './InfoFieldRenderer.js';
import { groupFields, tailwindCols, tailwindGrid, toColWidth } from '../utils.js';
import type { InfoViewGroup, InfoViewProps, InfoViewField, InfoData } from '../InfoView.types.js';

interface TabViewProps {
    groups: Record<string, InfoViewGroup>;
    methods?: Record<string, Function>;
    infoData: InfoData;
    viewRenderers?: Record<string, (tab: InfoViewGroup) => React.ReactNode>;
    layoutConfig?: {
        containerClass?: string;
        tabNavClass?: string;
        fieldGridClass?: string;
    };
    isCommonInfo: boolean;
    viewMode: string;
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
    renderView: (tab: InfoViewGroup) => React.ReactNode;

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
}: TopNavProps) => (
    <div className={layoutConfig?.tabNavClass || "relative"}>
        {/* Left scroll button */}
        {showScrollHint && (
            <button
                onClick={() => {
                    if (tabsNavRef.current) {
                        tabsNavRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                    }
                }}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
            >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        )}

        {/* Right scroll button */}
        {showScrollHint && (
            <button
                onClick={() => {
                    if (tabsNavRef.current) {
                        tabsNavRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                    }
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-200 group"
            >
                <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        )}

        {/* Gradient fade effects */}
        {showScrollHint && (
            <>
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-10 pointer-events-none rounded-r-2xl"></div>
            </>
        )}

        <div className={`relative bg-gray-100 ${isCommonInfo ? "" : "rounded-t-lg"} px-1 pt-1 shadow-inner overflow-hidden`}>


            {/* Scrollable Tab buttons */}
            <nav
                ref={tabsNavRef}
                className="relative flex overflow-x-auto scrollbar-hide scroll-smooth"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    paddingLeft: showScrollHint ? '35px' : '0',
                    paddingRight: showScrollHint ? '35px' : '0'
                }}
            >
                {groupNames.length > 0 ? groupNames.map((group, index) => (
                    <button
                        key={group}
                        type="button"
                        onClick={() => setActiveTabIndex(index)}
                        className={`relative cursor-pointer flex-shrink-0 py-2 px-2 sm:px-4 rounded-t-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out focus:outline-none whitespace-nowrap ${activeTabIndex === index
                            ? 'text-action bg-white '
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
)

const ContentArea = (
    {
        groupNames,
        activeTabIndex,
        layoutConfig,
        tabObj,
        infoData,
        setActiveTabIndex,
        renderView
    }: ContentAreaPrps
) => (
    <div
        key={groupNames[activeTabIndex]}
        className="bg-white min-h-0 rounded-b-lg border  border-t-0 border-gray-100 p-3 animate-in fade-in duration-300 flex flex-col h-full"
    >

        {/* Fields Container */}
        {groupNames.length > 0 ? (
            tabObj?.fields ? (
                <div className="flex-1 overflow-y-auto  custom-scrollbar">
                    <div className={layoutConfig?.fieldGridClass || "grid grid-cols-12 gap-2"}>
                        {tabObj.fields.map((field: InfoViewField, index: number) => (
                            <div
                                key={field?.name ?? `field-${index}`}
                                className={`col-span-12 sm:col-span-6 ${tailwindCols[toColWidth(field.width)] || "lg:col-span-2"
                                    }`}
                            >
                                <InfoFieldRenderer field={field} data={infoData ?? {}} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : tabObj ? (
                renderView(tabObj)
            ) : null
        ) : (
            <div className="flex-1 col-span-full text-center py-8 text-gray-500">
                No data available
            </div>
        )}

        {/* Navigation controls for many tabs */}
        {groupNames.length > 5 && (
            <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                <div className="flex gap-2">
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
            <div className="mt-2 pt-3 border-t border-gray-100">
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
    viewMode
}: TabViewProps) {

    const [activeTabIndex, setActiveTabIndex] = React.useState(0);
    const [showScrollHint, setShowScrollHint] = React.useState(false);
    const tabsNavRef = React.useRef<HTMLDivElement | null>(null);

    const groupNames = Object.keys(groups);

    React.useEffect(() => {

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
    React.useEffect(() => {
     
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
   

    type RendererKey = "single" | "grid";
    const defaultRenderer: Record<RendererKey, (tab: InfoViewGroup) => React.JSX.Element> = {
        single: (tab) => (
            <SingleView tabObj={tab} methods={methods} />
        ),
        grid: (tab) => (
            <GridView tabObj={tab} methods={methods} />
        ),
    };

   
    const uiModeKey = ["single", "grid"].includes(tabObj?.config?.uimode)
        ? (tabObj?.config?.uimode as RendererKey)
        : "single";



    const renderView = viewRenderers[uiModeKey] || defaultRenderer[uiModeKey] ||
        (() => <div>No renderer for this type</div>);




    if (isTop) {
        return (
            <div className='flex flex-col w-full h-full overflow-hidden'>
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
                <main className="flex-1 overflow-auto">
                    <ContentArea
                        groupNames={groupNames}
                        activeTabIndex={activeTabIndex}
                        layoutConfig={layoutConfig}
                        tabObj={tabObj}
                        infoData={infoData}
                        setActiveTabIndex={setActiveTabIndex}
                        renderView={renderView}
                        groups={groups}
                    />
                </main>
            </div>
        );
    }

    return (


        <div className="flex w-full h-full overflow-hidden">
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

            <main className="flex-1 overflow-auto">
                <ContentArea
                    groupNames={groupNames}
                    activeTabIndex={activeTabIndex}
                    layoutConfig={layoutConfig}
                    tabObj={tabObj}
                    infoData={infoData}
                    setActiveTabIndex={setActiveTabIndex}
                    renderView={renderView}
                    groups={groups}
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

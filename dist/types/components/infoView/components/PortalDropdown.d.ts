export interface DropdownPortalProps {
    anchorRef: React.RefObject<HTMLElement | null>;
    open: boolean;
    children: React.ReactNode;
    offset?: number;
    maxHeight?: number;
}
export declare function DropdownPortal({ anchorRef, open, children, offset, maxHeight, }: DropdownPortalProps): import('react').ReactPortal | null;
//# sourceMappingURL=PortalDropdown.d.ts.map
import { createPortal } from "react-dom";
import { useLayoutEffect, useState } from "react";

export interface DropdownPortalProps {
    anchorRef: React.RefObject<HTMLElement | null>;
    open: boolean;
    children: React.ReactNode;
    offset?: number;
}

export function DropdownPortal({
    anchorRef,
    open,
    children,
    offset = 4,
}: DropdownPortalProps) {
    const [style, setStyle] = useState<React.CSSProperties>({});

    useLayoutEffect(() => {
        if (!open || !anchorRef.current) return;

        const rect = anchorRef.current.getBoundingClientRect();

        setStyle({
            position: "fixed",
            top: rect.bottom + offset,
            left: rect.left,
            width: "200px",
            zIndex: 1000,
        });
    }, [open, anchorRef, offset]);

    if (!open) return null;

    return createPortal(
        <div style={style}>{children}</div>,
        document.body
    );
}

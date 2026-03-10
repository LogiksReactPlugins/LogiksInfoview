import { createPortal } from "react-dom";
import { useLayoutEffect, useState } from "react";

export interface DropdownPortalProps {
    anchorRef: React.RefObject<HTMLElement | null>;
    open: boolean;
    children: React.ReactNode;
    offset?: number;
    maxHeight?: number;
}

export function DropdownPortal({
    anchorRef,
    open,
    children,
    offset = 4,
    maxHeight = 240,
}: DropdownPortalProps) {
    const [style, setStyle] = useState<React.CSSProperties>({});

    useLayoutEffect(() => {
        if (!open || !anchorRef.current) return;
        const anchor = anchorRef.current;

        const update = () => {
            const rect = anchor.getBoundingClientRect();

            const viewportHeight = window.innerHeight;

            const spaceBelow = viewportHeight - rect.bottom;
            const spaceAbove = rect.top;

            const openUpwards = spaceBelow < maxHeight && spaceAbove > spaceBelow;

            const top = openUpwards
                ? rect.top - Math.min(maxHeight, spaceAbove) - offset
                : rect.bottom + offset;

            setStyle({
                position: "fixed",
                top,
                left: rect.left,
                width: rect.width,
                maxHeight,
                zIndex: 9999,
            });
        };

        update();
 // run again after layout settles
  const raf = requestAnimationFrame(update);
        window.addEventListener("scroll", update, true);
        window.addEventListener("resize", update);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", update, true);
            window.removeEventListener("resize", update);
        };
    }, [open, anchorRef, offset, maxHeight]);


    

    if (!open) return null;

    return createPortal(
        <div style={style}>{children}</div>,
        document.body
    );
}



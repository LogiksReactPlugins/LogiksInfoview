import { createPortal } from "react-dom";
import { useLayoutEffect, useRef, useState } from "react";

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
  const [style, setStyle] = useState({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open || !anchorRef.current || !dropdownRef.current) return;
 const anchor = anchorRef.current;
    const update = () => {
      const rect = anchor.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const dropdownHeight =
        dropdownRef.current?.offsetHeight || maxHeight;

      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      const shouldFlip =
        spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

      const top = shouldFlip
        ? rect.top - dropdownHeight - offset
        : rect.bottom + offset;

      setStyle({
        position: "fixed",
        top,
        left: rect.left,
        width: rect.width,
        maxHeight,
        overflowY: "auto",
        zIndex: 9999,
      });
    };

    update();
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
    <div ref={dropdownRef} style={style}>
      {children}
    </div>,
    document.body
  );
}
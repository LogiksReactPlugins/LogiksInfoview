import React from "react";
import type { ComponentType, ReactNode } from "react";

export function resolveComponent(
  key?: string,
  components?: Record<string, ComponentType<any> | ReactNode>
): ReactNode {
  if (!key || !components) return null;

  const entry = components[key];

  if (React.isValidElement(entry)) {
    return entry;
  }

  if (typeof entry === "function") {
    const Comp = entry as ComponentType<any>;
    return <Comp />;
  }

  return null;
}

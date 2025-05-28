"use client";

import { useEffect } from "react";

interface HotkeyProviderProps {
  shortcuts: {
    key: string;
    action: () => void;
  }[];
  children: React.ReactNode;
}

export function HotkeyProvider({ shortcuts, children }: HotkeyProviderProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey
      )
        return;

      const shortcut = shortcuts.find(
        (s) => s.key.toLowerCase() === e.key.toLowerCase(),
      );
      if (shortcut) {
        e.preventDefault();
        shortcut.action();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [shortcuts]);

  return <>{children}</>;
}

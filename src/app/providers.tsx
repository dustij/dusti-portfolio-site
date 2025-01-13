"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useRef } from "react";

/**
 * Custom hook to track the previous value of a given state or prop.
 *
 * @template T - The type of the value being tracked.
 * @param {T} value - The current value to track.
 * @returns {T} - The previous value of the input.
 *
 * This hook is useful for accessing the previous state in a React functional component.
 */
function usePrevious<T>(value: T) {
  let ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * A component that synchronizes the application's theme with the user's system preferences.
 *
 * This component:
 * - Detects changes in the system's preferred color scheme (`dark` or `light`).
 * - Updates the application's theme to `system` if it matches the system's preference.
 *
 * @returns {null} - This component renders nothing.
 */
function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      let systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    onMediaChange();
    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}

/**
 * A React context to provide the previous pathname in the application.
 *
 * @type {React.Context<{ previousPathname?: string }>}
 */
export const AppContext = createContext<{ previousPathname?: string }>({});

/**
 * A provider component to manage application-wide context and theme settings.
 *
 * This component:
 * - Wraps the application in a `ThemeProvider` to manage themes using `next-themes`.
 * - Provides the previous pathname context using `AppContext`.
 * - Includes `ThemeWatcher` to synchronize the theme with the user's system preferences.
 *
 * @param {React.PropsWithChildren<{ children: React.ReactNode }>} props - The component's props.
 * @param {React.ReactNode} props.children - The child components that will be wrapped by the provider.
 * @returns {JSX.Element} - The provider component that wraps the children with the context and theme providers.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);
  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    // <ThemeProvider defaultTheme="system" attribute="class">
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
}

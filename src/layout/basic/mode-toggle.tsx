"use client"

import * as React from "react"
import { SunMoon } from "lucide-react"
// import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/core/context/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      size="icon"
      className="group/toggle size-8"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunMoon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
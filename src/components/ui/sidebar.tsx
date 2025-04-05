'use client';

import * as React from "react"
import { cn } from "@/lib/utils"

// Simple sidebar components without complex ref handling
export function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
    <div
      className={cn("flex h-full flex-col gap-4", className)}
            {...props}
          >
            {children}
          </div>
  )
}

export function SidebarGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
      return (
        <div
      className={cn("flex flex-col gap-1", className)}
          {...props}
        >
          {children}
        </div>
      )
    }

export function SidebarLabel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-8 items-center rounded-md px-2 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarLink({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent", className)}
      {...props}
    >
      {children}
    </a>
  )
} 
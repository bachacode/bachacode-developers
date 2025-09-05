import { cn } from "@/lib/utils";
import React from "react";

interface MockupBrowserWindowProps {
  mockupUrl: string;
  tiltDirection?: "left" | "right";
}

export default function MockupBrowserWindow({
  mockupUrl,
  tiltDirection,
}: MockupBrowserWindowProps) {
  return (
    <div
      className={cn(
        "transform overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300",
        tiltDirection === "left"
          ? "-rotate-2 hover:rotate-0"
          : tiltDirection === "right"
            ? "rotate-2 hover:rotate-0"
            : "",
      )}
    >
      <div className="bg-muted/50 flex items-center gap-2 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-background text-muted-foreground flex-1 rounded px-3 py-1 text-xs">
          {mockupUrl}
        </div>
      </div>
      {tiltDirection === "left" ? (
        <div className="space-y-4 p-6">
          <div className="bg-primary/20 h-4 w-3/4 rounded"></div>
          <div className="bg-muted h-3 w-full rounded"></div>
          <div className="bg-muted h-3 w-2/3 rounded"></div>
          <div className="flex gap-2">
            <div className="bg-accent/30 h-8 flex-1 rounded"></div>
            <div className="bg-primary/30 h-8 flex-1 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 p-6">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-chart-1/20 h-12 rounded"></div>
            <div className="bg-accent/20 h-12 rounded"></div>
            <div className="bg-primary/20 h-12 rounded"></div>
          </div>
          <div className="bg-muted h-3 w-full rounded"></div>
          <div className="bg-primary/30 h-6 w-1/2 rounded"></div>
        </div>
      )}
    </div>
  );
}

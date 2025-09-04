import { cn } from '@/lib/utils';
import React from 'react'

interface MockupBrowserWindowProps {
    mockupUrl: string;
    tiltDirection?: 'left' | 'right';
}

export default function MockupBrowserWindow({ mockupUrl, tiltDirection }: MockupBrowserWindowProps) {
    return (
        <div className={cn(
            "bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300",
            tiltDirection === 'left' ? '-rotate-2 hover:rotate-0' : tiltDirection === 'right' ? 'rotate-2 hover:rotate-0' : ''
        )}>
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-background rounded px-3 py-1 text-xs text-muted-foreground">
                    {mockupUrl}
                </div>
            </div>
            {tiltDirection === 'left' ? (
                <div className="p-6 space-y-4">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                    <div className="flex gap-2">
                        <div className="h-8 bg-accent/30 rounded flex-1"></div>
                        <div className="h-8 bg-primary/30 rounded flex-1"></div>
                    </div>
                </div>) : (
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-chart-1/20 rounded"></div>
                        <div className="h-12 bg-accent/20 rounded"></div>
                        <div className="h-12 bg-primary/20 rounded"></div>
                    </div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-6 bg-primary/30 rounded w-1/2"></div>
                </div>
            )
            }
        </div>
    )
}

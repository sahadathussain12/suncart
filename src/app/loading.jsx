import React from 'react';
import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center gap-4 bg-white">
          
            <Spinner color="warning" size="lg" />
            
            <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-amber-500 italic animate-pulse">
                    SunCart
                </h3>
                <p className="text-zinc-400 text-xs tracking-wider uppercase">
                    Loading Sunshine...
                </p>
            </div>
        </div>
    );
};

export default Loading;
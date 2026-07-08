import React from 'react';
import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-3 bg-white">
            
            <Spinner color="warning" size="lg" />
            
           
            <p className="text-zinc-500 font-medium text-sm animate-pulse">
                Loading products, please wait...
            </p>
        </div>
    );
};

export default Loading;
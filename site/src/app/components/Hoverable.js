'use client';

export default function Hoverable({ children}){
    return (
        <div className="relative group flex bg-black">
            {/* Initially hidden content */}
            <div className=" hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity">
                {children}
            </div>
        </div>
     
    )
}
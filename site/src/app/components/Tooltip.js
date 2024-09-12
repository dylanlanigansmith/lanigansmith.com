'use client';

export default function Tooltip({ text, childClass, children }) {
    return (
        <span className="relative group">
            <span className={childClass}>
            {children}
            </span>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 hidden group-hover:block bg-green-950 text-white text-base px-2 rounded">
                {text}
            </span>
        </span>
    );
}
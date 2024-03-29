import React from 'react';

export default function GamepadIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className ? className : `h-6 w-6`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            ></path>
            <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path>
            <path d="M6 12h4m-2 -2v4"></path>
            <path d="M15 11l0 .01"></path>
            <path d="M18 13l0 .01"></path>
        </svg>
    );
}

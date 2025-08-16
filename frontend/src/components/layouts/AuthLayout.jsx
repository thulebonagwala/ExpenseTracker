import React from 'react'

const AuthLayout = () => {
    return (
        <svg
            width="120"
            height="90"
            viewBox="0 0 120 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <!-- Wallet body --> */}
            <path
                d="M20 35c0-6.627 5.373-12 12-12h42c6.627 0 12 5.373 12 12v22c0 6.627-5.373 12-12 12H32c-6.627 0-12-5.373-12-12V35Z"
                fill="#F59E0B"
            />
            {/* <!-- Wallet flap --> */}
            <path
                d="M72 23 48 35h38c6.627 0 12 5.373 12 12v10h10c3.314 0 6-2.686 6-6V41c0-8.837-7.163-16-16-16H72Z"
                fill="#0EA5E9"
                opacity=".75"
            />
            {/* <!-- Button on flap --> */}
            <rect x="88" y="49" width="18" height="12" rx="6" fill="#EA580C" />
            <circle cx="90" cy="55" r="3" fill="#FDBA74" />
        </svg>
    )
}

export default AuthLayout
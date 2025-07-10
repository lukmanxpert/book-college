import Navigation from '@/components/Navigation'
import React from 'react'

export default function PageLayout({ children }) {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

import Navigation from '@/components/navigation/Navigation'
import React from 'react'

export default function PageLayout({ children }) {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

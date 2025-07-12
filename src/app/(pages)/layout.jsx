import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import React from 'react'

export default function PageLayout({ children }) {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Navigation />
            </div>
            <div className='p-4'>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import NavigationMenuComponent from './NavigationMenu'
import { auth } from '@/lib/auth'
import ProfileBtn from './ProfileBtn'

export default async function Navigation() {
    const session = await auth()
    return (
        <div className='flex justify-between h-16 items-center py-2 px-4 shadow z-50 bg-white'>
            <div>
                <Link href={"/"} className='text-xl font-bold'>Book College</Link>
            </div>
            <div className='w-1/3 flex justify-end lg:justify-between text-center gap-4'>
                <div className='hidden lg:block'>
                    <NavigationMenuComponent />
                </div>
                <div className=''>
                    {
                        session?.user?.email ? (
                            <div>
                                <ProfileBtn session={session} />
                            </div>
                        ) : (
                            <Button><Link href={"/login"} className={"cursor-pointer"}>Login</Link></Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
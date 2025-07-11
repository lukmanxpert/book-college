import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import NavigationMenuComponent from './NavigationMenu'
import { auth } from '@/lib/auth'
import ProfileBtn from './ProfileBtn'

export default async function Navigation() {
    const session = await auth()
    console.log('session :>> ', session);
    return (
        <div className='flex justify-between p-2 shadow'>
            <div>
                <h1 className='text-xl font-bold'>Book College</h1>
            </div>
            <div className='w-1/3 flex justify-between text-center gap-4'>
                <div>
                    <NavigationMenuComponent />
                </div>
                <div>
                    {
                        session?.user?.email ? (
                            <ProfileBtn session={session} />
                        ) : (
                            <Button><Link href={"/login"} className={"cursor-pointer"}>Login</Link></Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

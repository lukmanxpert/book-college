"use client"
import React from 'react'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()
    console.log('pathname :>> ', pathname);
    return (
        <div className='flex justify-between p-2'>
            <div>
                <h1 className='text-xl font-bold'>Book College</h1>
            </div>
            <div className='w-1/3 flex justify-between text-center gap-4'>
                <div>
                    <NavigationMenu>
                        <NavigationMenuList className={"font-semibold"}>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={`${pathname === "/" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={`${pathname === "/college" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    <Link href="/college">College</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={`${pathname === "/admission" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    <Link href="/admission">Admission</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={`${pathname === "/my-college" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    <Link href="/my-college">My College</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div>
                    <Button><Link href={"/login"} className={"cursor-pointer"}>Login</Link></Button>
                </div>
            </div>
        </div>
    )
}

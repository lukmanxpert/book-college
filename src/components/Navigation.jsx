"use client"
import React, { useEffect, useState } from 'react'
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
    return (
        <div className='flex justify-between p-2 shadow'>
            <div>
                <h1 className='text-xl font-bold'>Book College</h1>
            </div>
            <div className='w-1/3 flex justify-between text-center gap-4'>
                <div>
                    <NavigationMenu>
                        <NavigationMenuList className={"font-semibold"}>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={"/"} className={`${pathname === "/" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={"/college"} className={`${pathname === "/college" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    College
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={"/admission"} className={`${pathname === "/admission" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    Admission
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={"/my-college"} className={`${pathname === "/my-college" && "bg-neutral-950 text-white"} hover:bg-neutral-950 hover:text-white`}>
                                    My College
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

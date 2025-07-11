"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation'

export default function NavigationMenuComponent() {
    const pathname = usePathname()
    return (
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
    )
}

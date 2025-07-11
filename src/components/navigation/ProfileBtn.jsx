"use client";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function ProfileBtn({ session }) {
    return (
        <DropdownMenu>
            {/* Tooltip wraps around DropdownMenuTrigger (which wraps a div) */}
            <Tooltip>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer">
                            <Avatar>
                                <AvatarImage
                                    src={session?.user?.image || "https://github.com/shadcn.png"}
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>{session?.user?.email}</TooltipContent>
            </Tooltip>

            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="cursor-pointer"
                >
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

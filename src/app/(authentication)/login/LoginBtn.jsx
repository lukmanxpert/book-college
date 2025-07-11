"use client"
import React from 'react'

import { Button } from "@/components/ui/button";
import { useFormStatus } from 'react-dom';

export default function LoginBtn() {
    const { pending } = useFormStatus();
    return (
        <Button className="w-full cursor-pointer">{pending ? "Submitting..." : "Log In"}</Button>
    )
}

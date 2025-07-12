"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DetailsBtn({ id }) {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(`/college/details/${id}`)} className={"cursor-pointer"} variant="outline">Details</Button>
    )
}

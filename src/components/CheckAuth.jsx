import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

export async function Private() {
    const session = await auth()
    if (!session) {
        redirect("/login")
    }
    return <></>
}

export async function Public() {
    const session = await auth()
    if (session) {
        redirect("/")
    }
}

import React from 'react'
import { signIn } from '@/lib/auth'
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    return (
        <form action={async () => {
            "use server"
            await signIn("google")
        }}>
            <button type='submit'>
                <FcGoogle />
            </button>
        </form>
    )
}

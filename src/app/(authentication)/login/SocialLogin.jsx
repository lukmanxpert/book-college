import React from 'react'
import { signIn } from '@/lib/auth'
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    return (
        <form action={async () => {
            "use server"
            await signIn("google")
        }} className='text-center mt-3'>
            <button className='text-center cursor-pointer hover:scale-125 transition' type='submit'>
                <FcGoogle size={25} />
            </button>
        </form>
    )
}

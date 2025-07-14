import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen w-full flex gap-2 justify-center items-center flex-col'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Button variant={"outline"}>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}
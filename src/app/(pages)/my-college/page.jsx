import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth'
import Link from 'next/link';
import React from 'react'

export default async function MyCollege() {
  const session = await auth()
  console.log('session :>> ', session);
  const admitCollegeStatus = session.user.admittedCollege.collegeId
  return (
    <div className='min-h-[70dvh]'>
      {
        admitCollegeStatus && (
          <div className='min-h-[70dvh] flex flex-col items-center justify-center gap-4'>
            <h3 className="scroll-m-20 text-2xl text-center font-semibold tracking-tight">
              You do not admitted any college yet.
            </h3>
            <Link href={"/admission"} className='cursor-pointer text-center'>
              <Button className={"cursor-pointer"} variant={"outline"}>Admit Now</Button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

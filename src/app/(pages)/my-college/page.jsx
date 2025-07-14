import { Private } from '@/components/CheckAuth';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth'
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function MyCollege() {
  const session = await auth()
  console.log('session :>> ', session);
  const admitCollegeStatus = session.user.admittedCollege.collegeId
  const host = await headers().get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/college/${admitCollegeStatus}`, { cache: 'no-store' });
  const result = await res.json();
  const college = result?.data || [];
  console.log('college :>> ', college);
  return (
    <div className='min-h-[70dvh]'>
      <Private />
      {
        admitCollegeStatus ? (
          <section className='flex flex-col gap-4'>
            <div>
              <h1 className='text-2xl font-bold'>{college.name}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <Image
                height={300}
                width={300}
                className='w-full h-48 sm:h-64 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] object-cover rounded'
                src={college.image}
                alt={college.name}
              />
              <p className='font-bold text-lg'>Admission Date: <span className='font-medium'>{college.admissionDates}</span></p>
              <p className='text-lg font-bold'>Events: {college.events.map((e, idx) => {
                return (
                  <li key={idx} className='text-base font-medium'>{e}</li>
                )
              })}</p>
              <p className='font-bold'>Research History: <span className='font-normal'>{college.researchHistory}</span></p>
              <p className='font-bold'>Sport's: {college.sports.map((s, idx) => {
                return (
                  <li key={idx} className='font-medium'>{s}</li>
                )
              })}</p>
              <p className='font-bold'>Number of Research: <span className='font-medium'>{college.numberOfResearch}</span></p>
              <p className='font-bold'>Rating: <span className='font-medium'>{college.rating}</span></p>
            </div>
            <div>
              <div className="px-4 sm:px-0">
                <h1 className="text-lg font-bold mb-4">Graduate Gallery:</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {college.graduateGallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded shadow"
                    >
                      <Image
                        src={image}
                        alt={`Graduate ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className='min-h-[70dvh] flex flex-col items-center justify-center gap-4'>
            <h3 className="scroll-m-20 text-2xl text-center font-semibold tracking-tight">
              You do not admitted any college yet.
            </h3>
            <Link href={"/admission"} className='cursor-pointer text-center'>
              <Button className={"cursor-pointer"} variant={"outline"}>Admit Now</Button>
            </Link>
          </div >
        )
      }
    </div >
  )
}
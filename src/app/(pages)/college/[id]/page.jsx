import React from 'react'
import { headers } from 'next/headers';
import Image from 'next/image';
import { Private } from '@/components/CheckAuth';

export default async function CollegeDetails({ params }) {
    const { id } = await params
    const host = headers().get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/college/${id}`, { cache: 'no-store' });
    const result = await res.json();
    const college = result?.data || [];
    console.log('college :>> ', college);
    return (
        <section className='flex flex-col gap-4'>
            <Private />
            <div>
                <h1 className='text-2xl font-bold'>{college.name}</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <Image
                    height={300}
                    width={300}
                    className='w-full h-48 sm:h-64 md:w-96 md:h-64 lg:w-[400px] lg:h-[250px] object-cover rounded'
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
                <h1 className='text-lg font-bold mb-2'>Graduate Gallery:</h1>
                <div className='grid grid-cols-2 gap-2'>
                    {
                        college.graduateGallery.map((image, idx) => {
                            return (
                                <Image
                                    key={idx}
                                    src={image}
                                    width={300}
                                    height={300}
                                    className='w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded'
                                    alt={`Graduate ${idx + 1}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

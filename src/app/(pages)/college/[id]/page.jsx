import React from 'react'
import { headers } from 'next/headers';
import Image from 'next/image';
import { Private } from '@/components/CheckAuth';

export default async function CollegeDetails({ params }) {
    const { id } = await params
    const host = await headers().get('host');
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
    )
}

"use client"
import React, { useState } from 'react'
import CollegeCardHome from './CollegeCardHome';
import { Input } from '@/components/ui/input';

export default function CollegeClient({ data }) {
    const [colleges, setColleges] = useState(data)
    const handleChange = (event) => {
        const search = event.target.value;
        const filtered = data.filter(college =>
            college.name.toLowerCase().includes(search.toLowerCase())
        );
        setColleges(filtered);
    }
    return (
        <div>
            <div className='flex justify-between gap-4'>
                <h1 className='text-xl md:text-3xl mb-4 font-semibold'>All Colleges: {colleges.length}</h1>
                <div>
                    <Input name="search" onChange={handleChange} placeholder="Search college here" className={"w-36 md:min-w-60 lg:min-w-72"} />
                </div>
            </div>
            {colleges.length === 0 ? (
                <p>No college data found.</p>
            ) : (
                <div className='my-2 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {colleges.map((college, idx) => (
                        <CollegeCardHome key={idx} college={college} />
                    ))}
                </div>
            )}
        </div>
    )
}

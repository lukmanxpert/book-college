import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import DetailsBtn from '../my-college/components/DetailsBtn'
export default function CollegeCardHome({ college }) {
    return (
        <Card>
            <CardHeader>
                <CardDescription className={"flex justify-center"}>
                    <Image width={300} height={300} src={college.image} className='w-full h-48  object-cover rounded my-2 bg-red-200' alt="college image" />
                </CardDescription>
                <CardTitle className={"text-xl"}>{college.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Admission Date: {college.admissionDates}</p>
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
            </CardContent>
            <CardFooter>
                <DetailsBtn id={college._id} />
            </CardFooter>
        </Card>
    )
}

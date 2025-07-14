"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'

export default function ReviewCollege() {
    const { pending } = useFormStatus()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const form = event.target
            const value = form.review.value
            toast.success("Submitted success")
            form.reset()
            console.log('value :>> ', value);
        } catch (error) {
            console.log(error.message || error);
        }
    }
    return (
        <div className='flex gap-2'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <Label className={"text-lg font-semibold"}>Leave a Review: </Label>
                    <Input name="review" className={"w-64"} placeholder="Leave a review of your college" />
                    <Button variant={"outline"} className={"cursor-pointer"}>{pending ? "Submitting..." : "Submit"}</Button>
                </div>
            </form>
        </div>
    )
}

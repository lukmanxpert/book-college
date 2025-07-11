"use client"
import React, { useState } from 'react'
import SaveBtn from './SaveBtn';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileForm({ user }) {
    const { email, name, address, university, image } = user;
    const [data, setData] = useState({
        name: name || "",
        email,
        address: address || "",
        university: university || "",
        image: image || ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setData(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (event) => [
        event.preventDefault()
        
    ]
    return (
        <Card className="max-w-sm min-w-xs lg:min-w-sm">
            <CardHeader>
                <CardTitle className="text-xl w-full">Profile Information</CardTitle>
                <CardDescription>
                    Give us your all Information to find you a perfect match for you.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6"
                >
                    {/* name field */}
                    <div className="grid gap-2">
                        <Label>Name</Label>
                        <Input
                            placeholder="Enter full name"
                            required
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        ></Input>
                    </div>
                    {/* Image url */}
                    <div className="grid gap-2">
                        <Label>Image URL</Label>
                        <Input
                            placeholder="Your image url"
                            required
                            type="url"
                            name="image"
                            value={data.image}
                            onChange={handleChange}
                            pattern="https?://.+"
                            title="Please enter a valid URL (starting with http:// or https://)"
                        />
                    </div>
                    {/* email field */}
                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input
                            placeholder="hello@example.com"
                            required
                            type="email"
                            name="email"
                            defaultValue={data.email}
                            disabled={true}
                        ></Input>
                        {/* <input type="text"  disabled name="" id="" /> */}
                    </div>
                    {/* university field */}
                    <div className="grid gap-2">
                        <Label>University</Label>
                        <Input
                            placeholder="University name"
                            required
                            type="text"
                            name="university"
                            value={data.university}
                            onChange={handleChange}
                        ></Input>
                    </div>
                    {/* address field */}
                    <div className="grid gap-2">
                        <Label>Address</Label>
                        <Input
                            placeholder="Your address"
                            required
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                        ></Input>
                    </div>
                    <SaveBtn />
                </form>
            </CardContent>
        </Card>
    )
}

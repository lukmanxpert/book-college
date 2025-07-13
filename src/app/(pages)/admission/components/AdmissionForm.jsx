"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function AdmissionForm({ colleges, user }) {
    const { email, name, address, image } = user;
    const { pending } = useFormStatus();

    const [data, setData] = useState({
        name: name || "",
        email: email || "",
        address: address || "",
        image: image || "",
        collegeId: "",
        subject: "",
        phone: "",
        dob: null,
    });

    const [dobError, setDobError] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let hasError = false;

        if (!data.collegeId) {
            toast("Please select a college.");
            hasError = true;
        }

        if (!data.subject) {
            toast("Please select a subject.");
            hasError = true;
        }

        if (!data.dob) {
            toast("Please select your date of birth.");
            hasError = true;
        }

        if (hasError) return;

        // Format date before submit if needed
        const submissionData = {
            ...data,
            dob: data.dob ? format(data.dob, "yyyy-MM-dd") : null,
        };

        console.log("Form submitted with:", submissionData);

        // Submit logic here (e.g. API call)
    };


    const subjectOptions = ["CSE", "EEE", "BBA", "MBA", "English", "Law", "Architecture"];

    console.log('data :>> ', data);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Admission Form</CardTitle>
                    <CardDescription>
                        Fill in your details to apply for admission.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="grid gap-5">
                        {/* College */}
                        <div className="grid gap-2">
                            <Label htmlFor="college">Select College <span className="text-red-500">*</span></Label>
                            <Select
                                value={data.collegeId}
                                onValueChange={(value) =>
                                    setData((prev) => ({ ...prev, collegeId: value }))
                                }
                                required
                            >
                                <SelectTrigger id="college">
                                    <SelectValue placeholder="Select a college" />
                                </SelectTrigger>
                                <SelectContent>
                                    {colleges.map((college, idx) => (
                                        <SelectItem key={idx} value={college._id}>
                                            {college.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Name */}
                        <div className="grid gap-2">
                            <Label htmlFor="name">Candidate Name <span className="text-red-500">*</span></Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter full name"
                                required
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Subject */}
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                            <Select
                                value={data.subject}
                                onValueChange={(value) =>
                                    setData((prev) => ({ ...prev, subject: value }))
                                }
                                required
                            >
                                <SelectTrigger id="subject">
                                    <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjectOptions.map((subject, idx) => (
                                        <SelectItem key={idx} value={subject}>
                                            {subject}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Candidate Email <span className="text-red-500">*</span></Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="hello@example.com"
                                required
                                value={data.email}
                                readOnly
                            />
                        </div>

                        {/* Phone */}
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Phone number"
                                required
                                pattern="[0-9]{10,15}"
                                title="Enter a valid phone number"
                                value={data.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Address */}
                        <div className="grid gap-2">
                            <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
                            <Input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Your address"
                                required
                                value={data.address}
                                onChange={handleChange}
                            />
                        </div>

                        {/* DOB */}
                        <div className="grid gap-2">
                            <Label>Date of Birth <span className="text-red-500">*</span></Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !data.dob && "text-muted-foreground border-red-500"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {data.dob ? format(data.dob, "PPP") : <span>Select date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={data.dob}
                                        onSelect={(date) => {
                                            if (date) {
                                                setData((prev) => ({ ...prev, dob: date }));
                                                setDobError(false);
                                            }
                                        }}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            {dobError && (
                                <span className="text-sm text-red-500">Date of Birth is required</span>
                            )}
                        </div>

                        {/* Image URL */}
                        <div className="grid gap-2">
                            <Label htmlFor="image">Image URL <span className="text-red-500">*</span></Label>
                            <Input
                                id="image"
                                name="image"
                                type="url"
                                placeholder="Your image url"
                                required
                                pattern="https?://.+"
                                title="Please enter a valid URL (starting with http:// or https://)"
                                value={data.image}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            variant="outline"
                            className="w-full mt-4 cursor-pointer"
                            disabled={pending}
                        >
                            {pending ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

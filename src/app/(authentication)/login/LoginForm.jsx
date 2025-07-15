"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react"; // ✅ correct import
import { useRouter } from "next/navigation"; // ✅ for redirect
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid email or password");
            toast.error("Invalid email or password")
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                    placeholder="hello@example.com"
                    required
                    type="email"
                    name="email"
                />
            </div>
            <div className="grid gap-2">
                <Label>Password</Label>
                <Input
                    placeholder="••••••••"
                    required
                    type="password"
                    name="password"
                />
            </div>
            <Button
                type="submit"
                className="cursor-pointer"
            >
                Login
            </Button>
            {/* {error && <p className="text-red-500">{error}</p>} */}
        </form>
    );
}

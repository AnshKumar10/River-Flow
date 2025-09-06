"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APP_NAME, IMAGES, ROUTE_URLS } from "@/lib/constant";
import Image from "next/image";
import { useAuthStore } from "@/store/auth";
import { useState } from "react";
import { toast } from "sonner";

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });

    const { login, createAccount } = useAuthStore();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: RegisterFormData) => {
        const { email, password, name } = data;

        const response = await createAccount(name, email, password);

        if (response.error) {
            toast.error(response.error!.message);
        } else {
            const loginResponse = await login(email, password);
            if (loginResponse.error) toast.error(loginResponse.error!.message);
        }

        setIsLoading(false);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-6 md:p-8"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Header */}
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">
                                    Create an account
                                </h1>
                                <p className="text-muted-foreground text-balance">
                                    Register to start using {APP_NAME}
                                </p>
                            </div>

                            {/* Name Field */}
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="*********"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                disabled={isLoading}
                                type="submit"
                                className="w-full"
                            >
                                Register
                            </Button>

                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <a
                                    href={ROUTE_URLS.LOGIN}
                                    className="underline underline-offset-4"
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>

                    <div className="relative hidden md:block w-full h-full">
                        <Image
                            src={IMAGES.AUTH}
                            alt="Login Image"
                            fill
                            className="object-fill"
                            priority
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

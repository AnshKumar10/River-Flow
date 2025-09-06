"use client";

import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { session } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (session) router.push("/");
    }, [session, router]);

    if (session) return null;

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
        </div>
    );
};

export default Layout;

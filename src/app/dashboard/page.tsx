"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import NavLog from "../navlog";
var log = 0;
export default function Home() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('api/auth/signin')
        }
    })
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-blue-900">
            <NavLog />
        </main>
    );
}

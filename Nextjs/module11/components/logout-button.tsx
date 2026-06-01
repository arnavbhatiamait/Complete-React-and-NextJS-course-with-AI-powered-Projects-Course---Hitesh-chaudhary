"use client"
import React from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
const LogoutButton = () => {
    const router = useRouter();
    const onLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out successfully")
                    router.push('/login');
                }
            }
        });
    };

    return (
        <div>
            <Button onClick={onLogout}
                variant='destructive'
            >
                Sign Out
            </Button>
        </div>
    )
}

export default LogoutButton

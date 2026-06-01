"use client"
import React from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/router'
const LogoutButton = () => {
    const router = useRouter();
    const onLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
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

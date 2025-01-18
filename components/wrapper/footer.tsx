"use client"
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                <p className="text-xs text-center">&copy; 2024. SomeCompany LLC. All rights reserved.</p>
            </div>
        </footer>
    )
}

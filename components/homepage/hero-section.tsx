import { ArrowRight, Github } from 'lucide-react';
import Link from "next/link";
import { Button } from "../ui/button";
import Image from 'next/image';
import { TITLE_TAILWIND_CLASS } from '@/utils/constants';

export default function HeroSection() {
    return (
        <section className='flex flex-col items-center justify-center leading-6 mt-[3rem]' aria-label="Nextjs Starter Kit Hero">
            <h1 className={`${TITLE_TAILWIND_CLASS} scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}>
                Nextjs Starter Kit: Build & Ship Fast
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 text-center mt-2 dark:text-gray-400">
                The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters
            </p>
            <div className="flex justify-center items-center gap-3">
                <Link href="/dashboard" className="mt-5">
                    <Button className="rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
                        Get Started
                    </Button>
                </Link>

                <Link
                    href="https://discord.gg/HUcHdrrDgY"
                    target='_blank'
                    className="mt-5"
                    aria-label="Join Discord (opens in a new tab)"
                >
                    <Button variant="outline" className="flex gap-1">
                        Join Discord
                        <ArrowRight className='w-4 h-4' aria-hidden="true" />
                    </Button>
                </Link>
                <Link
                    href="https://github.com/michaelshimeles/nextjs14-starter-template"
                    target='_blank'
                    className='border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer'
                    aria-label="View NextJS 14 Starter Template on GitHub"
                >
                    <Github className='w-5 h-5' aria-hidden="true" />
                </Link>
            </div>
            <div>
                <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
                    <div className="relative rounded-xl">
                        <Image
                            src="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
                            width={1100}
                            height={550}
                            alt="Nextjs Starter Kit Dashboard Preview"
                            priority={true}
                            className="rounded-[inherit] border object-contain shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

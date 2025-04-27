'use client'

import { ChevronLeft, Info, LogOut, LucideComputer, Moon, Settings, Sun, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger, useSidebar } from './ui/sidebar'

const Navbar = () => {

    const { setTheme } = useTheme()
    const { state, toggleSidebar } = useSidebar()
    
    return (
        <nav className='flex items-center justify-between py-4'>
            {/* Left */}
            {/* <SidebarTrigger/> */}
            <Button variant="ghost" onClick={toggleSidebar}><ChevronLeft className={`ml-auto transition-transform ${state === 'collapsed' ? 'rotate-180' : ''}`} /></Button>
            <h1 className='p-1 text-yellow-600 text-sm font-light bg-yellow-100 border border-yellow-600 rounded-md animate-pulse flex gap-2 items-center'><Info/> Still in development</h1>
            {/* Right */}
            <div className='flex items-center gap-4'>
                <Link href="/" className='font-medium'>Dashboard</Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                            <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Toggle theme</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setTheme("light")}><Sun />Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}><Moon /> Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}><LucideComputer /> System</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User />Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'><LogOut />Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}

export default Navbar
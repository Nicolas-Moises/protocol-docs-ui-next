"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    children: string
    href: string
}

export function NavLink(props: NavLinkProps) {

    const activeHref = usePathname()
    return (
        <Link
            href={props.href}
            data-active={activeHref === props.href}
            className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors  data-[active=true]:border-green-400"
        >
            {props.children}
        </Link>
    )
}
import { Moon } from 'lucide-react'
import { Search } from 'lucide-react'

export function Header() {
    return (
        <header className="fixed top-0 left-80 right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-between">
            <button className='w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 h-8 hover:border-white/20 transition-colors duration-150 '>
                <Search size={14} />
                <span>
                    Find something...
                </span>
            </button>

            <div className='flex items-center'>
                <nav className='text-sm flex items-center gap-6'>
                    <a href="" className='text-zinc-400 hover:text-zinc-100 transitions-colors duration-100'>API</a>
                    <a href="" className='text-zinc-400 hover:text-zinc-100 transitions-colors duration-100'>Documentation</a>
                    <a href="" className='text-zinc-400 hover:text-zinc-100 transitions-colors duration-100'>Support</a>
                </nav>

                <div className='flex items-center border-l border-white/10 pl-6 ml-6 gap-6'>

                    <button className='p-1 rounded-md hover:bg-white/10 transition-colors duration-150'>
                        <Moon size={14} className='text-zinc-100' />
                    </button>

                    <button className='border border-green-800 bg-cyan-400/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium hover:border-green-400 transition-colors duration-200'>
                        Sign in
                    </button>
                </div>
            </div>
        </header>
    )
}
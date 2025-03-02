import links from '@/utils/links';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
        <h1>Sidebar</h1>
        <aside className='py-4 px-8 bg-muted h-full'>
          <div className='flex flex-col mt-20 gap-y-4'>
            {links.map((link) => {
              return (
                <Button
                  asChild
                  key={link.href}
                  className='hover:shadow-lg hover:bg-white hover:text-primary'
                >
                  <Link href={link.href} className='flex items-center gap-x-2 '>
                    {link.icon} <span className='capitalize'>{link.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </aside>
    </div>
  )
}

export default Sidebar
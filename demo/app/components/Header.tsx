import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-zinc-50 h-56 flex flex-col items-center justify-center w-auto'>
    <h1 className='text-5xl sm:text-9xl'>Header</h1> 
    <div>
    <Button>Press Me</Button> 
    </div>
    </div>
  )
}

export default Header

import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex felx-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://www.youtube.com/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.youtube.com/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.youtube.com/" fgColor='gray' bgColor='transparent' />
        </div>
        <div>
          <SocialIcon 
              className='cursor-pointer'
              network='email'
              fgColor='gray'
              bgColor='transparent'
          />
          <p className='uppercase text-red-400'>
            Get in Touch
          </p>
        </div>
    </header>
  )
}
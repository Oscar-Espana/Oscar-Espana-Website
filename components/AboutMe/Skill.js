import React from 'react'
import Image from 'next/image'

const Skill = ({ image, skill }) => {
  return (
    <div className='flex gap-3 justify-center sm:justify-start items-center'>
      <Image
        width={36}
        height={36}
        src={image}
        alt={skill}
      />
      <p className='hidden sm:block text-lg text-white font-medium'>{skill}</p>
    </div>
  )
}

export default Skill

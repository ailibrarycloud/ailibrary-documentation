import logoAILibrary from '@/images/logos/ailibrary.svg'
import Image from 'next/image'

export function Logo(props) {
  return (
    <div className="flex items-center">
      <Image src={logoAILibrary} alt="" className="me-3 h-6 w-6 " unoptimized />
      <span className='font-bold'>AI Library, Inc.</span>
    </div>
  )
}

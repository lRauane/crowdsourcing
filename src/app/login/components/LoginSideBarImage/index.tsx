'use client'
import handsImage from '@/assets/Rectangle 5.jpg'

export default function LoginSideBarImage(){
  return (
    <div className='hidden lg:block lg:w-[480px]'>
      <img src={handsImage.src} alt={'Maos Unidas'} className='object-cover h-full w-full'/>
    </div>
  )
}
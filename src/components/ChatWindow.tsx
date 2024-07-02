import Image from "next/image";
import { Inter } from "next/font/google";
import chatData from '@/JsonData/chatdata.json'
import BlueCheckIcon from '../../public/images/blueCheck.svg'
import Arrow from '../../public/images/arrow.svg'
import Profile1 from '../../public/images/profile1.svg'
import Profile2 from '../../public/images/profile2.svg'
import Profile3 from '../../public/images/profile3.svg'
import Profile4 from '../../public/images/profile4.svg'
const inter = Inter({ subsets: ["latin"] });

export const ChatWindow = () => {
    return (
        <div className="flex-1 overflow-auto flex flex-col gap-3 p-4 max-h-[calc(100%-122px)]">
            {chatData?.map(({ message, isCurrentUser, timestamp, online,profile,username, avatar }: { message: string, isCurrentUser: boolean, timestamp?: string, online?: boolean,profile?:string,username?:string, avatar?: any }) => {
                return isCurrentUser?<div className='flex justify-end w-full'>

      <div className='flex  relative bg-[#007AFF] px-2 py-1 rounded-md max-w-[265px] w-full 
      before:content-[""] before:absolute before:right-[-8px] before:top-0 before:border-t-[8px] before:border-r-[15px] before:border-t-[#007AFF] before:border-r-transparent
      '>
        {/* <div className="absolute right-[-2px] top-0 ">
            <div className="absolute rotate-45 bg-white -bottom-[14px] -right-[12px] w-2 h-5 z-10 "></div>
            <div className="absolute -right-[6px] w-[13px] h-[8px] z-0 rounded-tr-sm bg-[#007AFF]"></div>
        </div> */}

        <div className='flex flex-col w-full'>

          <div className='flex flex-wrap justify-start'>
            <p className='text-sm text-white'>{message}</p>
          </div>
          <div className='flex justify-end'>
            <span> {timestamp}</span>
            <Image src={BlueCheckIcon} width={16} height={8} alt='check' />
          </div>
        </div>
      </div>
    </div>:<div className='flex gap-1 items-start'>
      <div className='w-8 relative h-8 min-w-8 rounded-full'>
        <Image src={Profile1} width={32} height={32} alt='sender' />
        {online ? <span className='absolute bottom-0 right-0 w-[10px] h-[10px] border border-white rounded-full bg-[#34C759]'></span> : null}
      </div>
      <div className='flex relative bg-[#F2F2F7] px-2 py-1 rounded-md max-w-[265px] w-full
      before:content-[""] before:absolute before:left-[-8px] before:top-0 before:border-t-[8px] before:border-l-[15px] before:border-l-transparent before:border-t-[#F2F2F7] '>
    
        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-1 '>
            <h5 className='text-sm text-[#2C2C2E] font-semibold '>{username}</h5>
            <span className='text-xs text-[#666668] font-normal'>{profile}</span></div>
          <p className='text-sm text-[#2C2C2E] font-normal'>{message}</p>
          <div className='flex justify-end w-full text-sm text-[#666668]'>
            {timestamp}
          </div>
        </div>
      </div>
    </div>
            })}
        </div>
    )
}
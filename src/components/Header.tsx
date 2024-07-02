import Image from "next/image";
import { Inter } from "next/font/google";
import Profile1 from '../../public/images/profile1.svg'
import Profile2 from '../../public/images/profile2.svg'
import Profile3 from '../../public/images/profile3.svg'
import Profile4 from '../../public/images/profile4.svg'
import MoreIcon from '../../public/images/more.svg'

const inter = Inter({ subsets: ["latin"] });

const Header=()=>{
  return ( <header className='flex justify-between items-center p-4 border-b border-[rgba(229,229,234,1)] shadow-sm'>
      <div className='flex items-center'>
        <div className=' flex justify-center items-center'>
          <Image src={Profile1} width={26} height={26} alt="Profile1" className='border-[2px] border-white rounded-full' />
          <Image className='-ml-2 border-[2px] border-white rounded-full  ' src={Profile2} width={26} height={26} alt="Profile2" />
          <Image className='-ml-2 border-[2px] border-white rounded-full' src={Profile3} width={26} height={26} alt="Profile3" />
          <Image className='-ml-2 border-[2px] border-white rounded-full' src={Profile4} width={26} height={26} alt="Profile4" />
        </div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <h5 className='text-sm text-[#2C2C2E] font-extrabold'>🦄 Team Unicorns</h5>
        <p className='text-xs text-[#666668]'>last seen 45 minutes ago</p>
      </div>
      <div className='flex' >
        <div className='w-6 h-6 hover-bg-[#eee] rounded-[4px] flex cursor-pointer items-center justify-center'>
          <Image src={MoreIcon} width={16} height={16} alt="moreIcon" />
        </div>
      </div>
    </header>)
}
export default Header;
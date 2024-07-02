import Image from "next/image";
import { Inter } from "next/font/google";
import Emoji from '../../public/images/emoji.svg'
import Email from '../../public/images/email.svg'
import Send from '../../public/images/send.svg'

const inter = Inter({ subsets: ["latin"] });

const Footer=()=>{
  return ( <footer className="border-t w-full flex justify-between items-center px-3 shadow-sm  border-[#E5E5EA]">
      <div className="w-6 relative h-6 mr-1 flex justify-center items-center">
        <Image src={Emoji} width={16} height={16} alt="avatar" className='' />
       
      </div>
      <input className=' text-sm text-[#666668] w-full border-none h-12 outline-none'  placeholder='Start typing...' />
      <div className='flex items-center gap-4'>
      <Image src={Email} width={16} height={16} alt="avatar" className=' text-[#3D3D3D]' />  
      <Image src={Send} width={16} height={16} alt="avatar" className='text-[#8E8E93]' />  
      </div>
    </footer >)
}
export default Footer;
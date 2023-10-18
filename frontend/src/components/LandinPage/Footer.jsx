import { IoLogoGooglePlaystore, IoLogoWindows, IoLogoInstagram } from 'react-icons/io5';
import { GrFacebookOption } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <section className="flex flex-col bg-mDarkGray w-full h-36 justify-between p-10 md:flex-row">
            <div id="left-elements" className='flex gap-3 items-center'>

                <div className="flex p-1 bg-mWhite gap-1 text-mBlack w-44 h-12 text-sm rounded-lg items-center">
                    <IoLogoGooglePlaystore className='text-mBlack text-5xl' />
                    <div className=''>
                        <p className='font-semibold text-mBlack'>Download on the</p>
                        <p className=' '>Google Play</p>
                    </div>
                </div>

                <div className="flex p-1 bg-mWhite gap-1 text-mBlack w-44 h-12 text-sm rounded-lg items-center">
                    <IoLogoWindows className='text-5xl' />
                    <div className='py-2'>
                        <p className='font-semibold'>Download on the</p>
                        <p className=''>Windows Store</p>
                    </div>
                </div>
            </div>
            <div id="rigth-elements" className='flex justify-center items-center gap-3'>
                <div className='bg-mWhite  w-10 h-10 rounded-full text-mDarkGray justify-center items-center '>
                    <GrFacebookOption className='w-full text-5xl mt-[0.2px]' />
                </div>
                <div className='bg-mWhite  w-10 h-10 rounded-full text-mDarkGray justify-center items-center '>
                    <IoLogoInstagram className='w-full text-3xl mt-1' />
                </div>
                <div className='bg-mWhite  w-10 h-10 rounded-full text-mDarkGray justify-center items-center '>
                    <FaXTwitter className='w-full text-3xl mt-1' />
                </div>
            </div>
        </section>
    )
}

export default Footer
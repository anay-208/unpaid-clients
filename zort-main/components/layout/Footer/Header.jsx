import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    return (
        <div className={"z-30 w-full flex  justify-center px-[1.5rem] sm:px-[3rem] xl:px-[100px] 2xl:px-[215px] py-[.625rem] drop-shadow-xl"}>
            <div className='relative grow flex justify-between items-start px-[1.5rem] w-full'>
                <div className='flex items-center'>
                    <button className='flex justify-center items-center transition-all duration-300 z-10'
                        onClick={()=> {
                            router.push("https://zort.com/")
                        }}
                    >
                        <Image
                            src='/images/logo.webp'
                            alt='ThinkingMind'
                            width={90}
                            height={37}
                        />
                    </button>
                </div>
                {/* <Navbar className="absolute w-full flex justify-center items-center hidden lg:flex" /> */}
                 
                <div className="grow  justify-center items-start hidden lg:flex  text-[1.125rem] leading-[26px] font-medium text-[#A7ADB4] px-[60px]">
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Trading Arena </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/3 after:bottom-0 after:left-0 '> About </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> How It Works </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/3 after:bottom-0 after:left-0'> Reviews </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> ZVaults </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/3 after:bottom-0 after:left-0'> About </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> How It Works </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/3 after:bottom-0 after:left-0'> Reviews </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Zort lite </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> Technology </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> Security </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> Zort Coin  </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Comapny </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> About Us </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/3 after:bottom-0 after:left-0'> Support </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/3 after:bottom-0 after:left-0'> FAQ&apos;s </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.5rem]'> Comapny </p>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-4/6 after:bottom-0 after:left-0'> Terms of Service </button>
                        <button className='text-[#8F95A2] text-left text-[.875rem] leading-[26px] mb-[6px] relative after:absolute after:h-[0.1rem] after:origin-left after:scale-x-0 hover:after:scale-x-100  after:bg-white after:transform after:transition-all after:duration-200 after:ease-in-out after:w-1/2 after:bottom-0 after:left-0'> Privacy Policy </button>
                    </div>
                    <div className='flex flex-col grow'>
                        <p className='text-white text-[1rem] leading-[28px] mb-[.75rem]'> Get the app </p>
                        <button className='flex justify-center items-center rounded-full w-[150px] h-[2rem] border-[2px] px-[1.25rem] py-[1rem] text-white mr-[0.75rem] hover:bg-white hover:text-black border-gradient mb-[1rem] transition'>
                            Login
                        </button>
                        <button className='flex justify-center items-center rounded-full w-[150px] h-[2rem] border-[2px] px-[1.25rem] py-[1rem] text-[#C0F821] border-[#C0F821] hover:bg-[#C0F821] hover:text-black transition'>
                            Sign Up
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
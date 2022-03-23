import { useState } from 'react';
import Link from 'next/link';

type TProps = {
    selected: 'about' | 'home' | 'workshops' | 'references' | 'gallery' | 'services';
}

const About = ({selected}: TProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='bg-white px-4 lg:px-16 transition-all ease-in duration-75'>
            <div className='py-4 flex justify-center'>
                <div className='flex flex-row justify-center items-center hidden lg:flex'>
                    <Link href='/'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'home' ? 'text-accent-8' : ''}`}>
                            Next Education
                        </div>
                    </Link>

                    <Link href='/workshops'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'workshops' ? 'text-accent-8' : ''}`}>
                            Workshops
                        </div>
                    </Link>

                    <Link href='/about'>
                        <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'about' ? 'text-accent-8' : ''}`}>
                            About
                        </div>
                    </Link>
                </div>
                <div className='lg:hidden py-4'>
                    <input onChange={() => setOpen(!open)} id="toggle" type="checkbox" />
                    <label className="hamburger" htmlFor="toggle">
                        <div className="top"/>
                        <div className="meat"/>
                        <div className="bottom"/>
                    </label>
                </div>
            </div>
            {
                open && (
                    <div className='flex flex-col justify-center items-center'>
                        <Link href='/'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'home' ? 'text-accent-8' : ''}`}>
                                Next Education
                            </div>
                        </Link>

                        <Link href='/workshops'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'workshops' ? 'text-accent-8' : ''}`}>
                                Workshops
                            </div>
                        </Link>

                        <Link href='/about'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'about' ? 'text-accent-8' : ''}`}>
                                About
                            </div>
                        </Link>
                        <br/>
                        <br/>
                    </div>
                )
            }
        </div>
    );
};

export default About;

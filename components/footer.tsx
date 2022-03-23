import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: NextPage = () => {

    return (
        <div className='bg-accent-4 px-4 lg:px-16 py-4 lg:py-16 flex flex-col lg:flex-row justify-between items-center lg:items-end text-white'>
            <div className='text-left'>
                Next education GmbH.<br/>
                Email: <a href='mailto:info@next.education'>info@next.education</a>
            </div>
            <div>
                © 2022 All rights reserved.
            </div>
        </div>
    );
};

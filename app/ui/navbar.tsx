'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NavBar: FC = () => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(prevState => !prevState);
    };
    return (
        <header className='flex justify-evenly items-center bg-blue-400 text-white relative'>
            <h1 className='mx-auto text-xl sm:text-2xl'>Zdjęcia z wczasów</h1>
            {active && (
                <ul className='absolute top-12 right-5 flex flex-col items-start'>
                    <Link
                        onClick={handleClick}
                        className={clsx('mt-3 text-xl', {
                            'bg-sky-100 text-blue-600 p-2 rounded-xl':
                                pathname === '/',
                        })}
                        href='/'>
                        Start
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={clsx('mt-3 text-xl', {
                            'bg-sky-100 text-blue-600 p-2 rounded-xl':
                                pathname === '/gallery',
                        })}
                        href='/gallery'>
                        Galeria
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={clsx('mt-3 text-xl', {
                            'bg-sky-100 text-blue-600 p-2 rounded-xl':
                                pathname === '/contact',
                        })}
                        href='/contact'>
                        Kontakt
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={clsx('mt-3 text-xl', {
                            'bg-sky-100 text-blue-600 p-2 rounded-xl':
                                pathname === '/blog',
                        })}
                        href='/blog'>
                        Blog
                    </Link>
                </ul>
            )}

            <button
                onClick={handleClick}
                className='flex flex-col justify-center items-center w-10 h-14 text-white md:hidden'>
                <span
                    className={clsx('h-[2px] w-7 bg-white', {
                        rotate: active,
                    })}></span>
                <span
                    className={clsx('m-[7px] h-[2px] w-7 bg-white', {
                        'rotate-reverse': active,
                    })}></span>
                <span
                    className={clsx('h-[2px] w-7 bg-white', {
                        hidden: active,
                    })}></span>
            </button>
        </header>
    );
};

export default NavBar;

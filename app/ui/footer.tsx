import { FC } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer: FC = () => {
    return (
        <footer className='bg-gray-600'>
            <section className='flex flex-col items-center text-white'>
                <p className='ml-4'>&copy; 2024 FreeCoder</p>
                <div className='flex justify-center'>
                    <EnvelopeIcon className='h-8 w-8 ml-8' />
                    <p className='ml-4'> m.raubuc@wp.pl</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

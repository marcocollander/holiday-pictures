import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <div className='flex justify-center'>
                <Image
                    className='block md:hidden'
                    src='/images/hero/hero-mobile.jpg'
                    alt='Kobieta i mężczyzna na tle morza'
                    width={600}
                    height={800}
                    priority
                />
                <Image
                    className='hidden md:block'
                    src='/images/hero/hero.jpg'
                    alt='Kobieta i mężczyzna na tle morza'
                    width={1100}
                    height={825}
                    priority
                />
            </div>
        </main>
    );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <main>
            <section>
                <h1>Galleria</h1>
                <div>
                    <h2>Paryż marzec 2024</h2>
                    <Link href={'/gallery/france'}>
                        <Image
                            src={'/images/france/paris.jpg'}
                            alt={'france'}
                            width={500}
                            height={500}
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}

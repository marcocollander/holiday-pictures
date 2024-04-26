import { FC } from 'react';

const NavBar: FC = () => {
    return (
        <header className='flex'>
            <div className=''>Logo</div>
            <h1 className=''>Zdjęcia z wczasów</h1>
            <ul className='hidden md:inline-block'>
                <li>
                    <a href={'/'}>Home</a>
                </li>
                <li>
                    <a href='/gallery'>Galeria</a>
                </li>
                <li>
                    <a href='/contact'>Kontakt</a>
                </li>
                <li>
                    <a href='/Blog'>Blog</a>
                </li>
            </ul>
        </header>
    );
};

export default NavBar;

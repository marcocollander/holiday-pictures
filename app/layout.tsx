import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Zdjęcia z wczasów',
    description: 'Zdjęcia z wczasów',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className + ' bg-gray-600 md:bg-blue-400'}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

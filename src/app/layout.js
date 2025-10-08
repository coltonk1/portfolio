import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

export const metadata = {
    title: 'Colton Karaffa',
    description:
        'Custom websites for small businesses, startups, and individuals — fast, responsive, SEO-ready, and designed to convert. No templates, just clean code and tailored design.',
    icons: {
        icon: '/logo.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="main" suppressHydrationWarning>
            <head>
                <ThemeScript />
            </head>
            <body
                className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}

import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';
import LineSrc from '@/assets/herolines.webp';
import Script from 'next/script';
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
                <link rel="preload" as="image" href={LineSrc.src} fetchPriority="high" />
                <ThemeScript />
            </head>
            <body
                className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
            >
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17644189543"
                    strategy="afterInteractive"
                />
                <Script id="google-ads" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17644189543');
          `}
                </Script>
                <NavBar />
                {children}
            </body>
        </html>
    );
}

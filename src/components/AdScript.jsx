'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function AdsScripts() {
    const [enabled, setEnabled] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check localStorage so banner doesn’t reappear on every page load
        const consent = localStorage.getItem('ads-consent');
        if (!consent) setShowBanner(true);
        else if (consent === 'granted') setEnabled(true);
    }, []);

    const accept = () => {
        setEnabled(true);
        setShowBanner(false);
        localStorage.setItem('ads-consent', 'granted');
    };

    const decline = () => {
        setEnabled(false);
        setShowBanner(false);
        localStorage.setItem('ads-consent', 'denied');
    };

    return (
        <>
            {showBanner && (
                <div
                    className="
      fixed bottom-6 right-6
      w-[90%] max-w-xl
      bg-brand-white border-2 border-brand-purple/70
      rounded-2xl shadow-md
      p-6 flex flex-col gap-4 md:justify-between
      animate-slide-up z-50
    "
                >
                    <p className="text-sm leading-relaxed text-brand-grey">
                        I use a few third-party cookies to measure site performance and improve your
                        experience. You can choose to allow or decline them.
                    </p>

                    <div className="flex gap-3 justify-end">
                        <button
                            onClick={decline}
                            className="
          px-5 py-3 text-sm font-medium rounded-lg
          bg-brand-off-white !text-brand-grey border-2 border-brand-off-white
          hover:bg-brand-grey hover:!text-brand-off-white
          transition-colors cursor-pointer
        "
                        >
                            Decline
                        </button>

                        <button
                            onClick={accept}
                            className="
          px-5 py-3 text-sm font-medium rounded-lg
          bg-brand-purple !text-brand-white border-2 border-brand-purple
          hover:bg-brand-grey hover:border-brand-grey hover:!text-brand-off-white
          transition-colors cursor-pointer
        "
                        >
                            Allow Cookies
                        </button>
                    </div>
                </div>
            )}

            {enabled && (
                <>
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
              gtag('config', 'AW-17644189543', {
                'allow_ad_personalization_signals': false,
                'conversion_linker': false
              });
            `}
                    </Script>
                </>
            )}
        </>
    );
}

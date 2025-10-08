'use client';

import { useEffect, useState } from 'react';

export default function TimeBasedNote() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();

        let text = '';
        if (hour >= 0 && hour < 5) {
            text = "You're up late. Me too.";
        } else if (hour >= 5 && hour < 8) {
            text = 'Early bird vibes.';
        } else if (hour >= 8 && hour < 12) {
            text = 'Good morning!';
        } else if (hour >= 12 && hour < 17) {
            text = 'Afternoon check-in?';
        } else if (hour >= 17 && hour < 21) {
            text = 'Evenings are for side projects.';
        } else {
            text = 'Late night browsing, huh?';
        }

        setMessage(text);
    }, []);

    return (
        <div className="w-full bg-brand-white mt-2" aria-hidden="true">
            <p className="!text-xs text-brand-grey italic opacity-60 text-center">{message}</p>
        </div>
    );
}

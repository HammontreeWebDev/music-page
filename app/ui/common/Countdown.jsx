import { useState, useEffect } from 'react';
import moment from 'moment';

export default function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = moment(targetDate).diff(moment());
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(moment.duration(difference).asDays()),
                hours: moment.duration(difference).hours(),
                minutes: moment.duration(difference).minutes(),
                seconds: moment.duration(difference).seconds(),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className=" xs:flex xs:flex-row flex flex-col xs:items-center xs:justify-start xs:space-x-4 text-center text-[var(--foreground)]">
            <div className='flex items-center justify-start space-x-4 text-center'>
                <div className="bg-[var(--alt4)] p-2 lg:p-4 rounded-lg shadow-md">
                    <p className="text-sm lg:text-lg font-bold">{timeLeft.days || '0'}</p>
                    <span className="text-sm text-[var(--primary5)] font-semibold">Days</span>
                </div>
                <div className="bg-[var(--alt4)] p-2 lg:p-4 rounded-lg shadow-md">
                    <p className="text-sm lg:text-lg font-bold">{timeLeft.hours || '0'}</p>
                    <span className="text-sm text-[var(--primary5)] font-semibold">Hours</span>
                </div>
            </div>
            <div className='flex items-center justify-start space-x-4 text-center mt-2 xs:mt-0'>
                <div className="bg-[var(--alt4)] p-2 lg:p-4 rounded-lg shadow-md">
                    <p className="text-sm lg:text-lg font-bold">{timeLeft.minutes || '0'}</p>
                    <span className="text-sm text-[var(--primary5)] font-semibold">Minutes</span>
                </div>
                <div className="bg-[var(--alt4)] p-2 lg:p-4 rounded-lg shadow-md">
                    <p className="text-sm lg:text-lg font-bold">{timeLeft.seconds || '0'}</p>
                    <span className="text-sm text-[var(--primary5)] font-semibold">Seconds</span>
                </div>
            </div>
        </div>
    );
} 
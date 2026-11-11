import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const LiveCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isPast) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Event in Progress or Concluded</span>
      </div>
    );
  }

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="flex items-center gap-1.5 text-xs font-mono text-notion-muted">
        <Clock className="w-3.5 h-3.5 text-nerd-green" />
        <span>COUNTDOWN (IST):</span>
      </div>
      <div className="flex items-center gap-2">
        {units.map((unit, idx) => (
          <div key={unit.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center bg-white border border-notion-border rounded px-2.5 py-1 min-w-[52px] shadow-sm">
              <span className="font-mono text-base font-semibold text-notion-text tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono text-notion-faint uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
            {idx < units.length - 1 && (
              <span className="font-mono text-notion-faint text-xs font-bold">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


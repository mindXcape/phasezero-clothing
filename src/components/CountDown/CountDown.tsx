import React, { useEffect, useState } from 'react';
import { ArrowDropDownCircleIcon } from 'assets/icons';

interface CountdownProps {
  targetDate: Date;
  initialDays: number;
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

function Countdown({
  targetDate,
  initialDays,
  initialHours,
  initialMinutes,
  initialSeconds,
}: CountdownProps) {
  const [countdown, setCountdown] = useState<{
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
  }>({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate.getTime() - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0');
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      )
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0');

      setCountdown({ days, hours, minutes, seconds });

      if (timeDifference < 0) {
        clearInterval(interval);
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="background__video__wrapper">
      <div className="background__video">
        <video autoPlay loop muted>
          <source
            src="https://drive.google.com/uc?export=view&id=101h7mn6N6FPkRrAdHoFggb4auhXorjAv"
            type="video/mp4"
          />
        </video>
        {/* <img
          src="https://drive.google.com/uc?id=1ErBL44SFWqkh7z2NE32UpXv0A5L7P_xW"
          alt="Background gif"
        /> */}
      </div>
      <div className="count__down__wrapper">
        <div className="count__down__card__wrapper">
          <div className="count__down__card__content">
            <div className="count__down__card__left">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.days.toString().charAt(0)}</h3>
            </div>
            <div className="count__down__card__right">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.days.toString().charAt(1)}</h3>
            </div>
          </div>
          <div className="count__down__title">
            <h2>days</h2>
          </div>
        </div>
        <div className="count__down__card__wrapper">
          <div className="count__down__card__content">
            <div className="count__down__card__left">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.hours.toString().charAt(0)}</h3>
            </div>
            <div className="count__down__card__right">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.hours.toString().charAt(1)}</h3>
            </div>
          </div>
          <div className="count__down__title">
            <h2>hours</h2>
          </div>
        </div>
        <div className="count__down__card__wrapper">
          <div className="count__down__card__content">
            <div className="count__down__card__left">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.minutes.toString().charAt(0)}</h3>
            </div>
            <div className="count__down__card__right">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.minutes.toString().charAt(1)}</h3>
            </div>
          </div>
          <div className="count__down__title">
            <h2>minutes</h2>
          </div>
        </div>
        <div className="count__down__card__wrapper">
          <div className="count__down__card__content">
            <div className="count__down__card__left">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.seconds.toString().charAt(0)}</h3>
            </div>
            <div className="count__down__card__right">
              <div className="count__down__card__top" />
              <div className="count__down__card__bottom" />
              <h3>{countdown.seconds.toString().charAt(1)}</h3>
            </div>
          </div>
          <div className="count__down__title">
            <h2>seconds</h2>
          </div>
        </div>
        <div className="count__down__cursor">
          <a href="#phases_of_phase_zero">
            {' '}
            <ArrowDropDownCircleIcon
              className="animated__icon"
              sx={{ color: 'white' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Countdown;

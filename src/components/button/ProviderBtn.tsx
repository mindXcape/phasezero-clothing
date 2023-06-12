import React, { ReactNode } from 'react';
import '../../scss/main.scss';

interface ProviderBtnProps {
  className: string;
  title: string;
  disabled: boolean;
  providerIcon: ReactNode;
  eventHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const ProviderBtn = function ProviderBtn({
  providerIcon,
  className,
  title,
  disabled,
  eventHandler,
}: ProviderBtnProps) {
  return (
    <button
      type="button"
      className={`provider__btn ${className}`}
      onClick={eventHandler}
      disabled={disabled}
    >
      <div className="provider__wrapper">
        {providerIcon}
        <div className="btn__provider__title">{title}</div>
      </div>
    </button>
  );
};

export default ProviderBtn;

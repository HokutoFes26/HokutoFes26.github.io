import React from 'react';
import Link from 'next/link';
import styles from './BaseButton.module.css';

interface BaseButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  onClick?: () => void;
  target?: string;
  download?: string | boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({ 
  href, 
  children, 
  className = '', 
  centered = false, 
  onClick,
  target,
  download
}) => {
  const commonClassName = `${styles.btn} ${centered ? styles.centered : ''} ${className}`;

  if (href) {
    return (
      <Link 
        href={href} 
        className={commonClassName}
        onClick={onClick}
        target={target}
        {...(download ? { download } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      type="button" 
      className={commonClassName} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;

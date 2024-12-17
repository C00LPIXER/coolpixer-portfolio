'use client';

import React from 'react';
import styles from './AnimatedTooltip.module.scss';

interface AnimatedTooltipProps {
  text: string;
  platform: string;
  children: React.ReactNode;
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ 
  text, 
  platform, 
  children 
}) => {
  return (
    <div className={`${styles.tooltipWrapper} ${styles[platform.toLowerCase()]}`}>
      {children}
      <span className={styles.tooltip}>{text}</span>
    </div>
  );
};

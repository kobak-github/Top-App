import React from 'react';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';

export const ButtonIcon = ({
  icon,
  appearance,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      {...props}
      className={cn(styles.btnIcon, className, {
        [styles.white]: appearance == 'white',
        [styles.primary]: appearance == 'primary',
      })}>
      <IconComp />
    </button>
  );
};

import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({title, ...restProps}: ButtonProps) {
  return (
    <button type="button" className={styles.container} {...restProps}>
      {title}
    </button>
  );
}

export default Button;

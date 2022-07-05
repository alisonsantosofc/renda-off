import React from 'react';
import Button from '../Button';

import styles from './styles.module.scss';

function SideBar() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <span>renda</span>
        <span>OFF</span>
      </div>
      <Button title='nova despesa' />
    </header>
  );
}

export default SideBar;

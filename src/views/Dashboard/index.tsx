import React from 'react';
import SideBar from '../../components/SideBar';

import styles from './styles.module.scss';

function Dashboard() {
  return (
    <div className={styles.container}>
      <SideBar />
    </div>
  );
}

export default Dashboard;

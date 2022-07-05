import React from 'react';
import SideBar from '../../components/SideBar';

import styles from './styles.module.scss';

function Dashboard() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div style={{textAlign: 'left', maxWidth: '80%'}}>
        <h2>Gerenciar suas despesas nunca foi tão fácil.</h2>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import styles from './portada.module.css';
import banner from './assets/santaperabanner.jpeg';

const Portada = () => {

    return (
      <div className={styles.__contenedor}>
          <img className={styles.__banner} src={banner}/>
      </div>
    );
}

export default Portada;
import React from 'react';
import { Audio } from 'react-loader-spinner'
import css from './Loader.module.scss';

const Loader = () => {

    return (
		<div className={css['loader-animation']}>

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
/>
		</div>
    );
  }

  export default Loader

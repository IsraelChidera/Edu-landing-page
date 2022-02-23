import React from 'react';
import { Oval } from 'react-loader-spinner';

const loader = () => {
  return <>
        <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={3}
            color="#334"
            secondaryColor="lightblue"
        />
    </>;
};

export default loader;

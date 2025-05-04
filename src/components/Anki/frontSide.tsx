import React from 'react';
import Base from './base';

import { SideProps } from './types';

const FrontSide = ({ night_mode = false, data }: SideProps) => {
  const mainElement = () => <Base data={data} />;

  return (
    <div className="container">
      {night_mode ? (
        <div className="night_mode">{mainElement()}</div>
      ) : (
        mainElement()
      )}
    </div>
  );
};

export default FrontSide;

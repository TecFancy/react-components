import React from 'react';
import Base from './base';

import { SideProps } from './types';

const FrontSide = ({ data }: SideProps) => {
  const mainElement = () => <Base data={data} />;

  return (
    <div className="container">
      {data?.nightMode === 'true' ? (
        <div className="night_mode">{mainElement()}</div>
      ) : (
        mainElement()
      )}
    </div>
  );
};

export default FrontSide;

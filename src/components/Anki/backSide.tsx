import React from 'react';
import Base from './base';

import { SideProps } from './types';

const BackSide = ({ data }: SideProps) => {
  const mainElement = () => <Base data={data} />;

  return (
    <div className="back">
      <div className="container">
        {data?.nightMode === 'true' ? (
          <div className="night_mode">{mainElement()}</div>
        ) : (
          mainElement()
        )}
      </div>
    </div>
  );
};

export default BackSide;

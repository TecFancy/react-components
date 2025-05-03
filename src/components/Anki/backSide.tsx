import React from 'react';
import Base from './base';

import { SideProps } from './types';

const BackSide = ({ night_mode = false }: SideProps) => {
  const mainElement = () => <Base />;

  return (
    <div className="back">
      <div className="container">
        {night_mode ? (
          <div className="night_mode">{mainElement()}</div>
        ) : (
          mainElement()
        )}
      </div>
    </div>
  );
};

export default BackSide;

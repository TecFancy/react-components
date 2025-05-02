import React from 'react';
import Base from './base';

interface Props {
  /**
   * Whether to use night mode
   * @default false
   */
  night_mode?: boolean;
}

const FrontSide = ({ night_mode = false }: Props) => {
  const mainElement = () => <Base />;

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

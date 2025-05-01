import React from 'react';

interface Props {
  /**
   * Whether to use night mode
   * @default false
   */
  night_mode?: boolean;
}

const FrontSide = ({ night_mode = false }: Props) => {
  const mainElement = () => (
    <main className="main">
      <div className="inner">
        <div className="recite">
          <p className="word">turn on</p>
          <p className="phonetic">/tɜːrn ɑːn/</p>
          <div className="paraphrase">
            <span />
            <span />
            <p>n. 释义</p>
          </div>
        </div>

        <div className="cards">
          <div className="example">
            <p className="en">Did he just turn on the TV?</p>
          </div>
        </div>

        <p className="tags">NEC::Lesson7</p>
      </div>
    </main>
  );

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

import React from 'react';

const Base = () => {
  return (
    <main className="main">
      <div className="inner">
        <div className="recite">
          <p className="word">hurry</p>
          <p className="phonetic">/ˈhʌri/</p>
          <div className="paraphrase">
            <span />
            <span />
            <p>v. 匆忙</p>
          </div>
        </div>

        <div className="cards">
          <div className="example">
            <p className="en">
              I hurried to the ticket office. ‘May I have two tickets please?’ I
              asked.
            </p>
            <p className="zh">我匆匆赶到售票处，问："我可以买两张票吗？"</p>
          </div>
        </div>

        <p className="tags">NEC::Lesson19</p>
      </div>
    </main>
  );
};

export default Base;

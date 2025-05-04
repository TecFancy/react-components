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

        <div className="cards">
          <div className="tabs">
            <div className="content">
              <div className="active">
                <p>
                  词词组搭配内容词组搭配内容词组搭配内容词组搭配内容组搭配内容
                </p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
                <p>词组搭配内容</p>
              </div>
              <div className="">特殊变形内容</div>
              <div className="">派生内容</div>
              <div className="">近义内容</div>
              <div className="">反义内容</div>
              <div className="">原文内容</div>
            </div>
            <div className="buttons">
              <button>词组搭配</button>
              <button className="active">特殊变形</button>
              <button>派生</button>
              <button>近义</button>
              <button>反义</button>
              <button>原文</button>
            </div>
          </div>
        </div>

        <p className="tags">NEC::Lesson19</p>
      </div>
    </main>
  );
};

export default Base;

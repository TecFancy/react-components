import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideProps } from './types';

type TabType =
  | 'phraseCollocation'
  | 'specialTransformation'
  | 'derive'
  | 'synonym'
  | 'antonym'
  | 'originalText';

interface Props {
  data?: SideProps['data'];
}

const Base = (props: Props) => {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  const [data, setData] = useState(
    props?.data ?? {
      word: '',
      phonetic: '',
      meaning: '',
      example: '',
      exampleZh: '',
      phraseCollocation: '',
      specialTransformation: '',
      derive: '',
      synonym: '',
      antonym: '',
      originalText: '',
      tags: '',
    }
  );

  const phraseCollocationClass = classNames('phrase-collocation', {
    active: activeTab === 'phraseCollocation',
  });
  const specialTransformationClass = classNames('special-transformation', {
    active: activeTab === 'specialTransformation',
  });
  const deriveClass = classNames('derive', { active: activeTab === 'derive' });
  const synonymClass = classNames('synonym', {
    active: activeTab === 'synonym',
  });
  const antonymClass = classNames('antonym', {
    active: activeTab === 'antonym',
  });
  const originalTextClass = classNames('original-text', {
    active: activeTab === 'originalText',
  });

  // 检查是否有任何 tab 内容
  const hasTabContent = !!(
    data?.phraseCollocation ??
    data?.specialTransformation ??
    data?.derive ??
    data?.synonym ??
    data?.antonym ??
    data?.originalText
  );

  const handleTabClick = (tabType: TabType) => {
    setActiveTab(tabType);
  };

  useEffect(() => {
    // 添加消息监听
    const handleMessage = (event) => {
      // 处理接收到的消息
      if (event?.data?.wordInfo) {
        setData(event.data.wordInfo ?? null);
      }
    };

    window.addEventListener('message', handleMessage);

    // 清理监听器
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    const tabTypes: TabType[] = [
      'phraseCollocation',
      'specialTransformation',
      'derive',
      'synonym',
      'antonym',
      'originalText',
    ];

    // 找到第一个有数据的标签
    const firstAvailableTab = tabTypes.find((tab) => data[tab]);
    if (firstAvailableTab) {
      setActiveTab(firstAvailableTab);
    }
  }, [data]);

  return (
    <main className="main">
      <div className="inner">
        <div className="recite">
          <p className="word">{data?.word ?? ''}</p>
          <p className="phonetic">{data?.phonetic ?? ''}</p>
          <div className="paraphrase">
            <span />
            <span />
            <p>{data?.meaning ?? ''}</p>
          </div>
        </div>

        {data?.example && (
          <div className="cards">
            <div className="example">
              <p className="en">{data?.example ?? ''}</p>
              {data?.exampleZh && <p className="zh">{data.exampleZh}</p>}
            </div>
          </div>
        )}

        {hasTabContent && (
          <div className="cards">
            <div className="tabs">
              <div className="content">
                {data?.phraseCollocation && (
                  <div className={phraseCollocationClass}>
                    {data.phraseCollocation}
                  </div>
                )}
                {data?.specialTransformation && (
                  <div className={specialTransformationClass}>
                    {data.specialTransformation}
                  </div>
                )}
                {data?.derive && (
                  <div className={deriveClass}>{data.derive}</div>
                )}
                {data?.synonym && (
                  <div className={synonymClass}>{data.synonym}</div>
                )}
                {data?.antonym && (
                  <div className={antonymClass}>{data.antonym}</div>
                )}
                {data?.originalText && (
                  <div className={originalTextClass}>{data.originalText}</div>
                )}
              </div>
              <div className="buttons">
                {data?.phraseCollocation && (
                  <button
                    className={phraseCollocationClass}
                    onClick={() => handleTabClick('phraseCollocation')}
                  >
                    词组搭配
                  </button>
                )}
                {data?.specialTransformation && (
                  <button
                    className={specialTransformationClass}
                    onClick={() => handleTabClick('specialTransformation')}
                  >
                    特殊变形
                  </button>
                )}
                {data?.derive && (
                  <button
                    className={deriveClass}
                    onClick={() => handleTabClick('derive')}
                  >
                    派生
                  </button>
                )}
                {data?.synonym && (
                  <button
                    className={synonymClass}
                    onClick={() => handleTabClick('synonym')}
                  >
                    近义
                  </button>
                )}
                {data?.antonym && (
                  <button
                    className={antonymClass}
                    onClick={() => handleTabClick('antonym')}
                  >
                    反义
                  </button>
                )}
                {data?.originalText && (
                  <button
                    className={originalTextClass}
                    onClick={() => handleTabClick('originalText')}
                  >
                    原文
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {data?.tags && <p className="tags">{data.tags}</p>}
      </div>
    </main>
  );
};

export default Base;

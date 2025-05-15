import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';
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
  const { data } = props;
  const [activeTab, setActiveTab] = useState<TabType | null>(null);

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
    data?.phraseCollocation ||
    data?.specialTransformation ||
    data?.derive ||
    data?.synonym ||
    data?.antonym ||
    data?.originalText
  );

  const parsedText = (str?: string) => {
    return parse(
      (str ?? '').replace(/<br\s*\/?>/g, '<br class="custom-br" />')
    );
  };

  const handleTabClick = (tabType: TabType) => {
    setActiveTab(tabType);
  };

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
    const firstAvailableTab = tabTypes.find(
      (tab) => data?.[tab] as unknown as any
    );
    if (firstAvailableTab) {
      setActiveTab(firstAvailableTab);
    }
  }, [data]);

  return (
    <main className="main">
      <div className="inner">
        <div className="recite">
          <p className="word">{parse(data?.word ?? '')}</p>
          <p className="phonetic">{parse(data?.phonetic ?? '')}</p>
          <div className="paraphrase">
            <span />
            <span />
            <p>{parse(data?.meaning ?? '')}</p>
          </div>
        </div>

        {data?.example && (
          <div className="cards">
            <div className="example">
              <p className="en">{parse(data?.example ?? '')}</p>
              {data?.exampleZh && (
                <p className="zh">{parse(data.exampleZh ?? '')}</p>
              )}
            </div>
          </div>
        )}

        {hasTabContent && (
          <div className="cards">
            <div className="tabs">
              <div className="content">
                {data?.phraseCollocation && (
                  <div className={phraseCollocationClass}>
                    {parsedText(data.phraseCollocation)}
                  </div>
                )}
                {data?.specialTransformation && (
                  <div className={specialTransformationClass}>
                    {parsedText(data.specialTransformation)}
                  </div>
                )}
                {data?.derive && (
                  <div className={deriveClass}>{parsedText(data.derive)}</div>
                )}
                {data?.synonym && (
                  <div className={synonymClass}>{parsedText(data.synonym)}</div>
                )}
                {data?.antonym && (
                  <div className={antonymClass}>{parsedText(data.antonym)}</div>
                )}
                {data?.originalText && (
                  <div className={originalTextClass}>
                    {parsedText(data.originalText)}
                  </div>
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

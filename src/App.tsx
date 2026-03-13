import { Button } from '@alfalab/core-components/button/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { useEffect, useState } from 'react';
import percent27Img from './assets/27_percent.png';
import percent73Img from './assets/73_percent.png';
import hbImg from './assets/hb.png';
import { useStocksData } from './hooks/useStocksData';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

type PredictionOption = 'yes' | 'no';

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<PredictionOption | null>(null);
  const [pressedOption, setPressedOption] = useState<PredictionOption | null>(null);
  const { stocks } = useStocksData();

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  useEffect(() => {
    if (selectedOption) {
      document.body.style.background = '#FFFFFF';
    }
  }, [selectedOption]);

  useEffect(() => {
    if (stocks?.question) {
      window.gtag('event', '7287_question_impression', { var: 'var3', question: stocks.id });
    }
  }, [stocks]);

  const showAnswerStats = pressedOption !== null;

  const getAnswerButtonClassName = (option: PredictionOption) => {
    const classNames = [appSt.answerButton, option === 'yes' ? appSt.answerButtonYes : appSt.answerButtonNo];

    if (!showAnswerStats) {
      return classNames.join(' ');
    }

    classNames.push(appSt.answerButtonStats);

    if (option === pressedOption) {
      classNames.push(appSt.answerButtonSelected);
    } else {
      classNames.push(appSt.answerButtonUnselected);
    }

    return classNames.join(' ');
  };

  const getPercentByOption = (option: PredictionOption) => (option === 'yes' ? '73%' : '27%');
  const getPercentImageByOption = (option: PredictionOption) => (option === 'yes' ? percent73Img : percent27Img);

  const handleAnswerClick = (option: PredictionOption) => {
    if (pressedOption) {
      return;
    }

    window.gtag('event', '7287_answer_click', { var: 'var3', answer: option, question: stocks?.id ?? '' });
    setPressedOption(option);
  };

  if (selectedOption === 'no') {
    return (
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="semibold"
          color="primary"
          style={{
            marginTop: '1rem',
          }}
        >
          Рекомендованные бумаги
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">{stocks?.no.description}</Typography.Text>

        {stocks?.no.data.map(stock => {
          return (
            <PureCell
              onClick={() => {
                window.gtag('event', '7287_choose_security', {
                  var: 'var3',
                  security_ticker: stock.ticker,
                  answer: 'no',
                  question: stocks?.id ?? '',
                });
                window.location.replace(stock.link);
              }}
            >
              <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
                <img src={stock.img} width={48} height={48} alt={stock.ticker} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="top">
                <Typography.Text view="primary-medium" weight="medium">
                  {stock.price.toLocaleString('ru-RU')}&nbsp;₽
                </Typography.Text>
              </PureCell.Addon>
            </PureCell>
          );
        })}

        <Typography.Text view="primary-small" color="secondary">
          Не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
    );
  }
  if (selectedOption === 'yes') {
    return (
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="semibold"
          color="primary"
          style={{
            marginTop: '1rem',
          }}
        >
          Рекомендованные бумаги
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">{stocks?.yes.description}</Typography.Text>

        {stocks?.yes.data.map(stock => {
          return (
            <PureCell
              onClick={() => {
                window.gtag('event', '7287_choose_security', {
                  var: 'var3',
                  security_ticker: stock.ticker,
                  answer: 'yes',
                  question: stocks?.id ?? '',
                });
                window.location.replace(stock.link);
              }}
            >
              <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
                <img src={stock.img} width={48} height={48} alt={stock.ticker} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="top">
                <Typography.Text view="primary-medium" weight="medium">
                  {stock.price.toLocaleString('ru-RU')}&nbsp;₽
                </Typography.Text>
              </PureCell.Addon>
            </PureCell>
          );
        })}

        <Typography.Text view="primary-small" color="secondary">
          Не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <section className={appSt.questionCard}>
          <img src={hbImg} alt="HB" width={206} height={165} className={appSt.questionImg} />
          <Typography.Text
            tag="div"
            view="primary-medium"
            style={{
              color: 'rgba(3, 3, 6, 0.88)',
              fontSize: '22px',
              lineHeight: '26px',
              fontWeight: 700,
            }}
          >
            {stocks?.question}
          </Typography.Text>

          <div className={appSt.answerButtons}>
            <button
              type="button"
              className={getAnswerButtonClassName('yes')}
              onClick={() => handleAnswerClick('yes')}
              disabled={showAnswerStats}
            >
              <span className={`${appSt.answerButtonContent} ${showAnswerStats ? appSt.answerButtonContentStats : ''}`}>
                {showAnswerStats && <span className={appSt.answerButtonPercent}>{getPercentByOption('yes')}</span>}
                <span className={`${appSt.answerButtonLabel} ${showAnswerStats ? appSt.answerButtonLabelStats : ''}`}>
                  Да
                </span>
                {showAnswerStats && <img src={getPercentImageByOption('yes')} alt="" className={appSt.answerButtonImage} />}
              </span>
            </button>

            <button
              type="button"
              className={getAnswerButtonClassName('no')}
              onClick={() => handleAnswerClick('no')}
              disabled={showAnswerStats}
            >
              <span className={`${appSt.answerButtonContent} ${showAnswerStats ? appSt.answerButtonContentStats : ''}`}>
                {showAnswerStats && <span className={appSt.answerButtonPercent}>{getPercentByOption('no')}</span>}
                <span className={`${appSt.answerButtonLabel} ${showAnswerStats ? appSt.answerButtonLabelStats : ''}`}>
                  Нет
                </span>
                {showAnswerStats && <img src={getPercentImageByOption('no')} alt="" className={appSt.answerButtonImage} />}
              </span>
            </button>
          </div>
        </section>
      </div>

      {pressedOption && (
        <div className={appSt.bottomBtn}>
          <Button
            block
            view="primary"
            onClick={() => {
              window.gtag('event', '7287_selection_open', {
                var: 'var3',
                question: stocks?.id ?? '',
                answer: pressedOption ?? '',
              });
              setSelectedOption(pressedOption);
            }}
          >
            Посмотреть подброку
          </Button>
        </div>
      )}
    </>
  );
};

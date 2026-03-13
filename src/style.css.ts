import { createVar, style } from '@vanilla-extract/css';

const questionCard = style({
  width: '100%',
  marginTop: '136px',
  borderRadius: '16px',
  backgroundColor: '#FFFFFFF0',
  boxShadow: '0px 4px 20px 0px #C5BFFC26',
  padding: '20px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  textAlign: 'center',
  alignItems: 'center',
});

const answerButtonFillWidth = createVar();

const answerButtons = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const answerButton = style({
  minHeight: '56px',
  borderRadius: '16px',
  border: '1px solid transparent',
  boxShadow: 'none',
  backgroundColor: 'rgba(208, 209, 223, 0.7)',
  color: 'rgba(3, 3, 6, 0.88)',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 700,
  width: '100%',
  padding: '4px 12px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'box-shadow 150ms ease, border-color 150ms ease, opacity 150ms ease',
  selectors: {
    '&:disabled': {
      cursor: 'default',
    },
  },
});

const answerButtonYes = style({
  vars: {
    [answerButtonFillWidth]: '73%',
  },
});

const answerButtonNo = style({
  vars: {
    [answerButtonFillWidth]: '27%',
  },
});

const answerButtonStats = style({
  backgroundColor: '#EFF0F5',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: answerButtonFillWidth,
      backgroundColor: '#C9CCDC',
    },
  },
});

const answerButtonSelected = style({
  borderColor: '#193CFF',
  boxShadow: '0px 0px 10px 0px #D5DAF6',
  opacity: 1,
});

const answerButtonUnselected = style({
  opacity: 0.7,
});

const answerButtonContent = style({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const answerButtonContentStats = style({
  justifyContent: 'space-between',
});

const answerButtonLabel = style({
  display: 'block',
});

const answerButtonLabelStats = style({
  flex: 1,
  textAlign: 'center',
  // set absolute position to center
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});

const answerButtonPercent = style({
  minWidth: '42px',
  height: '28px',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 8px',
  color: '#212124',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: 500,
});

const answerButtonImage = style({
  height: '28px',
  width: 'auto',
  maxWidth: '84px',
  objectFit: 'contain',
  flexShrink: 0,
});
const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  minHeight: '100vh',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});

const questionImg = style({
  marginTop: '-7rem',
});

export const appSt = {
  answerButtons,
  answerButton,
  answerButtonYes,
  answerButtonNo,
  answerButtonStats,
  answerButtonSelected,
  answerButtonUnselected,
  answerButtonContent,
  answerButtonContentStats,
  answerButtonLabel,
  answerButtonLabelStats,
  answerButtonPercent,
  answerButtonImage,
  questionCard,
  bottomBtn,
  container,
  box,
  questionImg,
};

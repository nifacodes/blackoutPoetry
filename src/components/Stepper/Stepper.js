import React, { useState } from 'react';
import {
  Stepper as MUIStepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormHelperText,
  MobileStepper,
} from '@material-ui/core';
import StepConnector from '@material-ui/core/StepConnector';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Stepper.module.css';
import { PrintableNewspaper } from '..';


// const isMobile = window.innerWidth <= 768;
const isMobile = window.innerWidth <= 425;

const getSteps = () => [
  <span className={styles['main-font']}>{`Get Inspired`}</span>,
  <span className={styles['main-font']}>{`Browse Articles`}</span>,
  <span className={styles['main-font']}>{`Box the words`}</span>,
  <span className={styles['main-font']}>{`Black-out the Rest`}</span>,
  <span className={styles['main-font']}>{`Save Poetry`}</span>,
];

const browseSentence = (
  <span className={styles['main-font']}>
    {`Click the Plus button below to browse through articles until you find one that you like!`}
  </span>
);

const lightBulbSentence = (
  <span className={styles['main-font']}>
    {` Click the Lightbulb button below to see real examples. Once you are
    inspired, click Next to choose your own article.`}
  </span>
);

const saveSentence = (
  <span className={styles['main-font']}>
    {`Congrats you made your very own Newspaper Blackout Poetry! If you want to save
    this, click the Save button below or click Finish! Afterwards, you may also download your poetry by clicking the download button.`}
  </span>
);

const boxWords = (
  <span className={styles['main-font']}>
    {`Find words from the article that you like. Click to 'box the word' which will
    form your poem. Once you're done, click Next to continue`}
  </span>
);

const blackOutWords = (
  <span className={styles['main-font']}>
    {`With your mouse, hover over the rest of the words to black them out! Once you&aposre done, click Next to continue`}
  </span>
);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */',
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */',
    },
  },
  line: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return lightBulbSentence;
    case 1:
      return browseSentence;
    case 2:
      return boxWords;
    case 3:
      return blackOutWords;
    case 4:
      return saveSentence;

    default:
      return 'Unknown stepIndex';
  }
};

const Stepper = ({
  loadExamples,
  loadNewArticle,
  pencilState,
  isDisplayFromSaved,
  // isPoetryFinished,
  markerState,
  saveState,
  saveCurrentArticle,
}) => {
  // useState returns an array with two values
  // (one being the state property (activeStep) and the second being the setter function for that state) (setActive)
  // we can also specify the default value for the state property (activeStep), useState takes in a default value
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        loadNewArticle();
        break;
      case 1:
        pencilState();
        break;
      case 2:
        markerState();
        break;
      case 3:
        saveState();
        break;
      default:
        break;
    }

    setActiveStep(activeStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    loadNewArticle();
  };

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();

    const { active, completed, icon } = props;

    const icons = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    };

    return (
      <div
        className={classNames(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(icon)]}
      </div>
    );
  }

  return isDisplayFromSaved ? (
    <Button className={styles['step-btn']} onClick={handleReset}>
      Reset
    </Button>
  ) : (
      <div className={styles.root}>
        {!isMobile ? (
          <MUIStepper
            className={styles.stepper}
            activeStep={activeStep}
            alternativeLabel
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </MUIStepper>
        ) : null}
        <div className={styles.info}>
          <div>
            <Typography className={styles.insructions}>
              {getStepContent(activeStep)}
            </Typography>
            {activeStep === 0 ? (
              // <Button className={styles.btn} onClick={loadExamples}>
              <Button className={styles.btn} onClick={saveCurrentArticle}>
                <i className={classNames('fas', 'fa-2x', 'fa-lightbulb')} />
              </Button>
            ) : null}
            {activeStep === 1 ? (
              <Button className={styles.btn} onClick={loadNewArticle}>
                <i className={classNames('fas', 'fa-2x', 'fa-plus-circle')} />
              </Button>
            ) : null}
            {activeStep === 4 ? (
              <>
                <Button className={styles.btn} onClick={saveCurrentArticle}>
                  <i className={classNames('fas', 'fa-2x', 'fa-save')} />
                </Button>
                {/* <PrintableNewspaper /> */}
              </>
            ) : null}
            {isMobile ? (
              <MobileStepper
                steps={6}
                className={styles.stepper}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={activeStep === steps.length - 1 ? (
                  <Button size="small" className={styles['step-btn']} onClick={handleReset}>
                    Finish
                  <KeyboardArrowRight />
                  </Button>
                ) : (
                    <Button size="small" className={styles['step-btn']} onClick={handleNext}>
                      Next
                  <KeyboardArrowRight />
                    </Button>
                  )}
                backButton={(
                  <Button size="small" className={styles['step-btn']} onClick={handleReset}>
                    Reset
                  <RotateLeftIcon />
                  </Button>
                )}
              />
            ) : null}
            {isMobile ? null : activeStep === steps.length - 1 ? (
              <Button
                className={styles['step-btn']}
                variant="contained"
                onClick={handleReset}
              >
                Finish
            </Button>
            ) : (
                <Button
                  className={styles['step-btn']}
                  variant="contained"
                  size="medium"
                  onClick={handleNext}
                >
                  Next
            </Button>
              )}
          </div>
        </div>
      </div>
    );
};

Stepper.propTypes = {
  loadExamples: PropTypes.func.isRequired,
  loadNewArticle: PropTypes.func.isRequired,
  pencilState: PropTypes.func.isRequired,
  markerState: PropTypes.func.isRequired,
  saveState: PropTypes.func.isRequired,
  saveCurrentArticle: PropTypes.func.isRequired,
  isDisplayFromSaved: PropTypes.bool.isRequired,
  // isPoetryFinished: PropTypes.bool.isRequired,
};

export default Stepper;
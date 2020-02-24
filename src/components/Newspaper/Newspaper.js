import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import styles from './Newspaper.module.css';
import { Header, Title } from './Sections';
import { Content } from './Sections/Content/Content';

import InspirationImage from './Sections/InspirationImage/InspirationImage';

import Stepper from '../Stepper/Stepper';

const Newspaper = ({
  entireCurrentArticleOF,
  isDisplayFromSaved,
  isPencilState,
  isMarkerState,
  volNum,
  currentTitleWordMap,
  onClickHandler,
  onMouseOverHandler,
  isInspiration,
  currentAuthorWordMap,
  currentContentWordMap,
  loadExamples,
  pencilState,
  markerState,
  saveState,
  loadNewArticle,
  saveCurrentArticle,
  isPoetryFinished,
  handleOpen,
  isSmallStepper,
  isSNBP1,
  isSNBP2,
  isSNBP3
}) => (
    <Grid container alignContent="center" justify="center" className={styles.skew}>
      <Header handleOpen={handleOpen} />
      {isInspiration ? (<InspirationImage />) : (
        <>
          <Title
            entireCurrentArticleOF={entireCurrentArticleOF}
            volNum={volNum}
            isDisplayFromSaved={isDisplayFromSaved}
            isPencilState={isPencilState}
            isMarkerState={isMarkerState}
            isPoetryFinished={isPoetryFinished}
            currentTitleWordMap={currentTitleWordMap}
            onClickHandler={onClickHandler}
            onMouseOverHandler={onMouseOverHandler}
          />
          <Content
            entireCurrentArticleOF={entireCurrentArticleOF}
            isDisplayFromSaved={isDisplayFromSaved}
            isPoetryFinished={isPoetryFinished}
            isPencilState={isPencilState}
            isMarkerState={isMarkerState}
            currentAuthorWordMap={currentAuthorWordMap}
            onClickHandler={onClickHandler}
            onMouseOverHandler={onMouseOverHandler}
            currentContentWordMap={currentContentWordMap}
          />
        </>
      )}
      <Stepper
        loadNewArticle={loadNewArticle}
        loadExamples={loadExamples}
        pencilState={pencilState}
        markerState={markerState}
        saveState={saveState}
        saveCurrentArticle={saveCurrentArticle}
        isDisplayFromSaved={isDisplayFromSaved}
        isSmallStepper={isSmallStepper}
        isSNBP1={isSNBP1}
        isSNBP2={isSNBP2}
        isSNBP3={isSNBP3}
        isPoetryFinished={isPoetryFinished}
      />
    </Grid>
  );


Newspaper.propTypes = {
  volNum: PropTypes.number.isRequired,
  isDisplayFromSaved: PropTypes.bool.isRequired,
  isPencilState: PropTypes.bool.isRequired,
  isMarkerState: PropTypes.bool.isRequired,
  isSmallStepper: PropTypes.bool.isRequired,
  isSNBP1: PropTypes.bool.isRequired,
  isSNBP2: PropTypes.bool.isRequired,
  isSNBP3: PropTypes.bool.isRequired,
  currentTitleWordMap: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.shape({}),
  ]).isRequired,
  currentContentWordMap: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.shape({}),
  ]).isRequired,
  currentAuthorWordMap: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.shape({}),
  ]).isRequired,
  entireCurrentArticleOF: PropTypes.shape([]).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onMouseOverHandler: PropTypes.func.isRequired,
  isInspiration: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  isPoetryFinished: PropTypes.bool.isRequired,
  loadExamples: PropTypes.func.isRequired,
  pencilState: PropTypes.func.isRequired,
  markerState: PropTypes.func.isRequired,
  saveState: PropTypes.func.isRequired,
  loadNewArticle: PropTypes.func.isRequired,
  saveCurrentArticle: PropTypes.func.isRequired,
};

export default Newspaper;
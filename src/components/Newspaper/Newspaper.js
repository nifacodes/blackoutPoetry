import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import styles from './Newspaper.module.css';
// import { Header, Title } from './Sections';
import { Header, Title } from './Sections';
import { Content } from './Sections/Content/Content';

import Stepper from '../Stepper/Stepper';

import { getRandomNumberUpTo } from '../../utils';

import imageOne from '../../img/1.png';
import imageTwo from '../../img/2.png';
import imageThree from '../../img/3.png';
import imageFour from '../../img/4.png';
import imageFive from '../../img/5.png';
import imageSix from '../../img/6.png';
import imageSeven from '../../img/7.png';
import imageEight from '../../img/8.png';
import imageNine from '../../img/9.png';
import imageTen from '../../img/10.png';
import imageEleven from '../../img/11.png';
import imageTwelve from '../../img/12.png';

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
  isSNBP3,
  updateLoadExamples
}) => {
  const inspirationImgs = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight, imageNine, imageTen, imageEleven, imageTwelve];
  let ranNum = [getRandomNumberUpTo(12)];

  const handleRanNum = () => {
    let newRanNum = getRandomNumberUpTo(12);

    while (newRanNum in ranNum) {
      newRanNum = getRandomNumberUpTo(10);
    }
    return newRanNum;
  };

  const getInspirationImages = () => {
    // item xs needs to be updated so that when you resize, it adjusts to all screens 
    return (<Grid item xs={8} className={styles.bg}> <img className={styles.insp} src={inspirationImgs[handleRanNum()]} alt="" /> {updateLoadExamples()}</Grid>)

  };

  return (
    <Grid container alignContent="center" justify="center" className={styles.skew}>
      <Header handleOpen={handleOpen} />

      {isInspiration ? (getInspirationImages()) : (
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
};

Newspaper.propTypes = {
  volNum: PropTypes.number.isRequired,
  isDisplayFromSaved: PropTypes.bool.isRequired,
  isPencilState: PropTypes.bool.isRequired,
  isMarkerState: PropTypes.bool.isRequired,
  isSmallStepper: PropTypes.bool,
  isSNBP1: PropTypes.bool,
  isSNBP2: PropTypes.bool,
  isSNBP3: PropTypes.bool,
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
  handleOpen: PropTypes.func,
  isPoetryFinished: PropTypes.bool.isRequired,
  loadExamples: PropTypes.func.isRequired,
  pencilState: PropTypes.func.isRequired,
  markerState: PropTypes.func.isRequired,
  saveState: PropTypes.func.isRequired,
  loadNewArticle: PropTypes.func.isRequired,
  saveCurrentArticle: PropTypes.func.isRequired,
};

export default Newspaper;

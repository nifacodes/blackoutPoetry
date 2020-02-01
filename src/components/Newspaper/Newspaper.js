import React from 'react';
import PropTypes from 'prop-types';

import styles from './Newspaper.module.css';
import { Header, Title, Content } from './Sections';

import Stepper from '../Stepper/Stepper';

import { getRandomNumberUpTo4 } from '../../utils';

import imageOne from '../../img/1.png';
import imageTwo from '../../img/2.png';
import imageThree from '../../img/3.png';
import imageFour from '../../img/4.png';

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
}) => {
  const inspirationImgs = [imageOne, imageTwo, imageThree, imageFour];
  return (
    <div className={styles['center-inspiration']}>
      <Header handleOpen={handleOpen} />
      {isInspiration ? (<img src={inspirationImgs[getRandomNumberUpTo4()]} alt="" />) : (
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
      />
    </div>
  );
};

Newspaper.propTypes = {
  volNum: PropTypes.number.isRequired,
  isDisplayFromSaved: PropTypes.bool.isRequired,
  isPencilState: PropTypes.bool.isRequired,
  isMarkerState: PropTypes.bool.isRequired,
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
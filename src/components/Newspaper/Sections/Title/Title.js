/* eslint-disable no-nested-ternary */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Title.module.css';

const Title = ({
  entireCurrentArticleOF: { publishedAt },
  isDisplayFromSaved,
  currentTitleWordMap,
  isPencilState,
  isPoetryFinished,
  isMarkerState,
  onMouseOverHandler,
  onClickHandler,
  volNum,
}) => {
  const date = new Date(publishedAt);
  const dateString = `${date.getDate()}/${date.getMonth()
    + 1}/${date.getFullYear()}`;

  let pencilHandler = null;
  let markerHandler = null;
  let isWordUsed = true;

  if (isPencilState) {
    pencilHandler = onClickHandler;
  } else if (isMarkerState) {
    markerHandler = onMouseOverHandler;
  }

  // easier to read if ternary + ifs logic is outside of render
  const title = Object.keys(currentTitleWordMap).map((e, i) => {
    if (isDisplayFromSaved || isPoetryFinished) {
      isWordUsed = currentTitleWordMap[i].isClicked || currentTitleWordMap[i].isMouseOver;
    }

    return isWordUsed ? (
      <span
        key={i}
        onClick={() => (pencilHandler ? pencilHandler(i, 'title') : null)}
        onMouseOver={() => (markerHandler ? markerHandler(i, 'title') : null)}
        onFocus={() => (markerHandler ? markerHandler(i, 'title') : null)}
        className={
          currentTitleWordMap[i].isClicked
            ? styles['pencil-style']
            : currentTitleWordMap[i].isMouseOver
              ? styles['marker-style']
              : null
        }
      >
        {`${currentTitleWordMap[i].word} `}
      </span>
    ) : null;
  });

  return (
    <>
      <Grid container className={styles['date-vol-container']}>
        <Grid item xs={8} className={styles.date}>
          <Typography variant="body2" className={styles['sec-font']}>
            {`Published on: ${dateString}`}
          </Typography>
        </Grid>
        <Grid item xs={4} className={styles.vol}>
          <Typography variant="body2" className={styles['sec-font']}>
            {`Vol. 1 No. ${volNum}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles['title-container']}>
        <Grid item xs={12}>
          <Typography variant="h6" className={styles['article-title']}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

Title.propTypes = {
  entireCurrentArticleOF: PropTypes.shape({
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
  currentTitleWordMap: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.shape({}),
  ]).isRequired,
  isPencilState: PropTypes.bool.isRequired,
  isMarkerState: PropTypes.bool.isRequired,
  isDisplayFromSaved: PropTypes.bool.isRequired,
  isPoetryFinished: PropTypes.bool.isRequired,
  onMouseOverHandler: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  volNum: PropTypes.number.isRequired,
};

export default Title;

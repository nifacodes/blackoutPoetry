/* eslint-disable no-nested-ternary */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Title.css';

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
            ? 'pencil-style'
            : currentTitleWordMap[i].isMouseOver
              ? 'marker-style'
              : null
        }
      >
        <strong className="title-main">{`${currentTitleWordMap[i].word} `}</strong>
      </span>
    ) : null;
  });

  return (
    <>
      <Grid container className="title-container">
        <Grid
          item
          xs={6}
          className="date"
        >{`Published on: ${dateString}`}
        </Grid>
        <Grid
          item
          xs={6}
          className="date-second"
        >{`Vol. 1 No. ${volNum}`}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="title">
          <Typography variant="h4" className="title-text">
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

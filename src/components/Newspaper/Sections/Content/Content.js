/* eslint-disable no-nested-ternary */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Content.css';

const Content = ({
  entireCurrentArticleOF,
  currentContentWordMap,
  onMouseOverHandler,
  onClickHandler,
  isMarkerState,
  isPencilState,
  isPoetryFinished,
  isDisplayFromSaved,
}) => {
  let pencilHandler = null;
  let markerHandler = null;
  let isWordUsed = true;

  if (isPencilState) {
    pencilHandler = onClickHandler;
  } else if (isMarkerState) {
    markerHandler = onMouseOverHandler;
  }

  const content = Object.keys(currentContentWordMap).map((e, i) => {
    if (isDisplayFromSaved || isPoetryFinished) {
      isWordUsed = currentContentWordMap[i].isClicked
        || currentContentWordMap[i].isMouseOver;
    }

    return isWordUsed ? (
      <span
        key={i}
        onClick={() => (pencilHandler ? pencilHandler(i, 'content') : null)}
        onMouseOver={() => (markerHandler ? markerHandler(i, 'content') : null)}
        onFocus={() => (markerHandler ? markerHandler(i, 'content') : null)}
        className={
          currentContentWordMap[i].isClicked
            ? 'pencil-style'
            : currentContentWordMap[i].isMouseOver
              ? 'marker-style'
              : null
        }
      >
        <span className="main-font">{`${currentContentWordMap[i].word} `}</span>
      </span>
    ) : null;
  });

  return (
    <Grid container className="content-container">
      <Grid item xs={12} className="scroll">
        {!isDisplayFromSaved && !isPoetryFinished ? (
          <img
            alt="article"
            src={entireCurrentArticleOF.urlToImage}
            className="image"
          />
        ) : null}
        <Typography variant="subtitle1" className="text">
          {content}
        </Typography>
        <div className="author">
          {!isDisplayFromSaved && !isPoetryFinished ? (
            <Typography variant="h6">
              <span className="main-font">{entireCurrentArticleOF.author}</span>
            </Typography>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default Content;

Content.propTypes = {
  entireCurrentArticleOF: PropTypes.shape({
    publishedAt: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  currentContentWordMap: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.shape({}),
  ]).isRequired,
  onMouseOverHandler: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  isMarkerState: PropTypes.bool.isRequired,
  isPencilState: PropTypes.bool.isRequired,
  isDisplayFromSaved: PropTypes.bool.isRequired,
  isPoetryFinished: PropTypes.bool.isRequired,
};

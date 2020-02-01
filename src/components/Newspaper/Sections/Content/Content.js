/* eslint-disable no-nested-ternary */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import styles from './Content.module.css';

let MyDocument = null;

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
  let isClickedWord = true;

  if (isPencilState) {
    pencilHandler = onClickHandler;
  } else if (isMarkerState) {
    markerHandler = onMouseOverHandler;
  }
  const usedWords = [];


  // what to display
  const content = Object.keys(currentContentWordMap).map((e, i) => {
    if (isDisplayFromSaved || isPoetryFinished) {
      isWordUsed = currentContentWordMap[i].isClicked
        || currentContentWordMap[i].isMouseOver;
      isClickedWord = currentContentWordMap[i].isClicked;
    }

    if (isClickedWord) {
      usedWords.push(currentContentWordMap[i].word);
    }

    return isWordUsed ? (
      <span
        key={i}
        onClick={() => (pencilHandler ? pencilHandler(i, 'content') : null)}
        onMouseOver={() => (markerHandler ? markerHandler(i, 'content') : null)}
        onFocus={() => (markerHandler ? markerHandler(i, 'content') : null)}
        className={
          currentContentWordMap[i].isClicked
            ? styles['pencil-style']
            : currentContentWordMap[i].isMouseOver
              ? styles['marker-style']
              : null
        }
      >
        <span className={styles['main-font']}>{`${currentContentWordMap[i].word} `}</span>
      </span>
    ) : null;
  });
  const wordss = usedWords.map((word) => `${word} `);

  const styless = StyleSheet.create({
    page: { backgroundColor: 'black' },
    section: { color: 'white', textAlign: 'center', margin: 30, border: '3 solid white' },
    border: { border: '3 solid white' },
  });

  MyDocument = (
    <Document>
      <Page size="A4" style={styless.page}>
        <View style={styless.section}>
          <Text stlye={styless.border}>{wordss}</Text>
        </View>
      </Page>
    </Document>
  );
  // where and how to dislpay it
  return (
    <Grid container className={styles['content-container']}>
      <Grid item xs={12} className={styles.scroll}>
        {!isDisplayFromSaved && !isPoetryFinished ? (
          <img
            alt="article"
            src={entireCurrentArticleOF.urlToImage}
            className={styles.image}
          />
        ) : null}
        <Typography variant="subtitle1" className={styles.text}>
          {content}
        </Typography>
        <div className={styles.author}>
          {!isDisplayFromSaved && !isPoetryFinished ? (
            <Typography variant="h6">
              <span className={styles['main-font']}>{entireCurrentArticleOF.author}</span>
            </Typography>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export { MyDocument, Content };

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

import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SavedNewspaper.module.css';

const SavedNewspaper = ({ savedArticles, onSaveHandler, deleteSavedHandler, isSmallStepper, isSNBP1, isSNBP2, isSNBP3 }) => {
  const updateGridSize = (size) => (
    Object.keys(savedArticles).map((articleObj, i) => (
      <Grid
        key={i}
        item
        xs={size}
        className={styles['folded-bg']}
        onClick={() => onSaveHandler(savedArticles[articleObj].entireCurrentArticleOF.id)}
      >
        <Typography variant="subtitle1" className={classNames(styles['saved-title'], styles['main-font'])}>
          {savedArticles[articleObj].entireCurrentArticleOF.title}
        </Typography>
        <Typography variant="body" className={styles['main-font']}>
          Author: {savedArticles[articleObj].entireCurrentArticleOF.author}
        </Typography>
        <Grid container alignContent="center" justify="center" className={styles.btns}>
          <Button
            className={styles['delete-btn']}
            type="button"
            size="small"
            onClick={() => deleteSavedHandler(
              savedArticles[articleObj].entireCurrentArticleOF.id,
            )}
          >Delete
          </Button>
          {/* <Button
            className={styles['download-btn']}
            type="button"
            size="small"
            onClick={() => deleteSavedHandler(
              savedArticles[articleObj].entireCurrentArticleOF.id,
            )}
          >Download
          </Button> */}
        </Grid>
      </Grid>
    ))
  );
  // const updateGridSize = () => (
  //   if()

  // )

  return (
    <Grid container alignContent="center" justify="center">
      <Grid item className={styles['saved-header']}>Saved Poetry</Grid>

      {isSmallStepper ? updateGridSize(12) : isSNBP1 ? updateGridSize(10) : isSNBP2 ? updateGridSize(8) : isSNBP3 ? updateGridSize(6) : updateGridSize(11)}
    </Grid>
  );

  // return (<Grid container alignContent='center' justify='center' >
  //   <Grid item className={styles['saved-header']}>Saved Poetry</Grid>

  //   {isSmallStepper ? updateGridSize(12) : bp2 ? updateGridSize(10) : bp3 ? updateGridSize(8) : bp4 ? updateGridSize(6) : updateGridSize(11)}
  // </Grid >)
};

SavedNewspaper.propTypes = {
  savedArticles: PropTypes.shape([]).isRequired,
  onSaveHandler: PropTypes.func.isRequired,
  isSmallStepper: PropTypes.bool.isRequired,
  deleteSavedHandler: PropTypes.func.isRequired,
};

export default SavedNewspaper;

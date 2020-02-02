import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SavedNewspaper.module.css';

const SavedNewspaper = ({ savedArticles, onSaveHandler, deleteSavedHandler }) => (
  <Grid container className={styles['saved-newspapers-container']}>
    {Object.keys(savedArticles).map((articleObj, i) => (
      <Grid key={i} item className={styles['folded-bg']}>
        <div
          onClick={() => onSaveHandler(savedArticles[articleObj].entireCurrentArticleOF.id)}
        >
          <div className={styles['saved-title']}>

            <Typography variant="subtitle1">
              <span className={styles['main-font']}>
                {savedArticles[articleObj].entireCurrentArticleOF.title}
              </span>
            </Typography>
          </div>
          <Typography variant="body1">
            <span className={styles['main-font']}>
              Author: {savedArticles[articleObj].entireCurrentArticleOF.author}
            </span>
          </Typography>
          <div className={styles.btns}>
            <Button
              className={styles['delete-btn']}
              type="button"
              size="small"
              onClick={() => deleteSavedHandler(
                savedArticles[articleObj].entireCurrentArticleOF.id,
              )}
            >Delete
          </Button>
            <span>
              <Button
                className={styles['download-btn']}
                type="button"
                size="small"
                onClick={() => deleteSavedHandler(
                  savedArticles[articleObj].entireCurrentArticleOF.id,
                )}
              >Download
          </Button>
            </span>
          </div>
        </div>
      </Grid>
    ))}
  </Grid>
);

SavedNewspaper.propTypes = {
  savedArticles: PropTypes.shape([]).isRequired,
  onSaveHandler: PropTypes.func.isRequired,
  deleteSavedHandler: PropTypes.func.isRequired,
};

export default SavedNewspaper;

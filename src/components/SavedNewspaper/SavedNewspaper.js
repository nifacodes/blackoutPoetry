import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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
          <Typography variant="subtitle1">
            <div className={styles['saved-title']}>
              {savedArticles[articleObj].entireCurrentArticleOF.title}
            </div>
          </Typography>
          <Typography variant="body1">
            <span className={classNames(styles['main-font'], styles['saved-author'])}>
              Author: {savedArticles[articleObj].entireCurrentArticleOF.author}
            </span>
          </Typography>
          <button
            className={styles['delete-btn']}
            type="button"
            onClick={() => deleteSavedHandler(
              savedArticles[articleObj].entireCurrentArticleOF.id,
            )}
          >Delete
          </button>
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

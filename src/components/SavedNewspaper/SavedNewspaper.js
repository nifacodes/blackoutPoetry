import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './SavedNewspaper.css';

const SavedNewspaper = ({ savedArticles, onSaveHandler, deleteSavedHandler }) => (
  <Grid container className="saved-newspapers-container">
    {Object.keys(savedArticles).map((articleObj, i) => (
      <Grid key={i} item className="folded-bg">
        <div className="saved-container" onClick={() => onSaveHandler(savedArticles[articleObj].entireCurrentArticleOF.id)}>
          <Typography variant="subtitle1">{savedArticles[articleObj].entireCurrentArticleOF.title}</Typography>
          <Typography variant="body1">{savedArticles[articleObj].entireCurrentArticleOF.description}</Typography>
        </div>
        <div>
          <button className="btn delete-btn" type="button" onClick={() => deleteSavedHandler(savedArticles[articleObj].entireCurrentArticleOF.id)}>Delete</button>
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

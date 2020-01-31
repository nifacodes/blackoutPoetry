import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ handleOpen }) => (
  <Grid container>
    <Grid item xs={12} md={8} className="header-title">
      <Typography variant="h3">
        <span className="title-main">BLACKOUT</span>
      </Typography>
      <Typography variant="h3">
        <span className="title-main">POETRY</span>
      </Typography>
    </Grid>
    <Grid item xs={12} md={8} lg={4} className="side-info">
      <Typography variant="subtitle1">
        <strong className="title-main">Inspiration - </strong>
        <span><p className="main-font">Austin Kleon </p></span>
      </Typography>
      <Typography variant="subtitle1">
        <strong className="title-main">Powered By - </strong>
        <span><p className="main-font">NewsAPI and LexperAPI</p></span>
      </Typography>
      <Button
        className="learnmore-button"
        variant="contained"
        size="small"
        onClick={handleOpen}
      >
        LEARN MORE
      </Button>
    </Grid>
  </Grid>
);
Header.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Header;

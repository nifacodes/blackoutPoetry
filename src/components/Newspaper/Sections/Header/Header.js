import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './Header.css';

const Header = () => (
  <Grid container>
    <Grid item xs={12} md={8} className="header-title">
      <Typography variant="h3"><span>B</span>lackout</Typography>
      <Typography variant="h3"><span className="second-span">P</span>oetry</Typography>
    </Grid>
    <Grid item xs={12} md={8} lg={4} className="side-info">
      <Typography variant="subtitle1"><strong>Inspiration - </strong> Austin Kleon</Typography>
      <Typography variant="subtitle1"><strong>Powered By - </strong> NewsAPI and LexperAPI</Typography>
    </Grid>
  </Grid>
);

export default Header;

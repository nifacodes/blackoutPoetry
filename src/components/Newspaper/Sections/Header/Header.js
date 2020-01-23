import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./Header.css";

const Header = () => (
  <Grid container>
    <Grid item xs={12} md={8} className='header-title'>
      <Typography variant='h3'>
        <span>B</span>
        <span className='title-main'>LACKOUT</span>
      </Typography>
      <Typography variant='h3'>
        <span className='second-span'>P</span>
        <span className='title-main'>OETRY</span>
      </Typography>
    </Grid>
    <Grid item xs={12} md={8} lg={4} className='side-info'>
      <Typography variant='subtitle1'>
        <strong className='title-main'>Inspiration - </strong>
        <p className='main-font'>Austin Kleon </p>
      </Typography>
      <Typography variant='subtitle1'>
        <strong className='title-main'>Powered By - </strong>
        <p className='main-font'>NewsAPI and LexperAPI</p>
      </Typography>
    </Grid>
  </Grid>
);

export default Header;

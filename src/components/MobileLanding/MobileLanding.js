import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './MobileLanding.module.css';

const MobileLanding = ({ handleOpen }) => (
    <Grid container className={styles['landing-container']}>
        <Grid item xs={12} className={styles.intro}>
            <Typography variant="h3" className={styles['main-font']}>
                BLACKOUT
      </Typography>
            <Typography variant="h3" className={styles['main-font']}>
                POETRY
      </Typography>
            <Typography className={styles['sec-font']}>
                Welcome! Traditional poetry is written completely from scratch. Austin Kleon, a modern poet and blogger writes his poetry by choosing words that stand out to him from newspapers. Blackout Poetry is a digitized tool for his method. It allows you to make poetry the way Austin Kleon does with Newspapers. To learn more visit <span><a href="https://austinkleon.com/category/newspaper-blackout-poems/">his blog.</a></span> To watch a video of the method, click the button below.
            </Typography>
            <Button
                className={styles['learnmore-button']}
                variant="contained"
                size="medium"
                fullWidth
                onClick={handleOpen}>
                WATCH VIEDO
        </Button>
            <Typography variant="subtitle2" display="inline" className={styles['sec-font']}>
                Inspiration: Austin Kleon | Powered By: NewsAPI and Lexper API
            </Typography>
        </Grid>
    </Grid>
);
MobileLanding.propTypes = {
    handleOpen: PropTypes.func.isRequired,
};

export default MobileLanding;

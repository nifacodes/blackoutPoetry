import React from 'react';
import { Grid } from '@material-ui/core';

import styles from './InspirationImage.module.css';

import imageOne from '../../../../img/1.png';
import imageTwo from '../../../../img/2.png';
import imageThree from '../../../../img/3.png';
import imageFour from '../../../../img/4.png';
import imageFive from '../../../../img/5.png';
import imageSix from '../../../../img/6.png';
import imageSeven from '../../../../img/7.png';
import imageEight from '../../../../img/9.png';
import imageNine from '../../../../img/10.png';
import imageTen from '../../../../img/11.png';
import imageEleven from '../../../../img/12.png';

import { getRandomNumberUpTo } from '../../../../utils';
// const getInspirationImages = () => {
//   // item xs needs to be updated so that when you resize, it adjusts to all screens
//   return (
//     <Grid item xs={8} className={styles.bg}>
//       <img className={styles.insp} src={inspirationImgs[handleRanNum()]} alt="" />
//       {updateLoadExamples()}
//     </Grid>
//   );
// };

const InspirationImage = () => {
    const inspirationImgs = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight, imageNine, imageTen, imageEleven];
    const ranNum = [getRandomNumberUpTo(12)];

    const handleRanNum = () => {
        let newRanNum = getRandomNumberUpTo(12);
        while (newRanNum in ranNum) {
            newRanNum = getRandomNumberUpTo(10);
        }
        return newRanNum;
    };
    return (
        <Grid item xs={8} className={styles.bg}>
            <img className={styles.insp} src={inspirationImgs[handleRanNum()]} alt="Inspiration" />
        </Grid>
    );
};

export default InspirationImage;

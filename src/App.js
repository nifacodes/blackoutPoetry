import React from 'react';
import { Grid, Button } from '@material-ui/core';
import _ from 'lodash';
import Loader from 'react-loader';
import Uniqid from 'uniqid';
import DehazeIcon from '@material-ui/icons/Dehaze';
import classNames from 'classnames';
import axios from 'axios';
import { createWordMap, getRandomNumberUpTo } from './utils';
import { Modal, Newspaper, SavedNewspaper, MobileNav, MobileLanding } from './components';
import { getLexperContent, getArticles } from './api';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalArticles: [],
      savedArticles: {},
      // Entire Current Article in Original Format (OF)
      entireCurrentArticleOF: [],
      currentTitleWordMap: [],
      currentAuthorWordMap: [],
      currentContentWordMap: [],
      isInspiration: false,
      isPencilState: false,
      isMarkerState: false,
      isLoading: true,
      isDisplayFromSaved: false,
      isPoetryFinished: false,
      isOpen: false,
      isNavOpen: false,
      volNum: 1,
      screenOrientation: 'portrait',
      isSmallStepper: ((window.innerWidth <= 425)),
      step: 'instructions',
      screenOrientation: 'portrait',
      width: window.innerWidth,
      height: window.innerHeight,
      isExtraSmall: ((window.innerWidth <= 600)),
      isSmall: window.innerWidth > 600 && window.innerWidth <= 960,
      isSNBP1: window.innerWidth > 425 && window.innerWidth <= 500,
      isSNBP2: window.innerWidth > 500 && window.innerWidth <= 760,
      isSNBP3: window.innerWidth > 760 && window.innerWidth <= 960,
    };
  }

  updateDimensions = () => {
    if (window.innerWidth < 600) {
      if (window.innerWidth <= 425) {
        this.setState({ isSmallStepper: true });
      } else {
        this.setState({ isSmallStepper: false });
      }

      if (window.innerWidth > 425 && window.innerWidth <= 500) {
        this.setState({ isSNBP1: true, isSNBP2: false, isSNBP3: false });
      }

      if (window.innerWidth > 500) {
        this.setState({ isSNBP1: false, isSNBP2: true, isSNBP3: false });
      }

      this.setState({ isExtraSmall: true, isSmall: false });
    } else if ((window.innerWidth >= 600 && window.innerWidth <= 959)) {
      if (window.innerWidth <= 760) {
        this.setState({ isSNBP1: false, isSNBP2: true, isSNBP3: false, step: 'instructions' });
      } else {
        this.setState({ step: 'newspaper' });
      }
      this.setState({ isExtraSmall: false, isSmall: true, isSNBP1: false, isSNBP2: false, isSNBP3: true });
    } else if ((window.innerWidth >= 960)) {
      this.setState({ isExtraSmall: false, isSmall: false, isSNBP1: false, isSNBP2: false, isSNBP3: false });
    }

    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  async componentDidMount() {
    // window.addEventListener('orientationchange', this.setScreenOrientation);
    this.updateDimensions();

    this.state.isExtraSmall ? this.setState({ step: 'instructions' }) : this.setState({ step: 'newspaper' });
    window.addEventListener('resize', this.updateDimensions);

    const articles = await getArticles();

    if (!articles.length) {
      const staticData = await axios.get('staticdata.json');
      this.setState({ ...staticData.data });
      return 'test';
    }

    let pendingContents;

    if (await getLexperContent(articles[0].url)) {
      pendingContents = articles.map(async (article) => getLexperContent(article.url));
    } else {
      const staticData = await axios.get('staticdata.json');
      this.setState({ ...staticData.data });
      return 'test';
    }

    const fullContents = await Promise.all(pendingContents);

    articles.forEach((article, i) => {
      article.fullContentText = fullContents[i];
      article.id = Uniqid();
    });

    this.setState({
      totalArticles: articles,
      entireCurrentArticleOF: {
        ...articles[0],
        fullContentText: articles[0].fullContentText,
        id: articles[0].id,
      },
      currentTitleWordMap: createWordMap(articles[0].title),
      currentAuthorWordMap: createWordMap(articles[0].author),
      currentContentWordMap: createWordMap(articles[0].fullContentText),
      isLoading: false,
    });
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  pencilState = () => this.setState({
    isPencilState: true,
    isMarkerState: false,
    isDisplayFromSaved: false,
    isInspiration: false,
    isPoetryFinished: false,
  });

  markerState = () => this.setState({
    isPencilState: false,
    isMarkerState: true,
    isDisplayFromSaved: false,
    isInspiration: false,
    isPoetryFinished: false,
  });

  saveState = () => this.setState({
    isPencilState: false,
    isMarkerState: false,
    isDisplayFromSaved: false,
    isInspiration: false,
    isPoetryFinished: true,
  });

  loadExamples = () => {
    this.setState({
      isInspiration: true,
      isDisplayFromSaved: false,
      isPoetryFinished: false,
    });
  };

  loadNewArticle = async () => {
    const { totalArticles, savedArticles, entireCurrentArticleOF } = this.state;

    let randomNum = getRandomNumberUpTo(10);
    if (!(_.isEmpty(savedArticles))) {
      // console.log(savedArticles, "savedArticles")
      while (totalArticles[randomNum].id in savedArticles) {
        // console.log(totalArticles[randomNum].id, " is in ", savedArticles, "so lets find another number")
        randomNum = getRandomNumberUpTo(10);
      }
    }

    this.setState({
      volNum: randomNum,
      isInspiration: false,
      isMarkerState: false,
      isPencilState: false,
      isDisplayFromSaved: false,
      isPoetryFinished: false,
      entireCurrentArticleOF: {
        ...totalArticles[randomNum],
        fullContentText: totalArticles[randomNum].fullContentText,
        id: totalArticles[randomNum].id,
      },
      currentTitleWordMap: createWordMap(totalArticles[randomNum].title),
      currentAuthorWordMap: createWordMap(totalArticles[randomNum].author),
      currentContentWordMap: createWordMap(
        totalArticles[randomNum].fullContentText,
      ),
    });
  };

  saveCurrentArticle = () => {
    const {
      savedArticles,
      currentTitleWordMap,
      currentContentWordMap,
      currentAuthorWordMap,
      entireCurrentArticleOF,
    } = this.state;

    if (!savedArticles[entireCurrentArticleOF.id]) {
      this.setState({
        savedArticles: {
          ...savedArticles,
          [entireCurrentArticleOF.id]: {
            currentTitleWordMap,
            currentContentWordMap,
            currentAuthorWordMap,
            entireCurrentArticleOF,
          },
        },
        isInspiration: false,
        isMarkerState: false,
        isPencilState: false,
      });
    } else {
      this.setState({
        savedArticles: {
          ...savedArticles,
          [entireCurrentArticleOF.id]: {
            currentTitleWordMap,
            currentContentWordMap,
            currentAuthorWordMap,
            entireCurrentArticleOF,
            isInspiration: false,
            isMarkerState: false,
            isPencilState: false,
          },
        },
      });
    }
  };

  onClickHandler = (i, category) => {
    const {
      currentTitleWordMap,
      currentAuthorWordMap,
      currentContentWordMap,
    } = this.state;

    switch (category) {
      case 'title':
        this.setState((prevState) => ({
          currentTitleWordMap: {
            ...currentTitleWordMap,
            [i]: {
              ...currentTitleWordMap[i],
              isClicked: !prevState.currentTitleWordMap[i].isClicked,
            },
          },
        }));
        break;
      case 'author':
        this.setState((prevState) => ({
          currentAuthorWordMap: {
            ...currentAuthorWordMap,
            [i]: {
              ...currentAuthorWordMap[i],
              isClicked: !prevState.currentAuthorWordMap[i].isClicked,
            },
          },
        }));
        break;
      case 'content':
        this.setState((prevState) => ({
          currentContentWordMap: {
            ...currentContentWordMap,
            [i]: {
              ...currentContentWordMap[i],
              isClicked: !prevState.currentContentWordMap[i].isClicked,
            },
          },
        }));
        break;
      default:
        break;
    }
  };

  onMouseOverHandler = (i, category) => {
    const {
      currentTitleWordMap,
      currentAuthorWordMap,
      currentContentWordMap,
    } = this.state;

    switch (category) {
      case 'title':
        this.setState({
          currentTitleWordMap: {
            ...currentTitleWordMap,
            [i]: { ...currentTitleWordMap[i], isMouseOver: true },
          },
        });
        break;
      case 'author':
        this.setState({
          currentAuthorWordMap: {
            ...currentAuthorWordMap,
            [i]: { ...currentAuthorWordMap[i], isMouseOver: true },
          },
        });
        break;
      case 'content':
        this.setState({
          currentContentWordMap: {
            ...currentContentWordMap,
            [i]: { ...currentContentWordMap[i], isMouseOver: true },
          },
        });
        break;
      default:
        break;
    }
  };

  downloadCurrentArticle = () => {
    // MAKE A POST REQUEST TO THE BACKEND => SEND THE NECESSARY DATA
    // ON BACKEND, CREATE A PDF BASED ON A TEMPLATE USING THAT DATA
    // MAKE A GET REQUEST TO GET THAT BLOB BACK FROM THE BACKEND
    // CONVERT A BLOB TO A PDF
    // USE FILE-SAVER TO DOWNLOAD THAT PDF
    // const pdf = null;

    // axios.post('/route', { data })
    //   .then(() => {
    //     axios.get('/route')
    //       .then((response) => {
    //         pdf = response.data;
    //       });
    //   });
  }

  onSaveHandler = (i) => {
    const { savedArticles } = this.state;

    const {
      currentAuthorWordMap: clickedAuthorWordMap,
      currentTitleWordMap: clickedTitleWordMap,
      currentContentWordMap: clickedContentWordMap,
    } = savedArticles[i];

    this.setState({
      step: 'newspaper',
      isDisplayFromSaved: true,
      isPoetryFinished: false,
      isInspiration: false,
      currentAuthorWordMap: clickedAuthorWordMap,
      currentTitleWordMap: clickedTitleWordMap,
      currentContentWordMap: clickedContentWordMap,
    });
  };

  deleteSavedHandler = (i) => {
    const { savedArticles } = this.state;
    const updatedSavedArticles = _.omit(savedArticles, i);

    this.setState({
      isPoetryFinished: false,
      isDisplayFromSaved: false,
      savedArticles: { ...updatedSavedArticles },
    });
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => this.setState({ isOpen: false });

  toggleNav = () => this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));

  // simple functional component
  displayLoader = () => (
    <Grid container alignContent="center" justify="center" className={styles['main-container']}>
      <Loader
        loaded={false}
        scale={2.0}
        top="50%"
        left="50%"
        position="relative"
        loadedClassName={styles.loader}
      />
    </Grid>
  );

  displayDrawerComponent = () => {
    const {
      entireCurrentArticleOF,
      savedArticles,
      isInspiration,
      currentTitleWordMap,
      currentAuthorWordMap,
      currentContentWordMap,
      volNum,
      isPoetryFinished,
      isDisplayFromSaved,
      inspirationImg,
      isPencilState,
      isMarkerState,
      isLoading,
      isNavOpen,
      isOpen,
      step,
      isSmallStepper,
      isSNBP1,
      isSNBP2,
      isSNBP3,
    } = this.state;
    switch (step) {
      case 'instructions':
        return (
          <>
            <MobileLanding handleOpen={this.handleOpen} />
            <Modal handleClose={this.handleClose} isOpen={isOpen} />
          </>
        );
      case 'newspaper':
        return (
          <Grid item sm={12} className={styles['newspaper-container']}>
            <Newspaper
              volNum={volNum}
              entireCurrentArticleOF={entireCurrentArticleOF}
              isPencilState={isPencilState}
              isMarkerState={isMarkerState}
              isInspiration={isInspiration}
              isDisplayFromSaved={isDisplayFromSaved}
              inspirationImg={inspirationImg}
              currentTitleWordMap={currentTitleWordMap}
              currentAuthorWordMap={currentAuthorWordMap}
              isPoetryFinished={isPoetryFinished}
              currentContentWordMap={currentContentWordMap}
              onClickHandler={this.onClickHandler}
              onMouseOverHandler={this.onMouseOverHandler}
              loadNewArticle={this.loadNewArticle}
              loadExamples={this.loadExamples}
              pencilState={this.pencilState}
              markerState={this.markerState}
              saveState={this.saveState}
              saveCurrentArticle={this.saveCurrentArticle}
              handleOpen={this.handleOpen}
              isSmallStepper={isSmallStepper}

            />
          </Grid>
        );
      case 'saved':
        return (
          <Grid
            item
            xs={12}
            className={styles['saved-newspapers-container']}
          >
            <SavedNewspaper
              onSaveHandler={this.onSaveHandler}
              savedArticles={savedArticles}
              volNum={volNum}
              deleteSavedHandler={this.deleteSavedHandler}
              isPoetryFinished={isPoetryFinished}
              isSmallStepper={isSmallStepper}
              isSNBP1={isSNBP1}
              isSNBP2={isSNBP2}
              isSNBP3={isSNBP3}

            />
          </Grid>
        );
      default:
        return null;
    }
  };

  handleDrawerItem = (i) => {
    if (this.state.isSmall) {
      switch (i) {
        // mobile view instruction
        case 0:
          this.setState({ step: 'newspaper' });
          // this.updateDimensions();

          return;
          break;
        // saved Newspaper
        case 1:
          // this.updateDimensions();

          this.setState({ step: 'saved' });

          break;
        default:
          break;
      }
    } else if (this.state.isExtraSmall) {
      switch (i) {
        // mobile view instruction
        case 0:
          this.setState({ step: 'instructions' });
          // this.updateDimensions();

          return;
          break;
        // newspaper view
        case 1:
          this.setState({ step: 'newspaper' });

          return;
          break;
        // saved Newspaper
        case 2:

          this.setState({ step: 'saved' });

          break;
        default:
          break;
      }
    }
  };

  render() {
    const {
      entireCurrentArticleOF,
      savedArticles,
      isInspiration,
      currentTitleWordMap,
      currentAuthorWordMap,
      currentContentWordMap,
      volNum,
      isPoetryFinished,
      isDisplayFromSaved,
      inspirationImg,
      isPencilState,
      isMarkerState,
      isLoading,
      isNavOpen,
      isOpen,
      step,
      isExtraSmall,
      isMedium,
      isSmall,
    } = this.state;

    if ((_.isEmpty(entireCurrentArticleOF))) {
      return this.displayLoader();
    }

    if (isExtraSmall) {
      return (
        <>
          <Button
            type="button"
            className={styles['nav-container']}
            onClick={this.toggleNav}
          >
            <DehazeIcon />
          </Button>
          <MobileNav
            toggleNav={this.toggleNav}
            isNavOpen={isNavOpen}
            handleDrawerItem={this.handleDrawerItem}
          />
          {this.displayDrawerComponent()}
        </>
      );
    }

    if (isSmall) {
      return (
        <>
          <Button
            type="button"
            className={styles['nav-container']}
            onClick={this.toggleNav}
          >
            <DehazeIcon />
          </Button>
          <MobileNav
            toggleNav={this.toggleNav}
            isNavOpen={isNavOpen}
            handleDrawerItem={this.handleDrawerItem}
            isSmall={isSmall}
          />
          <Modal handleClose={this.handleClose} isOpen={isOpen} />

          {this.displayDrawerComponent()}
        </>
      );
    }

    // default
    return (
      <><Grid container alignContent="center" justify="center">
        <Modal handleClose={this.handleClose} isOpen={isOpen} />
        <Grid item className={styles['bg-showing']} md={2} lg={3} />
        <Grid
          item
          xs={12}
          md={7}
          lg={6}
          className={classNames(styles['newspaper-container'], isLoading ? styles.loader : '')}
        >
          <Newspaper
            volNum={volNum}
            entireCurrentArticleOF={entireCurrentArticleOF}
            isPencilState={isPencilState}
            isMarkerState={isMarkerState}
            isInspiration={isInspiration}
            isDisplayFromSaved={isDisplayFromSaved}
            isPoetryFinished={isPoetryFinished}
            inspirationImg={inspirationImg}
            currentTitleWordMap={currentTitleWordMap}
            currentAuthorWordMap={currentAuthorWordMap}
            currentContentWordMap={currentContentWordMap}
            onClickHandler={this.onClickHandler}
            onMouseOverHandler={this.onMouseOverHandler}
            loadNewArticle={this.loadNewArticle}
            loadExamples={this.loadExamples}
            pencilState={this.pencilState}
            markerState={this.markerState}
            saveState={this.saveState}
            saveCurrentArticle={this.saveCurrentArticle}
            handleOpen={this.handleOpen}
          />
        </Grid>
        <Grid item xs={12} md={3} className={styles['saved-np']}>
          <SavedNewspaper
            onSaveHandler={this.onSaveHandler}
            savedArticles={savedArticles}
            volNum={volNum}
            deleteSavedHandler={this.deleteSavedHandler}
            isPoetryFinished={isPoetryFinished}
          />
        </Grid>
      </Grid>
      </>
    );
  }
}

export default App;

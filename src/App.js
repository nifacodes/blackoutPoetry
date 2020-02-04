import React from 'react';
import { Grid, Button } from '@material-ui/core';
import _ from 'lodash';
import Loader from 'react-loader';
import Uniqid from 'uniqid';
import DehazeIcon from '@material-ui/icons/Dehaze';
import classNames from 'classnames';
import { createWordMap, getRandomNumberUpTo } from './utils';
import { Modal, Newspaper, SavedNewspaper, MobileNav, MobileLanding } from './components';
import { Header } from "./components";
import { getLexperContent, getArticles } from './api';
import styles from './App.module.css';

const isMobile = window.innerWidth <= 768;

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
      // isOpen: isMobile ? true : false,
      isOpen: false,
      isNavOpen: false,
      volNum: 1,
      step: 0,
    };
  }

  async componentDidMount() {
    const articles = await getArticles();

    const pendingContents = articles.map(async (article) => getLexperContent(article.url));
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
      step: 1,
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
    this.setState({ savedArticles: { ...updatedSavedArticles } });
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => this.setState({ isOpen: false });

  toggleNav = () => this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));

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
    } = this.state;

    const displayComponent = (i) => {
      switch (i) {
        // mobile view instruction
        case 0:
          this.setState({ step: 0 });
          break;
        // newspaper view
        case 1:
          this.setState({ step: 1 });
          break;
        // saved Newspaper
        case 2:
          this.setState({ step: 2 });
          break;
        default:
          break;
      }
    };

    const componentToBeRendered = () => {
      switch (step) {
        case 0:
          return (
            <>
              <MobileLanding handleOpen={this.handleOpen} />
              <Modal handleClose={this.handleClose} isOpen={isOpen} />
            </>
          );
        case 1:
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              lg={7}
              lx={7}
              className={styles['newspaper-container']}
            >
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
              />
            </Grid>
          );
        case 2:
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className={styles['saved-newspapers-container']}
            >
              <SavedNewspaper
                onSaveHandler={this.onSaveHandler}
                savedArticles={savedArticles}
                volNum={volNum}
                deleteSavedHandler={this.deleteSavedHandler}
                isPoetryFinished={isPoetryFinished}
              />
            </Grid>
          );
        default:
          return null;
      }
    };

    if (_.isEmpty(entireCurrentArticleOF)) {
      return (
        <Grid container className={styles['main-container']}>
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
    }

    if (isMobile) {
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
            displayComponent={displayComponent}
          />
          {
            componentToBeRendered() || <Modal handleClose={this.handleClose} isOpen={isOpen} isMobile={isMobile} />
          }
        </>
      );
    }

    return (
      <Grid container className={styles['main-container']}>
        <Modal handleClose={this.handleClose} isOpen={isOpen} />
        <Grid item className={styles['bg-showing-vl']} md={2} lg={2} lx={2}>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          lg={7}
          lx={7}
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
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <SavedNewspaper
            onSaveHandler={this.onSaveHandler}
            savedArticles={savedArticles}
            volNum={volNum}
            deleteSavedHandler={this.deleteSavedHandler}
            isPoetryFinished={isPoetryFinished}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;

import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import {

  Grid

} from '@material-ui/core';

const MobileNav = ({ isNavOpen, toggleNav, handleDrawerItem, isSmall }) => (

  <Drawer open={isNavOpen} onClose={toggleNav}>
    <Grid container alignContent='center' justify='center' onClick={toggleNav}>

      {isSmall ? (<Grid item><List>
        {['Newspaper', 'Saved'].map((text, index) => (
          <ListItem button onClick={() => handleDrawerItem(index)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List></Grid>) : (<Grid item><List>
        {['Instructions', 'Newspaper', 'Saved'].map((text, index) => (
          <ListItem button onClick={() => handleDrawerItem(index)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List></Grid>)}


    </Grid>
  </Drawer>
);

MobileNav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  handleDrawerItem: PropTypes.func.isRequired,
};

export default MobileNav;

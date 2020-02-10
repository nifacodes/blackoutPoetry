import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';


const MobileNav = ({ isNavOpen, toggleNav, handleDrawerItem, isSmall }) => (

  <Drawer open={isNavOpen} onClose={toggleNav}>
    <div role="presentation" onClick={toggleNav}>

      {isSmall ? (<List>
        {['Newspaper', 'Saved'].map((text, index) => (
          <ListItem button onClick={() => handleDrawerItem(index)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>) : (<List>
        {['Instructions', 'Newspaper', 'Saved'].map((text, index) => (
          <ListItem button onClick={() => handleDrawerItem(index)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>)}


    </div>
  </Drawer>
);

MobileNav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  handleDrawerItem: PropTypes.func.isRequired,
};

export default MobileNav;

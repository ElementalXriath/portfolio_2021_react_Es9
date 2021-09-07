import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import { FaReact, FaThLarge } from "react-icons/fa";
import { BsLayoutWtf } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    fontSize:'28px',
    color:'aqua',

  },
});

export default function MyBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Skills');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className='fixed-bottom mb-0' style={{background:"linear-gradient(to top, black, black)", padding:'7px', maxWidth:'100%', opacity:'.90'}}>
      <BottomNavigationAction label="Intro" value="Intro" icon={<BsLayoutWtf className={classes.root} />} />
      <BottomNavigationAction label="RIA" value="RIA" icon={<FaReact className={classes.root} />} />
      <BottomNavigationAction label="Projects" value="Pojects" icon={<FolderIcon className={classes.root} />} />
      <BottomNavigationAction label="Reactix" value="Reactix" icon={<FaThLarge className={classes.root} />} />
    </BottomNavigation>
  );
}

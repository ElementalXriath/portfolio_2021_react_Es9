import React from 'react';
//Material
import { makeStyles } from '@material-ui/core/styles';

//Compoments
import MyBottomNavigation from '../../Components/Navigation/BottomNav/bottomNav.js';
import Intro from '../../Components/Displays/Intro/intro'

const useStyles = makeStyles((theme) => ({
    bg: {
      backgroundColor:'black',
      width:'100%',
      opacity:'.91',
      border:'1px solid lightblue',
      padding:'7px',
      textAlign: 'center',
      minHeight: '100vh',
      position:'fixed'
    }
  }));

const EntryFrame = (props) => {

  const classes = useStyles();

    return (

        <div className={classes.bg}> 
        <Intro/>          
            <MyBottomNavigation/>
        </div>
   
    )
}

export default EntryFrame;
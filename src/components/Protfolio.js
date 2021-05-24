import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import ProtfolioGallery from './ProtfolioGallery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  protfolioArea: {
    padding :"40px 69px",
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  tabMenuList:{
    "& .MuiTabs-flexContainer":{
        justifyContent:"center"
    }
  }
}));

const allPhotos = [
      {
          src: '/images/protfolio-gallery-1.jpg',
          width: 1,
          height: 1
      },
      {
          src: '/images/protfolio-gallery-2.jpg',
          width: 1,
          height: 1
      },
      {
          src: '/images/protfolio-gallery-3.jpg',
          width: 1,
          height: 1
      },
      {
          src: '/images/protfolio-galllery-4.jpg',
          width: 1,
          height: 1
      },
      {
        src: '/images/protfolio-gallery-5.jpg',
        width: 1,
        height: 1
    },
    {
      src: '/images/protfolio-gallery-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/images/protfolio-gallery-7.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/images/protfolio-gallery-8.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/images/protfolio-gallery-9.jpg',
      width: 1,
      height: 1
    }
];

const uiDesignPhoto = [
    {
      src: '/images/protfolio-gallery-7.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/images/protfolio-gallery-8.jpg',
      width: 1,
      height: 1
    },
    {
      src: '/images/protfolio-gallery-9.jpg',
      width: 1,
      height: 1
    }
]

const webDevelopmentPhoto = [
        {
          src: '/images/protfolio-gallery-9.jpg',
          width: 1,
          height: 1
        },
        {
          src: '/images/protfolio-gallery-2.jpg',
          width: 1,
          height: 1
      },
      {
          src: '/images/protfolio-gallery-3.jpg',
          width: 1,
          height: 1
      },
      {
          src: '/images/protfolio-galllery-4.jpg',
          width: 1,
          height: 1
      },
]


const webDesignPhoto = [

      {
          src: '/images/protfolio-gallery-5.jpg',
          width: 1,
          height: 1
      },
      {
        src: '/images/protfolio-gallery-6.jpg',
        width: 1,
        height: 1
      },
      {
        src: '/images/protfolio-gallery-7.jpg',
        width: 1,
        height: 1
      }
]

const Protfolio = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={classes.protfolioArea}>
        <div className={classes.root}>
            <Tabs className={classes.tabMenuList}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            centered
            >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Ui design" {...a11yProps(1)} />
            <Tab label="Web design" {...a11yProps(2)} />
            <Tab label="Web development" {...a11yProps(3)} />
            </Tabs>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    {
                        <ProtfolioGallery photos={allPhotos}></ProtfolioGallery>
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {
                        <ProtfolioGallery photos={uiDesignPhoto}></ProtfolioGallery>
                    }
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {
                        <ProtfolioGallery photos={webDesignPhoto}></ProtfolioGallery>
                    }
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {
                        <ProtfolioGallery photos={webDevelopmentPhoto}></ProtfolioGallery>
                    }
                </TabPanel>
            </SwipeableViews>
        </div>
    </Box>
  );
}

export default Protfolio;
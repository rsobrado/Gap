import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'
import Mattress from './Mattress'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  stars: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  root: {
    flexGrow: 1,
    boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.12)',
    borderRadius: 15,
    color: 'var(--dark-main-color)',
    background: 'linear-gradient(60deg, #ffffff, transparent)',
    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'linear-gradient(60deg, rgba(0,0,0,0.3), transparent)',
      color: 'var(--main-color)',
    },
  },
  colorDefault: {
    borderRadius: '15px 15px 0 0 ',
    background: 'linear-gradient(60deg, var(--dark-main-color), var(--dark-main-color-washed))', 
    color: '#e6b417 !important',
    overflow: 'hidden',
    '&:hover': {
      color: 'var(--dark-main-color)',
    },
    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'linear-gradient(60deg, var(--dark-secondary-color), var(--dark-warning-color))',
    },
  },
  textColorPrimary: {
    backgroundColor: 'var(--third-color)',
    height: 4,
  },
}))

export default function FullWidthTabs(props) {
  const classes = useStyles()
  const theme = useTheme()
  const [valueTab, setValueTab] = React.useState(0)
  const [classic, setClassic] = useState(props.mattresses.classic)
  const [loom, setLoom] = useState(props.mattresses.loom)
  const [zen, setZen] = useState(props.mattresses.zen)

  useEffect(() => {
    setClassic(props.mattresses.classic)
    setLoom(props.mattresses.loom)
    setZen(props.mattresses.zen)
  }, [props])
  
  useEffect(() => {
    props.onClick(valueTab)
  }, [props,valueTab])

  const handleChange = (event, newValue) => {
    setValueTab(newValue)
  }

  const handleChangeIndex = (index) => {
    setValueTab(index)
    
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={4}
        classes={{
          colorDefault: classes.colorDefault,
        }}>
        <Tabs
          value={valueTab}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="Mattress Type Tabs">
          <Tab label=" Classic" {...a11yProps(0)} />
          <Tab label="Loom " {...a11yProps(1)} />
          <Tab label="Zen" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={valueTab}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={valueTab} index={0} dir={theme.direction}>
          <Mattress mattress={classic} />
        </TabPanel>
        <TabPanel value={valueTab} index={1} dir={theme.direction}>
          <Mattress mattress={loom} />
        </TabPanel>
        <TabPanel value={valueTab} index={2} dir={theme.direction}>
          <Mattress mattress={zen} />
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

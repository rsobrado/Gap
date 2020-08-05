import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  colorPrimary: {
    background: 'linear-gradient(60deg, #222, transparent)',
    padding: 10,
    '@media screen and (prefers-color-scheme: light) ': {
      background: 'linear-gradient(60deg, #ffffff, transparent)',
      color: '#282c34',
    }
  },
  colorSecondary: {
    backgroundColor: '#c19579',
  },
}))

export default function PrimaryAppBar(props) {
  const classes = useStyles()
  const [cartItems, setCartItems] = useState(0)

  
  useEffect(() => {
    setCartItems(props.cartItems)
  }, [props])  


  return (
    <AppBar
      position="static"
      className={classes.grow}
      elevation={2}
      classes={{
        colorPrimary: classes.colorPrimary,
      }}>
      <Container fixed maxWidth="xl" disableGutters>
        <Toolbar>
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 38.263">
              <title>logo_saatva_new</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M59.844,37.484H54.926v-4.8a13.15,13.15,0,0,1-10.675,5.576c-8.517,0-15.413-6.956-15.413-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.473,7.137,15.473,16.252ZM44.371,10.5c-5.758,0-10.435,5.1-10.435,11.574s4.677,11.456,10.435,11.456c5.7,0,10.435-5.1,10.435-11.456C54.806,15.653,50.008,10.5,44.371,10.5Z"
                    fill="#c19678"></path>
                  <path
                    d="M96.3,37.484H91.385v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.474,7.137,15.474,16.252ZM80.83,10.5c-5.757,0-10.435,5.1-10.435,11.574S75.073,33.526,80.83,33.526c5.7,0,10.435-5.1,10.435-11.456C91.265,15.653,86.467,10.5,80.83,10.5Z"
                    fill="#c19678"></path>
                  <path
                    d="M115.01,37.484c-7.2.84-12.175-3.419-12.175-11.275V0h5.039V6.6h7.016v4.858h-7.016V26.209c0,5.458,3.3,6.837,7.136,6.6Z"
                    fill="#c19678"></path>
                  <path
                    d="M119.235,6.6h5.4l8.516,24.109h.06L141.726,6.6h5.4L135.908,37.484h-5.457Z"
                    fill="#c19678"></path>
                  <path
                    d="M180,37.484h-4.919v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.534-16.252C173.283,5.818,180,12.955,180,22.07ZM164.527,10.5c-5.758,0-10.436,5.1-10.436,11.574s4.678,11.456,10.436,11.456c5.7,0,10.435-5.1,10.435-11.456C174.962,15.653,170.164,10.5,164.527,10.5Z"
                    fill="#c19678"></path>
                  <path
                    d="M0,33.218a19.382,19.382,0,0,0,13,4.937c6.774,0,11.151-3.651,11.151-9.3v-.09c0-4.814-2.806-7.372-10.009-9.124-6-1.421-7.636-2.516-7.636-5.092v-.09c0-2.283,2.17-3.877,5.276-3.877a14.285,14.285,0,0,1,8.545,3.2l2.829-3.987A17.269,17.269,0,0,0,11.867,5.924c-6.273,0-10.655,3.714-10.655,9.03v.09c0,5.707,3.661,7.673,10.416,9.305,5.54,1.278,7.229,2.436,7.229,4.956v.09c0,2.454-2.3,4.1-5.726,4.1-3.613,0-6.69-1.251-9.958-4.052Z"
                    fill="#c19678"></path>
                </g>
              </g>
            </svg>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
                badgeContent={cartItems}
                color="secondary"
                classes={{ colorSecondary: classes.colorSecondary }}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

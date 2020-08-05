import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FullWidthTabs from './FullWidthTabs'
import PrimaryAppBar from './PrimaryAppBar'
import data from './../data/mattresses.json'


const useStyles = makeStyles((theme) => ({
  mattressesContaner: {
    padding: 20,
    '@media screen and (min-width: 600px)': {
      padding: 50,
    },
  },
  contained: {
    marginTop: 40,
    backgroundColor: 'rgb(230,180,22)',
    borderRadius: 10,
    color: '#282c34',
    textShadow: 'none',
    lineHeight: '1.5 !important',
    fontSize: '1.05rem !important',
    '&:hover': {
      backgroundColor: 'rgb(255,190,0)',
      color: '#282c34 !important',
    },
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const [mattresses, setMattresses] = useState(data.mattresses)
  const [cartItems, setCartItems] = useState(0)
  const [currentMattress, setCurrentMattress] = useState('classic')

  useEffect(() => {
    setMattresses(data.mattresses)
    setCartItems(0)
  }, [])
  const handleAddToCart = (event) => {
    setCartItems(cartItems+1)
  }
  const handleMattressChange = (value) => {
    if(value===0){
      setCurrentMattress('classic')
    }
    if(value===1){
      setCurrentMattress('loom')
    }
    if(value===2){
      setCurrentMattress('zen')
    }
  }


  return (
    <React.Fragment>
      <PrimaryAppBar cartItems={cartItems} />
      <Container fixed maxWidth="xl" className={classes.mattressesContaner}>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={7}>
            <img
              src={'./images/' + currentMattress + '.jpg'}
              alt="mattress"></img>
          </Grid>
          <Grid item xs={12} lg={5} style={{ textAlign: 'left' }}>
            <Typography variant={'h3'}>Choose Your Mattress</Typography>
            {/* <Typography variant={'h6'}>Select Mattress Type</Typography> */}
            <FullWidthTabs
              mattresses={mattresses}
              onClick={handleMattressChange}
            />
            <Grid item xs={12} lg={12} style={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                classes={{ contained: classes.contained }}>
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

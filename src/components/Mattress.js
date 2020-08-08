import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  manttresMattressName: {
    fontSize: '1.4rem',
  },
  manttresMattressPrice: {
    fontSize: '1.25rem',
    opacity: '0.5',
  },
}))

export default function Mattress(props) {
  const classes = useStyles()
  const [name, setname] = useState(props.mattress.name)
  const [price, setPrice] = useState(props.mattress.price)
  const [rating, setRating] = useState(props.mattress.reviewRating)

  useEffect(() => {
    setname(props.mattress.name)
    setPrice(props.mattress.price)
    setRating(props.mattress.reviewRating)
  }, [props])

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} lg={7}>
        <Typography variant={'body1'} className={classes.manttresMattressName}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={4} lg={5} style={{ textAlign: 'right' }}>
        <Typography variant={'body1'} className={classes.manttresMattressPrice}>
          ${price}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12} style={{ textAlign: 'right' }}>
        <Rating
          name="rating"
          defaultValue={rating}
          precision={0.1}
          size="large"
          readOnly
        />
      </Grid>
    </Grid>
  )
}

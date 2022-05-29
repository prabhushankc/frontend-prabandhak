import React from 'react'
import { CardMedia, Typography } from '@material-ui/core'
import useStyle from './FoodHeaderPageStyle'

const FoodHeaderPage = ({ foodLength }) => {
    const classes = useStyle()
    return (
        <>
            <div className={classes.design} >
                <CardMedia className={classes.media} style={{ backgroundImage: 'url(https://visitorlando.widen.net/content/mdw0wxwqjb/jpeg/188815-table2.jpg?position=c&crop=true&color=ffffff&quality=80&w=1920&h=1252)' }} title='prabandak' />
                <Typography className={classes.title} variant="h5" component="h2">Prabandak Hotel</Typography>
                <Typography className={classes.detail} variant="h5" component="h2">Home - Food</Typography>
            </div>
            <div style={{
                padding: '20px 20px',
                color: '#595775',
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px',
            }}>Showing 1-4 of {foodLength} results</div>
        </>
    )
}

export default FoodHeaderPage
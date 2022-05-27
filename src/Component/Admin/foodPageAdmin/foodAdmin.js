import React from 'react'
import FoodPage from './foodPageForm/foodPageForm'
import FoodPagePost from './foodPagePost/foodPagePost';
import { Grow, Grid, Paper } from '@material-ui/core';
import Drawer from '../Drawer/drawer.js';
const FoodAdminPage = () => {
    return (
        <Grow in={true}>
            <Grid container justifyContent="space-between" alignItems="stretch" style={{
                backgroundImage: 'linear-gradient(to right, #fdfbfb, #ebedee)',
                padding: '0px',
                margin: '0px',
            }} spacing={0}>
                <Grid item xs={3} sm={3} md={3}>
                    <Drawer />
                </Grid>
                <Grid item xs={9} sm={9} md={9}>
                    <Paper style={{
                        margin: '0px',
                        padding: '0px',
                    }}>
                        <Grid item xs={12} sm={12} md={12}>
                            <FoodPage />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <FoodPagePost />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default FoodAdminPage;
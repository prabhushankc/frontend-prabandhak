import React from 'react'
import { Grid } from '@material-ui/core'
const pageNotFound = () => {
    return (
        <Grid container style={{
            padding: '0px',
            margin: '0px',
        }}>
            <div style={{
                backgroundImage: 'url(/prabandhak.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }} >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', height: '100vh' }}>
                    <div style={{
                        color: 'white',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        letterSpacing: '3px',
                    }}>Page Not Found</div>
                </div>
            </div>
        </Grid>
    )
}

export default pageNotFound
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { singleUser, aCart } from '../../../redux/actions/Auth';
import useStyles from './addToCartStyle';
import { Typography, CardMedia, Button, Avatar, Grid, Paper } from '@material-ui/core';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Delete from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
function AddToCart() {
    const dispatch = useDispatch();
    const { AsingleUser } = useSelector((state) => state.Auth);
    const [disable, setdisable] = React.useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect(() => {
        return () => {
            dispatch(singleUser(user?.result?._id));
        }
    }, [dispatch]);
    const addToCart = async (cart) => {
        await dispatch(aCart(cart));
        await dispatch(singleUser(user?.result?._id));
    }
    const increment = (id) => {
        AsingleUser.cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })
        addToCart(AsingleUser.cart)
    }
    const decrement = (id) => {
        AsingleUser.cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })
        addToCart(AsingleUser.cart)
    }
    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            AsingleUser.cart.forEach((item, index) => {
                if (item._id === id) {
                    AsingleUser.cart.splice(index, 1)
                }
            })
            addToCart(AsingleUser.cart)
        }
    }

    const classes = useStyles();
    const rows = AsingleUser?.cart?.map((cartData, index) => {
        return {
            id: index + 1,
            Image: cartData?.selectedFile,
            Price: cartData?.price,
            Add: cartData?._id,
            Quantity: cartData?.quantity,
            Remove: cartData?._id,
            Total: cartData?.price * cartData.quantity,
            Delete: cartData?._id
        }
    });
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            minWidth: 120,
            editable: true,
            sortable: true,
            filter: true,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    margin: "auto",
                }} >
                    {params.value}
                </Typography>
        },
        {
            field: 'Image',
            headerName: 'Image',
            width: 120,
            editable: true,
            renderCell: (params) =>
                <Avatar
                    style={{
                        margin: 'auto',
                    }}
                >
                    <CardMedia
                        style={{ backgroundImage: `url(${params.value})`, width: '100%', height: '100%', margin: 'auto' }}
                    /></Avatar>
        },
        {
            field: 'Price',
            headerName: 'Price',
            width: 150,
            editable: true,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{ margin: 'auto' }}>
                    Rs.{params.value}
                </Typography>
        },
        {
            field: 'Add',
            headerName: 'Add',
            width: 110,
            editable: true,
            renderCell: (params) =>
                <Button
                    onClick={() => {
                        setdisable(true);
                        setTimeout(() => {
                            setdisable(false);
                        }, 3000);
                        increment(params.value)
                    }}
                    style={{ backgroundColor: '#595775', textAlign: 'center', color: 'white', padding: '2px' }
                    }
                    disabled={disable}
                >
                    <Add />
                </Button >
        },
        {
            field: 'Quantity',
            headerName: 'Quantity',
            width: 150,
            editable: true,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    margin: "auto",
                }}>
                    {params.value}
                </Typography>
        },
        {
            field: 'Remove',
            headerName: 'Remove',
            width: 110,
            editable: true,
            renderCell: (params) =>
                <Button
                    onClick={() => {
                        setdisable(true);
                        setTimeout(() => {
                            setdisable(false);
                        }, 3000);
                        decrement(params.value)
                    }}
                    style={{ backgroundColor: '#a4978E', textAlign: 'center', color: '#fff', padding: '2px', margin: 'auto', }}
                >
                    <Remove />
                </Button>
        },
        {
            field: 'Total',
            headerName: 'Total',
            width: 120,
            editable: true,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    margin: "auto",
                }}>
                    {params.value}
                </Typography>
        },
        {
            field: 'Delete',
            headerName: 'Delete',
            width: 80,
            editable: true,
            renderCell: (params) =>
                <Button
                    onClick={() => {
                        setdisable(true);
                        setTimeout(() => {
                            setdisable(false);
                        }, 3000);
                        removeProduct(params.value)
                    }}
                ><Delete style={{
                    color: '#fff',
                }} /></Button>

        }

    ];
    return (
        AsingleUser?.cart?.length > 0 ?
            <>
                <Grid container justifyContent="space-between" alignItems="stretch" style={{
                    padding: '0px',
                    margin: '0px',
                    width: '100%',
                    height: '100%',
                }} spacing={0}>
                    <Grid item xs={9} sm={9} md={9}>
                        <Paper style={{
                            padding: '10px',
                            margin: '0px',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '0px',
                        }} >
                            <Paper style={{ height: '100vh', width: '100%', margin: '0px', textAlign: 'center' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                    }}
                                    disableSelectionOnClick
                                />
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
                            <Typography variant="h6" style={{
                                padding: '100px',
                                margin: '0px',
                            }}
                            >
                                Total: Rs.{AsingleUser?.cart?.reduce((acc, curr) => {
                                    return acc + curr?.price * curr?.quantity
                                }, 0)}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </>
            :
            <div className={classes.emptyCart}>
                <Typography variant="h5" component="h2">
                    Your cart is empty

                </Typography>
                <Typography variant="h5" component="h2">
                    Please add some food to cart
                </Typography>
            </div>

    );
}

export default AddToCart;

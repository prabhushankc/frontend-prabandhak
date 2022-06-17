import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Typography, Button, Grid } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { fetchPayment } from '../../redux/actions/paymentaction';
import moment from 'moment';
import PayDetails from './payDetails';
function PaymentDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            dispatch(fetchPayment());
        }
    }, [dispatch]);
    const { PaymentData } = useSelector((state) => state.payment);
    const rows = PaymentData?.map((payment, index) => {
        return {
            id: index + 1,
            UserName: payment.name,
            Address: payment.address,
            PaymentId: payment.paymentID,
            OrderDate: payment.createdAt,
            Status: payment.status,
            Details: payment.cart,
        }
    });
    const columns = [
        {
            field: 'UserName',
            headerName: 'User Name',
            minWidth: 200,
            align: 'center',
            sortable: true,
            filter: true,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    margin: "auto",
                    letterSpacing: "1px",
                }} >
                    {params.value}
                </Typography>
        },
        {
            field: 'Address',
            headerName: 'Address',
            align: 'center',
            minWidth: 150,
            maxWidth: 200,
            sortable: true,
            filter: true,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p">
                    {params.value}
                </Typography>
        },
        {
            field: 'PaymentId',
            headerName: 'Payment Id',
            align: 'center',
            width: 200,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    margin: "auto",
                    letterSpacing: "1px",
                }}>
                    {params.value}
                </Typography>
        },
        {
            field: 'OrderDate',
            headerName: 'Order Date',
            align: 'center',
            width: 200,
            renderCell: (params) =>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    padding: "0px 12px",
                }}>
                    {moment(params.value).format("MMMM DD , YYYY")}
                </Typography>
        },
        {
            field: 'Details',
            headerName: 'Details',
            align: 'center',
            width: 120,
            renderCell: (params) =>
                <Button
                    style={{ backgroundColor: '#595775', textAlign: 'center', color: 'white', padding: '2px 8px', margin: 'auto' }}
                >
                    <PayDetails details={params.value} />
                </Button >
        },
        {
            field: 'Status',
            align: 'center',
            headerName: 'Status',
            width: 130,
            // valueGetter: (params) =>
            //     `${params.row.firstName || ''} ${params.row.lastName || ''}`
            renderCell: (params) =>
                <Button style={{
                    backgroundColor: '#595775', textAlign: 'center', color: 'white', padding: '8px 16px', letterSpacing: '1px', margin: 'auto', fontWeight: 'bold',
                }}>
                    {params.value === false ? 'pending' : 'Done'}
                </Button >
        },


    ];
    return (
        <>
            <Grid container justifyContent="space-between" alignItems="stretch" style={{
                padding: '0px',
                margin: 'auto',
                width: '80%',
                height: '100%',
            }} spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{
                    padding: '0px',
                    margin: '0px',
                    width: '100%',
                    height: '100%',
                }}>
                    <div style={{
                        textAlign: 'center',
                        padding: '25px 0px 15px 0px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                    }}>Payment History</div>

                    <div style={{
                        padding: '5px 5px',
                        height: '90vh'
                    }} >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            // autoHeight={true}
                            rowHeight={90}
                            headerHeight={60}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 20, 50]}
                            checkboxSelection
                            sx={{
                                "& .MuiDataGrid-columnHeaderTitle": {
                                    color: "black",
                                    fontSize: 16,
                                    letterSpacing: '1px',
                                    fontWeight: 'bold',
                                    padding: "0px 20px",
                                },
                                "& .MuiDataGrid-virtualScrollerRenderZone": {
                                    "& .MuiDataGrid-row": {
                                        "&:nth-of-type(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" }
                                    }
                                }
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                padding: '0px 10px',
                                margin: 'auto',
                                borderRadius: '6px',
                                backgroundColor: 'white',
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default PaymentDetail;
import React from "react";
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './style'

export const Cart = () => {
    const classes = useStyles();
    const isEmpty = true;

    const EmptyCart = () => {
        return(
        <Typography variant="subtitle1">Chưa có sản phẩm trong giỏ hàng của bạn</Typography>
        )
    };

    const FilledCart = () => {
        return(
        <>
        <Grid container spacing={3}>
        <Typography variant="subtitle1">Đã có sản phẩm</Typography>
        </Grid>
        </>
        )
    }
    return (
        <Container> 
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}


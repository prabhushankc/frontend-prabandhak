import React from 'react'
import ClientCart from '../../Client/UserDetail/addToCart/addToCart'
import AdminCartDetail from './payment'
const SeeCartDetail = () => {

    const user = JSON.parse(localStorage.getItem('profile'))
    if (!user?.result?.role) {
        return (
            <ClientCart />
        )
    }

    return (
        <AdminCartDetail />
    )
}

export default SeeCartDetail
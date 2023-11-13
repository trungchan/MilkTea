import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { actionFetchDeleteOrderDetailsAPIbyID } from '../../../Redux/Action/OrderDetailsAction';
import { pink,green } from '@mui/material/colors';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import {actionCloseForm,actionShowForm} from './../../../Redux/Action/UpdateOrderDetailsFormAction';
import ModalUpdate from './ModalUpdate';

function ResultFormItem() {
    let dispatch = useDispatch();
    let stateRedux = useSelector((state) => state);
    let [editItem,setEditItem]=useState("");
    let listOrderDetails = stateRedux.orderDetails.listOrderDetails;
    let onHandDelete=(id)=>{
        dispatch(actionFetchDeleteOrderDetailsAPIbyID(id));
    }
    let onhandleEdit=(orderDetailsItem)=>{
        dispatch(actionShowForm(orderDetailsItem));
        setEditItem(orderDetailsItem);
    }
   
    
    console.log(listOrderDetails);
    // Hiển thị
    let items = "";
    if (listOrderDetails) {
        items = listOrderDetails.map((orderdetails) => {
            return (
                <tr key={orderdetails.id}>
                    <td>{orderdetails.id}</td>
                    {/* <td>{orderdetails.ordersId}</td> */}
                    <td>{orderdetails.productsName}</td>
                    <td>{orderdetails.quantity}</td>
                    <td>{orderdetails.size}</td>
                    <td>{orderdetails.unitPrice}</td>
                    <td>
                       <ModeRoundedIcon  onClick={()=>onhandleEdit(orderdetails)} sx={{ color: green[200] ,cursor: 'pointer'}}/>
                    </td>
                    <td>
                    <DeleteForeverIcon onClick={() => onHandDelete(orderdetails.id)} sx={{ color: pink[500] ,cursor: 'pointer'}}   />
                    </td>
                </tr>
            );
        });
    }
    
    return (
        <>
            {items}
           <ModalUpdate editItem={editItem} />
        </>
    );
}

export default ResultFormItem;

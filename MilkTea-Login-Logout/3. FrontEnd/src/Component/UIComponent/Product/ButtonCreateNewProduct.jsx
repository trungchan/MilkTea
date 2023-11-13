import { Button } from 'antd';
import React from 'react';

import { useDispatch } from 'react-redux';
import ModalCreatenew from './ModalCreatenew';
import { actionShowFormCreate } from '../../../Redux/Action/CreateNewProductForm';

function ButtonCreateNewProduct(props) {
    let {listCategoryAPI,setShowSuccessAlert,onHandleCreate}=props
    let dispatch = useDispatch();
    let onOpenFormCreate = () => {
        dispatch(actionShowFormCreate());
       
      }
    return (
        <div>
            <Button type="primary" className="createButton" onClick={()=>onOpenFormCreate()}>Create New Product</Button> 
            <ModalCreatenew listCategoryAPI={listCategoryAPI} setShowSuccessAlert={setShowSuccessAlert} onHandleCreate={onHandleCreate}/>
        </div>
    );
}

export default ButtonCreateNewProduct;
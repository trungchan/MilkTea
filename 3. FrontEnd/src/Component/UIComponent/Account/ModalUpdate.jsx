import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal  } from 'antd';
import { actionCloseForm } from '../../../Redux/Action/UpdateOrderDetailsFormAction';
import { actionUpdateOrderDetailAPI } from '../../../Redux/Action/OrderDetailsAction';
import InputUpdateAccount from './InputUpdateAccount';


function ModalUpdate(props) {
  let {editItem}=props;
  let showform = useSelector((state) => state.updateorderdetailsForm.showForm) || false;
  const [open, setOpen] = useState(false);
    const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
 let dispatch=useDispatch();
 let onHandleCloseForm=()=>{
  dispatch(actionCloseForm());
 }
let onhandleUpdate=(newUpdateOder)=>{
dispatch(actionUpdateOrderDetailAPI(newUpdateOder));
onHandleCloseForm();
}
  
 
  return (
    <Modal
        title="Update Order"
        open={showform}
        onOk={()=>onhandleUpdate()}
        onCancel={() => onHandleCloseForm()}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
      >
       <InputUpdateAccount editItem={editItem} onhandleUpdate={onhandleUpdate} />
      </Modal>

  );
}

export default ModalUpdate;

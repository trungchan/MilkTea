import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {  Form, FormGroup, Input, Label } from 'reactstrap';
import { Form, Input, Select } from 'antd';
import { actionFetchProductAPI } from '../../../Redux/Action/ProductAction';
// import { Button } from '@mui/material';
// import Button from '@mui/material/Button';

function InputUpdateReview(props) {
    const { onhandleUpdate, editItem, listOrderDetailsAPI } = props;
    let listproduct = useSelector((state) => state.product.listProduct);
    console.log(listproduct);
    // let productList = listproduct.map((product, index) => (
    //     <option key={index} value={product.id}>
    //         {product.name}
    //     </option>
    // ));
    // console.log(productList);


    let currentPage = useSelector((state) => state.product.currentPage);
    let pageSize = useSelector((state) => state.product.pageSize);

    let [page, setPage] = useState(currentPage);
    let [productsName, setProductname] = useState("");
    let [quantity, setQuantity] = useState("");
    let [size, setSize] = useState("");
    let orderDetail = listOrderDetailsAPI.find((item) => item.id === editItem.id);
    let orderDetailID = orderDetail ? orderDetail.id : null;
    

    let orderID = listOrderDetailsAPI.filter = ((item) => item.ordersId === editItem.ordersId);
    let name1 = listOrderDetailsAPI.filter = ((item) => item.name === editItem.name);
    let unitPrice = listOrderDetailsAPI.filter = ((item) => item.unitPrice === editItem.unitPrice);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionFetchProductAPI(page, pageSize));
    }, [dispatch, page, pageSize]);

    useEffect(() => {
        if (editItem) {
            let productname = listproduct.find(item => item.name === editItem.name);
            // setProductname(editItem.name);
            setSize(editItem.size);
            setQuantity(editItem.quantity);
            let product = listproduct.find(item => item.id === editItem.id)
            setProductname(product);
            // setProductname(product.id);

        }
    }, [editItem]);



    // useEffect(() => {
    //     if (editItem) {
    //         setQuantity(editItem.quantity);
    //         setSize(editItem.size);
    //         // const foundProduct = listproduct.find(item => item.productsName === editItem.productsName);
    //         // setProductname(foundProduct.id);


    //     }
    // }, [editItem]);
    let quantityDouble=Number(quantity);
    console.log(quantityDouble);
    let newOrderDetails = {
        quantity:quantityDouble,
    }
    let handleUpdate = () => {
        onhandleUpdate(orderDetailID, newOrderDetails);


    }
    return (
        <>
            {/* <Form>
                <FormGroup>
                    <Label for="nameProduct">Chọn sản phẩm</Label>
                    <Input id="nameProduct" name="nameProduct" type="select" value={productsName} onChange={(event) => { setProductname(event.target.value); }}>
                    {listproduct.map((product) => (
                        <option key={product.id} value={product.id}>
                            {product.name}
                        </option>
                    ))}
                </Input>

                </FormGroup>

                <FormGroup>
                <Label for="quantity">Chọn Số Lượng</Label>
                <Input id="quantity" name="quantity" type="text" value={quantity} onChange={(event) => { setQuantity(event.target.value); }} />
            </FormGroup>
            <FormGroup>
                <Label for="size">Chọn Kích Thước</Label>
                <Input id="size" name="size" type="text" value={size} onChange={(event) => { setSize(event.target.value); }} />
            </FormGroup>
                <Button variant="contained" update>
                    Update
                </Button>
                <Button variant="contained" close>
                   Close
                </Button>
            </Form> */}
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="Tên Sản Phẩm">
                    <Select value={productsName} onChange={(value) => setProductname(value)}>
                        {listproduct.map((product, index) => (
                            <Select.Option key={index} value={product.id}>
                                {product.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Số lượng">
                    <Input value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                </Form.Item>

                <Form.Item label="Kích Thước">
                <Input value={size} onChange={(event) => setQuantity(event.target.value)} />
                    {/* <Select value={size} onChange={(value) => setSize(value)}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select> */}
                </Form.Item>
            </Form >
        </>
    );
}

export default InputUpdateReview;
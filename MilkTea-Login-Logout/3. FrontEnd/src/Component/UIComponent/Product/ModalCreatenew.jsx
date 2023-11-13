import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Form, Input, Modal, Select } from "antd";
import { actionCloseFormCreate } from "../../../Redux/Action/CreateNewProductForm";
import { actionAddProductAPI, actionFetchProductAPI } from "../../../Redux/Action/ProductAction";
import {  message } from 'antd'; 
function ModalCreatenew(props) {
    let { listCategoryAPI ,onShowSuccessMessage,onHandleCreate } = props;
    let showformCreate = useSelector((state) => state.createnewProductForm.showForm);
    let [productsName, setProductname] = useState("");
    let [description, setDescription] = useState("");
    let [priceM, setPriceM] = useState("");
    let [priceL, setPriceL] = useState("");
    let [category, setCategory] = useState("");
    let [imageUrl, setImageUrl] = useState("");
    let [messageApi, contextHolder] = message.useMessage();
    let [pageSize, setPageSize] = useState(5);
    let currentPage = useSelector((state) => state.product.currentPage);
    let [page, setPage] = useState(currentPage);
    let dispatch = useDispatch();

    let handleCancel = () => {
        dispatch(actionCloseFormCreate());
    };
    let fetchProduct=()=>{
        dispatch(actionFetchProductAPI(page, pageSize));
      }
    const handleOk = () => {

        let itemNew = {
            name: productsName,
            description: description,
            priceM: priceM,
            priceL: priceL,
            imageUrl: imageUrl,
            categoryId: category,

        };

        dispatch(actionAddProductAPI(itemNew));
        setProductname("");
        setDescription("");
        setPriceM("");
        setPriceL("");
        setImageUrl("")
        setCategory("");
        fetchProduct();
        onHandleCreate();
        dispatch(actionCloseFormCreate());
     

    };

   



    return (
        <Modal
            title="Create New Product"
            // open={showformCreate}
            open={showformCreate}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
        >

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
                    <Input value={productsName} onChange={(event) => setProductname(event.target.value)} />
                </Form.Item>

                <Form.Item label="Mô Tả">
                    <Input value={description} onChange={(event) => setDescription(event.target.value)} />
                </Form.Item>
                <Form.Item label="Giá Size M">
                    <Input value={priceM} onChange={(event) => setPriceM(event.target.value)} />
                </Form.Item>
                <Form.Item label="Giá Size L">
                    <Input value={priceL} onChange={(event) => setPriceL(event.target.value)} />
                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <Input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
                </Form.Item>
                <Form.Item label="Loại">
                    <Select value={category} onChange={(value) => setCategory(value)}>
                        {listCategoryAPI && listCategoryAPI.length > 0 && listCategoryAPI.map((category, index) => (
                            <Select.Option key={category.id} value={category.id} >
                                {category.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form >
                      
        </Modal>
    );
}

export default ModalCreatenew;

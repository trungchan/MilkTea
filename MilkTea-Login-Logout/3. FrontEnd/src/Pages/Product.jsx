import { Button, Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchProductAPI } from '../Redux/Action/ProductAction';
import { actionFetchCategoryAPI } from '../Redux/Action/CategoryAction';
import { Link, useParams } from "react-router-dom";
import '../style/productcss.css';
import ProductDetail from '../Pages/ProductDetail';
// import { formatMoney } from "react-intl";

// actionFetchProductAPI
function Product(props) {
    let listProductAPI = useSelector(state => state.product.listProduct);
    let dispatch = useDispatch();
    let listProduct = listProductAPI;

    const totalPages = useSelector((state) => state.orderDetails.totalPages);

    const currentPage = useSelector((state) => state.orderDetails.currentPage);

    const pageSizeAPI = useSelector((state) => state.orderDetails.pageSize);

    const [pageSize, setPageSize] = useState(5);

    const [page, setPage] = useState(currentPage);

    const [totalPage, setTotalPage] = useState(1);

    const [selectedCategory, setSelectedCategory] = useState(''); // State lưu trữ danh mục được chọn

    const [filteredProducts, setFilteredProducts] = useState([]); // State lưu trữ danh sách sản phẩm đã lọc

    // list filter product
    // let trasua = listProductAPI.filter(product => product.categories == 'Trà Sữa');
    // let matcha = listProductAPI.filter(product => product.categories == 'Matcha');
    // let socola = listProductAPI.filter(product => product.categories == 'Socola');
    // let milk = listProductAPI.filter(product => product.categories == 'Sữa Tươi');
    // let trahoaqua = listProductAPI.filter(product => product.categories == 'Trà Hoa Quả');
    // let setTraSuaTunay = listProductAPI.filter(product => product.categories == 'Set Trà Sữa Tự Nấu');

    let listCategory = useSelector(state => state.category.listCategory);
    let lists = useSelector(state => state.listProduct);

    useEffect(() => {
        setFilteredProducts(listProductAPI);
    }, [listProductAPI]);

    let filterProductsByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(listProductAPI); // Nếu chọn "Tất cả", hiển thị tất cả sản phẩm
        } else {
            let filtered = listProductAPI.filter(product => product.categories === category);
            setFilteredProducts(filtered);
        }
        setSelectedCategory(category);
    };

    useEffect(() => {
        dispatch(actionFetchProductAPI(page, pageSize));
        dispatch(actionFetchCategoryAPI());
    }, [dispatch, page, pageSize]);

    let handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    return (
        <Row justify="center" className='product'>
            <Col span={24}>
                <div style={{ textAlign: 'center d-flex justify-content-between' }}>
                    <h1>MENU HÔM NAY</h1>
                    <div className='btn_select '>
                        <Space wrap>
                            <Button value={'Trà Sữa'}>Trà Sữa</Button>
                            <Button value={'Matcha'}>Matcha</Button>
                            <Button value={'Socola'}>Socola</Button>
                            <Button value={'Sữa Tươi'}>Sữa Tươi</Button>
                            <Button value={'Trà Hoa Quả'}>Trà Hoa Quả</Button>
                        </Space>
                    </div>
                    <div>
                        <Row justify="center" className='justify-content-between'>
                            {filteredProducts.map(product => (

                                <Col span={2} key={product.id} >

                                    <div className="product_item">
                                        <div className="product_img">
                                            <Link to={`/ProductDetail/${product.id}`} onClick={handleScrollUp}>
                                                <img src={product.imageUrl} alt={product.name} />
                                            </Link>
                                        </div>
                                        <div className="p-2 product_info">
                                            <h4>
                                                {product.name}
                                            </h4>
                                        </div>
                                        <div className="food_cart-bottom d-flex align-items-center justify-content-between p-2">
                                            <span className="price">{product.priceM.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Product;
import React from 'react';
import Slidebar from './Slidebar';
import PageContent from "./PageContent"
import ResultFormOrder from '../Component/UIComponent/OrderListComponent/ResultFormOrder';
import './../style/adminpage.css';
import { Col, Row, Space } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './AppHeader';


function AdminPage() {
    
    return (
        // className="AppAdmin"
        <div >
            <AppHeader />
            {/* <Space> */}
                <div >
                {/* className="SideMenuAndPageContent" */}
                
                    <Row >
                        <Col span={4}>
                            <Slidebar></Slidebar>
                        </Col>
                        <Col span={20}>
                            <PageContent></PageContent>
                        </Col>

                    </Row>

                </div>

            {/* </Space> */}

        </div>
    );
}

export default AdminPage;
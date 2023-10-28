import React from "react";
// import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { Card, List } from "antd";
import ReactPaginate from 'react-paginate';
// import {envApi} from './api'
// axios call api
// import axios from 'axios';
function product() {
  const App = () => <Pagination defaultCurrent={1} total={5} />;

  const data1 = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 7",
    },
    {
      title: "Title 8",
    },
    {
      title: "Title 9",
    },
    {
      title: "Title 10",
    },
    {
      title: "Title 10",
    },
    {
      title: "Title 10",
    },
  ];
  // trang hiện tại
  //   const currentPage = this.state.currentPage;
  //    tin tức mỗi trang
  //  const newPerPage = this.state.newPerPage;
  // vị trí tin tức đầu tiên của trang hiện tại trong list dữ liệu
  // const indexOfLastNew = currentPage * newPerPage;
  //  dữ liệu ban đầu lấy ra 1 mảng dữ liệu cho trang mới
  // const indexOfFirstNew = indexOfLastNew - newPerPage

  // const currentTodos = newList.slice(indexOfFirstNew, indexOfLastNew)

  const handlePageClick = () => {

  }
  return (
    <>
      <List
        grid={{
          gutter: 6,
          column: 4,
        }}
        dataSource={data1}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // so luong trang
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default product;

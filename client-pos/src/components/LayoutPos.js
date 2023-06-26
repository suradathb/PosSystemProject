import React, { useState, useEffect } from "react";
import Header from "./Header";
import Axios from "axios";
import axios from "axios";
import moment from 'moment';

function LayoutPos(props) {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [itemname, setItemname] = useState("");
  const [detail, setDetail] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [dateup, setDateup] = useState("");
  const [count, setCount] = useState(0);
  const [res,setRes] = useState("");

  const getAPIStock = async () => {
    const url =
      "https://api.sheety.co/0704b338c342d7675872488f2adb2571/datastock/dataStock";
    const res = await axios.get(url);
    setCount(res.data.dataStock.length);
    setData(res.data.dataStock);
  };
  const postData = (e) => {
    e.preventDefault();
    
    let data = {
      dataStock: {
        id: count+1,
        itemname: itemname,
        detail: detail,
        minimum: minimum,
        maximum: maximum,
        dateup: dateup,
      },
    };
    console.log(data)
    const url =
      "https://api.sheety.co/0704b338c342d7675872488f2adb2571/datastock/dataStock";
    axios.post(url, data).then((res) => {
      if(res){
        setRes(res);
        alert("Data inserted successful!");
      }else {
        alert("Not Insert data to base");
      }
      
    });
  };
  useEffect(() => {
    getAPIStock();
  }, [res]);
  return (
    <div
      class="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <Header />
      <div class="body-wrapper">
        {/* <!--  Header Start --> */}
        <header class="app-header">
          <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item d-block d-xl-none">
                <a
                  class="nav-link sidebartoggler nav-icon-hover"
                  id="headerCollapse"
                  href="javascript:void(0)"
                >
                  <i class="ti ti-menu-2"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                  <i class="ti ti-bell-ringing"></i>
                  <div class="notification bg-primary rounded-circle"></div>
                </a>
              </li>
            </ul>
            <div
              class="navbar-collapse justify-content-end px-0"
              id="navbarNav"
            >
              <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <a
                  href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Download Free
                </a>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                    id="drop2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/profile/user-1.jpg"
                      alt=""
                      width="35"
                      height="35"
                      class="rounded-circle"
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop2"
                  >
                    <div class="message-body">
                      <a
                        href="javascript:void(0)"
                        class="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i class="ti ti-user fs-6"></i>
                        <p class="mb-0 fs-3">My Profile</p>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i class="ti ti-mail fs-6"></i>
                        <p class="mb-0 fs-3">My Account</p>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i class="ti ti-list-check fs-6"></i>
                        <p class="mb-0 fs-3">My Task</p>
                      </a>
                      <a
                        href="./authentication-login.html"
                        class="btn btn-outline-primary mx-3 mt-2 d-block"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* <!--  Header End --> */}
        <div class="container-fluid">
          {/* <!--  Row 1 --> */}
          <div className="row">
            <div class="col-lg-12 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body p-4">
                  <h5 class="card-title fw-semibold mb-4">
                    รายการ Stock สินค้า
                  </h5>
                  <div class="table-responsive">
                    <table class="table text-nowrap mb-0 align-middle">
                      <thead class="text-dark fs-4">
                        <tr>
                          <th class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">Id</h6>
                          </th>
                          <th class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">สินค้า</h6>
                          </th>
                          <th class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">รายละเอียด</h6>
                          </th>
                          <th class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">Minimum</h6>
                          </th>
                          <th class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">Maximum</h6>
                          </th>
                          <th class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">วันที่อัปเดต</h6>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((stock) => {
                          return (
                            <tr key={stock.id}>
                              <td class="border-bottom-0">
                                <h6 class="fw-semibold mb-0">{stock.id}</h6>
                              </td>
                              <td class="border-bottom-0">
                                <h6 class="fw-semibold mb-1">
                                  {stock.itemname}
                                </h6>
                              </td>
                              <td class="border-bottom-0">
                                <p class="mb-0 fw-normal">{stock.detail}</p>
                              </td>
                              <td class="border-bottom-0">
                                <p class="mb-0 fw-normal">{stock.minimum}</p>
                              </td>
                              <td class="border-bottom-0">
                                <p class="mb-0 fw-normal">{stock.maximum}</p>
                              </td>
                              <td class="border-bottom-0">
                                <p class="mb-0 fw-normal">{stock.dateup}</p>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title fw-semibold mb-4">เพิ่ม Stock สินค้า</h5>
            <div class="card">
              <div class="card-body">
                <form onSubmit={postData}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      ID
                    </label>
                    <input
                      type="number"
                      value={count + 1}
                      onChange={(e) => setCount(e.target.value)}
                      name="id"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      readOnly
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      ชื่อสินค้า
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => setItemname(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      รายละเอียด
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => setDetail(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Minimum
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => setMinimum(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Maximum
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => setMaximum(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      วันที่อัปเดต
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="exampleInputPassword1"
                      // onChange={(e) => setDateup(e.target.value)}
                      onChange={(e) => setDateup(moment(e.target.value,'YYYY-MM-DD').format('DD/MM/YYYY'))}
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="py-6 px-6 text-center">
            <p class="mb-0 fs-4">
              Design and Developed by{" "}
              <a
                href="https://adminmart.com/"
                target="_blank"
                class="pe-1 text-primary text-decoration-underline"
              >
                AdminMart.com
              </a>{" "}
              Distributed by <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutPos;

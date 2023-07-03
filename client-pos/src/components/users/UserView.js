import React from "react";
import axios from "axios";
import Users from "./Users";
import { fetchUsers } from "../../apis/PosApiUsersSeting";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Number: 1,
      showPassword: {}, // New state variable
    };
  }
  async componentDidMount() {
    const res = await fetchUsers();
    this.setState({ data: res.users });
  }

  togglePasswordVisibility = (userId) => {
    this.setState((prevState) => ({
      showPassword: {
        ...prevState.showPassword,
        [userId]: !prevState.showPassword[userId],
      },
    }));
  };
  render() {
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
                      รายการ User ในระบบ
                    </h5>
                    <div class="table-responsive">
                      <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                          <tr>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Id</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Number</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">UserName</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Password</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Actions</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.data?.map((user) => {
                            return (
                              <tr key={user.id}>
                                <td class="border-bottom-0">
                                  <h6 class="fw-semibold mb-0">
                                    {user.id - this.state.Number}
                                  </h6>
                                </td>
                                <td class="border-bottom-0">
                                  <h6 class="fw-semibold mb-0">{user.idNo}</h6>
                                </td>
                                <td class="border-bottom-0">
                                  <h6 class="fw-semibold mb-1">
                                    {user.username}
                                  </h6>
                                </td>
                                <td class="border-bottom-0">
                                  {this.state.showPassword[user.id] ? (
                                    <p typeof="password" class="mb-0 fw-normal">
                                      {user.password}
                                    </p>
                                  ) : (
                                    <button
                                      className="btn btn-link"
                                      onClick={() =>
                                        this.togglePasswordVisibility(user.id)
                                      }
                                    >
                                      {this.state.showPassword[user.id]
                                        ? "Hide Password"
                                        : "Show Password"}
                                    </button>
                                  )}
                                </td>
                                <td>
                                  <Users dataUsers={user} key={user.id}  />
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserView;

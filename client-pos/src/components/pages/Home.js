import React from "react";
import HtmlPos from "../layoutweb/HtmlPos";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getdata: "",
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <HtmlPos>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Order Queue</h4>
                  <form className="form-sample">
                    <p className="card-description">รายการ Order In-process </p>
                    <div className="col-md-12 btn-dash">
                      <button type="submit" class="btn btn-primary mr-2">
                        Submit
                      </button>
                      <button class="btn btn-light">Cancel</button>
                    </div>
                    <div className="col-md-12">
                      <div className="card">
                        <div className="table-responsive pt-3">
                          <table className="table table-striped project-orders-table">
                            <thead>
                              <tr>
                                <th className="ml-5">Order No.</th>
                                <th>Order Name</th>
                                <th>Customer</th>
                                <th>Deadline</th>
                                <th>Payouts </th>
                                <th>Traffic</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#O00001</td>
                                <td>Consectetur adipisicing elit </td>
                                <td>Beulah Cummings</td>
                                <td>03 Jan 2019</td>
                                <td>$ 5235</td>
                                <td>1.3K</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm btn-icon-text mr-3"
                                    >
                                      Edit
                                      <i className="typcn typcn-edit btn-icon-append"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm btn-icon-text"
                                    >
                                      Delete
                                      <i className="typcn typcn-delete-outline btn-icon-append"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>#D2</td>
                                <td>Correlation natural resources silo</td>
                                <td>Mitchel Dunford</td>
                                <td>09 Oct 2019</td>
                                <td>$ 3233</td>
                                <td>5.4K</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm btn-icon-text mr-3"
                                    >
                                      Edit
                                      <i className="typcn typcn-edit btn-icon-append"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm btn-icon-text"
                                    >
                                      Delete
                                      <i className="typcn typcn-delete-outline btn-icon-append"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>#D3</td>
                                <td>social capital compassion social</td>
                                <td>Pei Canaday</td>
                                <td>18 Jun 2019</td>
                                <td>$ 4311</td>
                                <td>2.1K</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm btn-icon-text mr-3"
                                    >
                                      Edit
                                      <i className="typcn typcn-edit btn-icon-append"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm btn-icon-text"
                                    >
                                      Delete
                                      <i className="typcn typcn-delete-outline btn-icon-append"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>#D4</td>
                                <td>empower communities thought</td>
                                <td>Gaynell Sharpton</td>
                                <td>23 Mar 2019</td>
                                <td>$ 7743</td>
                                <td>2.7K</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm btn-icon-text mr-3"
                                    >
                                      Edit
                                      <i className="typcn typcn-edit btn-icon-append"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm btn-icon-text"
                                    >
                                      Delete
                                      <i className="typcn typcn-delete-outline btn-icon-append"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>#D5</td>
                                <td> Targeted effective; mobilize </td>
                                <td>Audrie Midyett</td>
                                <td>22 Aug 2019</td>
                                <td>$ 2455</td>
                                <td>1.2K</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm btn-icon-text mr-3"
                                    >
                                      Edit
                                      <i className="typcn typcn-edit btn-icon-append"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm btn-icon-text"
                                    >
                                      Delete
                                      <i className="typcn typcn-delete-outline btn-icon-append"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </HtmlPos>
      </>
    );
  }
}

export default Home;

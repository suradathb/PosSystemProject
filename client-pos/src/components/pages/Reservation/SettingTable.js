import React from "react";
import HtmlPos from "../../layoutweb/HtmlPos";

class SettingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isEditing: false,
      reservation:[]
    };
  }

  componentDidMount() {}

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, isEditing,reservation } = this.state;
    return (
      <>
        <HtmlPos>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Setting table.</h4>
                  <form className="form-sample" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            หมายเลขโต๊ะ
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={name || ""}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            จำนวนที่นั่ง
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={name || ""}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Zone
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={name || ""}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label"></label>
                          <button
                            type="submit"
                            className="btn btn-success btn-sm btn-icon-text mr-3"
                          >
                            {isEditing ? "Update" : "Save"}
                            <i className="typcn typcn-edit btn-icon-append"></i>
                          </button>
                          {isEditing && (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm btn-icon-text"
                              onClick={this.handleCancelClick}
                            >
                              Cancel
                              <i className="typcn typcn-delete-outline btn-icon-append"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="table-responsive pt-3">
                        <table className="table table-striped project-orders-table">
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th>หมายเลขโต๊ะ</th>
                              <th>จำนวนที่นั่ง</th>
                              <th>Zone</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>A001</td>
                              <td>A001</td>
                              <td>12</td>
                              <td>A</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button
                                    type="button"
                                    className="btn btn-success btn-sm btn-icon-text mr-3"
                                    onClick={() =>
                                      this.handleEditClick(reservation.id)
                                    }
                                  >
                                    Edit
                                    <i className="typcn typcn-edit btn-icon-append"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm btn-icon-text"
                                    onClick={() =>
                                      this.handleDeleteClick(reservation.id)
                                    }
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

export default SettingTable;

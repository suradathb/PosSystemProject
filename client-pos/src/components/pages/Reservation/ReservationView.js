import React from "react";
import axios from "axios";
import HtmlPos from "../../layoutweb/HtmlPos";
import "./ReservationView.css";
import { PosAPIString } from "../../../setings/PosAPIString";

// Helper function to format date as "dd/mm/yyyy"
function formatDate(date) {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

class ReservationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
    };
  }
  componentDidMount() {
    this.fetchReservations();
  }

  fetchReservations = async () => {
    try {
      const response = await axios.get(
        `${PosAPIString.Pos_Api_lbl_reserSetting}/resersetting`
      );
      this.setState({
        reservations: response.data,
        no: response.data.length,
      });
    } catch (error) {
      console.log("Error fetching reservations:", error);
    }
  };

  render() {
    const { reservations } = this.state;
    return (
      <>
        <HtmlPos>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Queue for a table</h4>
                  <div className="template-demo mt-2">
                    <button className="btn btn-outline-dark btn-icon-text">
                      {/* <i className="typcn typcn-vendor-apple btn-icon-prepend"></i> */}
                      <img
                        src="./assets/images/items/dinner-table.png"
                        alt="Smiling child playing"
                        className="item-smaill btn-icon-prepend"
                      />
                      <span className="d-inline-block text-center">
                        A1 ชื่อคนจอง
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      {/* <i class="typcn typcn-vendor-apple btn-icon-prepend"></i> */}
                      <img
                        src="./assets/images/items/dinner-table.png"
                        alt="Smiling child playing"
                        className="item-smaill btn-icon-prepend"
                      />
                      <span className="d-inline-block text-center">
                        A1 ชื่อคนจอง
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      {/* <i className="typcn typcn-vendor-apple btn-icon-prepend"></i> */}
                      <img
                        src="./assets/images/items/dinner-table.png"
                        alt="Smiling child playing"
                        className="item-smaill btn-icon-prepend"
                      />
                      <span className="d-inline-block text-center">
                        A1 ชื่อคนจอง
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      {/* <i class="typcn typcn-vendor-apple btn-icon-prepend"></i> */}
                      <img
                        src="./assets/images/items/dinner-table.png"
                        alt="Smiling child playing"
                        className="item-smaill btn-icon-prepend"
                      />
                      <span className="d-inline-block text-center">
                        A1 ชื่อคนจอง
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      {/* <i className="typcn typcn-vendor-apple btn-icon-prepend"></i> */}
                      <img
                        src="./assets/images/items/dinner-table.png"
                        alt="Smiling child playing"
                        className="item-smaill btn-icon-prepend"
                      />
                      <span className="d-inline-block text-center">
                        A1 ชื่อคนจอง
                      </span>
                    </button>
                  </div>
                  <div className="template-demo mt-2">
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="typcn typcn-vendor-apple btn-icon-prepend"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>
                        A1
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="typcn typcn-vendor-apple btn-icon-prepend"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>
                        A2
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="typcn typcn-vendor-apple btn-icon-prepend"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>
                        A3
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="typcn typcn-vendor-apple btn-icon-prepend"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>
                        A4
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text">
                      <i className="typcn typcn-vendor-apple btn-icon-prepend"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>
                        A5
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HtmlPos>
      </>
    );
  }
}

export default ReservationView;

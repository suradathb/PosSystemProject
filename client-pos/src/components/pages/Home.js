import React from "react";
import HtmlPos from "../layoutweb/HtmlPos";
import { PosAPIString } from "../../setings/PosAPIString";

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
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Bar chart</h4>
                  <canvas id="barChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </HtmlPos>
        <script src="./assets/js/off-canvas.js"></script>
        <script src="./assets/vendors/chart.js/Chart.min.js"></script>
        <script src="./assets/js/chart.js"></script>
      </>
    );
  }
}

export default Home;

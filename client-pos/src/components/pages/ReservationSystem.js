import React from "react";
import axios from "axios";
import HtmlPos from "../layoutweb/HtmlPos";

class ReservationSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no: 0,
      name: "",
      email: "",
      date: "",
      time: "",
      table: "",
      seats: "",
      locations: "",
      reservations: [],
    };
  }

  componentDidMount() {
    this.fetchReservations();
  }
  fetchReservations = async () => {
    try {
      const response = await fetch(
        "https://api.sheety.co/0704b338c342d7675872488f2adb2571/reservation/list"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch reservations");
      }
      const reservations = await response.json();
      // console.log(reservations.list.length);
      this.setState({
        reservations: reservations.list,
        no: reservations.list.length,
      });
    } catch (error) {
      console.log("Error fetching reservations:", error);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let no = this.state.no + 1;
    const { name, email, date, time, table, seats, locations } = this.state;
    const reservation = {
      list: {
        no,
        name,
        email,
        date,
        time,
        table,
        seats,
        locations,
      },
    };
    const url =
      "https://api.sheety.co/0704b338c342d7675872488f2adb2571/reservation/list";
    try {
      const response = await axios.post(url, reservation).then((res) => {
        if (res.status === 200) {
          // Fetch updated reservations from the API and update state
          this.fetchReservations();
          // Clear the form fields
          this.setState({
            no: 0,
            name: "",
            email: "",
            date: "",
            time: "",
            table: "",
            seats: "",
            locations: "",
          });
        } else {
          console.log("Failed to save reservation.");
        }
      });
    } catch (error) {
      console.log("Error saving reservation", error);
    }
  };

  renderReservations = () => {
    const { reservations } = this.state;
    if (reservations === null) {
      return <p>No reservations available.</p>;
    }

    return (
      <>
        {reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.no}</td>
            <td>{reservation.name}</td>
            <td>{reservation.email}</td>
            <td>{reservation.date}</td>
            <td>{reservation.time}</td>
            <td>{reservation.table}</td>
            <td>{reservation.seats}</td>
            <td>{reservation.locations}</td>
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
        ))}
      </>
    );
  };
  render() {
    const { name, email, date, time, table, seats, locations } = this.state;

    return (
      <HtmlPos>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Reservation System</h4>
                <form className="form-sample" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
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
                        <label className="col-sm-3 col-form-label">Date</label>
                        <div className="col-sm-9">
                          <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={date}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Time</label>
                        <div className="col-sm-9">
                          <input
                            type="time"
                            className="form-control"
                            name="time"
                            value={time}
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
                        <label className="col-sm-3 col-form-label">Table</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="table"
                            value={table}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Seats</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="seats"
                            value={seats}
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
                          Locations
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            name="locations"
                            value={locations}
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
                          Save
                          <i className="typcn typcn-edit btn-icon-append"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-icon-text"
                        >
                          Cancel
                          <i className="typcn typcn-delete-outline btn-icon-append"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Date</th>
                          <th>Time </th>
                          <th>Table</th>
                          <th>Seats</th>
                          <th>Locations</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>{this.renderReservations()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HtmlPos>
    );
  }
}

export default ReservationSystem;

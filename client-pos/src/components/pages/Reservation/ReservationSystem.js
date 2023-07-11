import React from "react";
import axios from "axios";
import HtmlPos from "../../layoutweb/HtmlPos";
import { PosSetupString } from "../../../setings/PosSetupString";
import { PosClientString } from "../../../setings/PosClientString";

// Helper function to format date as "dd/mm/yyyy"
function formatDate(date) {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

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
      phone: "",
      reservations: [],
      isEditing: false,
      editingReservationId: null,
    };
  }

  componentDidMount() {
    this.fetchReservations();
  }

  fetchReservations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/reservation"
      );
      // console.log(response.data)
      this.setState({
        reservations: response.data,
        no: response.data.length,
      });
    } catch (error) {
      console.log("Error fetching reservations:", error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      const selectedDate = new Date(value);
      const formattedDate = formatDate(selectedDate);
      this.setState({ date: formattedDate });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleCreateClick = () => {
    this.setState({
      isEditing: true,
      editingReservationId: null,
      name: "",
      email: "",
      date: "",
      time: "",
      table: "",
      seats: "",
      locations: "",
      phone: "",
    });
  };

  handleEditClick = (id) => {
    const { reservations } = this.state;
    const reservationToEdit = reservations.find(
      (reservation) => reservation.id === id
    );
    this.setState({
      isEditing: true,
      editingReservationId: id,
      name: reservationToEdit.name,
      email: reservationToEdit.email,
      date: reservationToEdit.date,
      time: reservationToEdit.time,
      table: reservationToEdit.table,
      seats: reservationToEdit.seats,
      locations: reservationToEdit.locations,
      phone: reservationToEdit.phone,
    });
  };

  handleDeleteClick = async (id) => {
    const { reservations } = this.state;
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/v1/reservation/${id}`);

      const updatedReservations = reservations.filter(
        (reservation) => reservation.id !== id
      );

      this.setState({
        reservations: updatedReservations,
      });
    } catch (error) {
      console.log("Error deleting reservation:", error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      isEditing,
      editingReservationId,
      name,
      email,
      date,
      time,
      table,
      seats,
      locations,
      reservations,
      phone,
    } = this.state;

    const newReservation = {
      name,
      email,
      date,
      time,
      table,
      seats,
      locations,
      phone,
    };

    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:5000/api/v1/reservation/${editingReservationId}`,
          newReservation
        );

        const updatedReservations = reservations.map((reservation) =>
          reservation.id === editingReservationId
            ? { id: editingReservationId, ...newReservation }
            : reservation
        );

        this.setState({
          isEditing: false,
          editingReservationId: null,
          name: "",
          email: "",
          date: "",
          time: "",
          table: "",
          seats: "",
          locations: "",
          phone: "",
          reservations: updatedReservations,
        });
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/v1/reservation",
          newReservation
        );

        const createdReservation = {
          id: response.data.id,
          ...newReservation,
        };

        this.setState((prevState) => ({
          no: prevState.no + 1,
          reservations: [...prevState.reservations, createdReservation],
          name: "",
          email: "",
          date: "",
          time: "",
          table: "",
          seats: "",
          locations: "",
          phone: "",
        }));
      }
    } catch (error) {
      console.log("Error saving reservation:", error);
    }
  };

  renderReservations = () => {
    const { reservations } = this.state;
    if (reservations.length === 0) {
      return <tr><td colSpan="9">No reservations available.</td></tr>;
    }

    return reservations.map((reservation) => (
      <tr key={reservation.id}>
        <td>{reservation.id}</td>
        <td>{reservation.name}</td>
        <td>{reservation.email}</td>
        <td>{reservation.date}</td>
        <td>{reservation.time}</td>
        <td>{reservation.table}</td>
        <td>{reservation.seats}</td>
        <td>{reservation.locations}</td>
        <td>{reservation.phone}</td>
        <td>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text mr-3"
              onClick={() => this.handleEditClick(reservation.id)}
            >
              {PosSetupString.Pos_Setup_lbl_edit}
              <i className="typcn typcn-edit btn-icon-append"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-icon-text"
              onClick={() => this.handleDeleteClick(reservation.id)}
            >
              {PosSetupString.Pos_Setup_lbl_delete}
              <i className="typcn typcn-delete-outline btn-icon-append"></i>
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  render() {
    const {
      name,
      email,
      date,
      time,
      table,
      seats,
      locations,
      phone,
      isEditing,
    } = this.state;

    return (
        <HtmlPos>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{PosClientString.Pos_Client_lbl_Reservation_Head}</h4>
                  <form className="form-sample" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Name
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
                            Email
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={email || ""}
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
                            Date
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="date"
                              className="form-control"
                              name="date"
                              value={date ? formatDate(new Date(date)) : ""}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Time
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="time"
                              className="form-control"
                              name="time"
                              value={time || ""}
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
                            Table
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="table"
                              value={table || ""}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Seats
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="seats"
                              value={seats || ""}
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
                              value={locations || ""}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Phone
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              value={phone || ""}
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
                          <label className="col-sm-3 col-form-label"></label>
                          <button
                            type="submit"
                            className="btn btn-success btn-sm btn-icon-text mr-3"
                          >
                            {isEditing ? PosSetupString.Pos_Setup_lbl_update : PosSetupString.Pos_Setup_lbl_save}
                            <i className="typcn typcn-edit btn-icon-append"></i>
                          </button>
                          {isEditing && (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm btn-icon-text"
                              onClick={this.handleCancelClick}
                            >
                              {PosSetupString.Pos_Setup_lbl_cancel}
                              <i className="typcn typcn-delete-outline btn-icon-append"></i>
                            </button>
                          )}
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
                            <th>Phone</th>
                            <th> </th>
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

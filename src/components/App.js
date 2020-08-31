import React, { Component } from "react";
import { Add_reminder, delete_reminder, clear_reminders } from "../actions";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div className="reminder">
                {moment(new Date(reminder.date)).fromNow()}
              </div>
              <button
                className="button btn-danger delete"
                onClick={() => this.props.delete_reminder(reminder.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <h2 className="title">What Should U Do</h2>
        {/* <img src="reminder.png" /> */}
        <input
          onChange={(e) => this.setState({ text: e.target.value })}
          className="form-control"
          type="text"
          placeholder="Enter What U Think"
          value={this.state.text}
        />
        <DatePicker
          className="form-control"
          placeholderText="Enter Date"
          selected={this.state.date}
          onChange={(e) => this.setState({ date: e })}
          showTimeSelect
          dateFormat="Pp"
        />
        <button
          onClick={() => {
            this.props.Add_reminder(this.state.text, this.state.date);
            this.setState({ text: "", date: "" });
          }}
          className="btutton btn-primarey btn-block"
        >
          Add Reminder
        </button>
        {this.render_reminders()}
        <button
          onClick={() => this.props.clear_reminders()}
          className="btutton btn-danger btn-block"
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}

// function mapDispatchTOProps (dispatch) {
//     return{
//         Add_Reminder: () => dispatch(Add_reminder())
//     }
// }

// function mapStateTOProps (state) {
//     return{
//         reminder: state
//     }
// }

export default connect(
  (state) => {
    return { reminders: state };
  },
  { Add_reminder, delete_reminder, clear_reminders }
)(App);

import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import axios from "axios";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      topTenUsers: [],
      topTenFollowers: [],
    };
  }

  componentDidMount() {
    this.state.topTenUsers = this.state.data
      .map((login) => login.login)
      .slice(0, 10);

    this.state.topTenUsers.forEach((element) => {
      axios.get(`https://api.github.com/users/${element}`).then((res) => {
        this.state.topTenFollowers.push(res.data.followers);
      });
    });
  }

  render() {
    return (
      <div>
        I am a {this.state.data.map((follower) => follower.id)}
        Car!
      </div>
    );
  }
}
export default BarChart;

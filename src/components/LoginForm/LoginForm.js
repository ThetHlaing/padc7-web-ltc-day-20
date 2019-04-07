import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { loginUserEvent,fetchUsers } from '../../actions/userActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.password = React.createRef();
    this.props.fetchUsers();
  }

  state = { redirectToReferrer: false };

  handleOnSubmit = event => {
    event.preventDefault();

    const name = this.name.current.value;
    const password = this.password.current.value;

    const currentUser = this.props.users.find( user => user.name === name && user.password === password )
    console.log("Users",this.props.users);
    
    if(currentUser){
      this.props.loginUserEvent(
        currentUser,
        () => {
          this.setState({ redirectToReferrer: true });
        }
      );
    }
    else{
      alert("Wrong password");
    }
   
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="user_name">User Name : </label>
        <input id="user_name" required ref={this.name} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={this.password} />
        <br />
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  users : state.users  
});

const mapDispatchToProps = {
  loginUserEvent,
  fetchUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
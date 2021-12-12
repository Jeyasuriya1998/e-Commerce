import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message:"" };
  }
  render() {
    return (
      <div className="col-lg-9">
        <h2 className="m-2 p-1 border-bottom">Login</h2>

        <div className="form-group form-row">
          <label className="col-lg-9">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
        </div>
        <div className="form-group form-row">
          <label className="col-lg-9">Password</label>
          <input
            type="text"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
          ></input>
        </div>
        <div className="text-right">
            {this.state.message}
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Submit</button>
        </div>
        
      </div>
    );
  }
  onLoginClick= () =>{
      if (this.state.email === "suriya@gmail.com" && this.state.password==="Suriya@123"){
          this.setState({message:(<span className='text-success'>Successfully Logged-in</span>)})
      }else{
        this.setState({message:(<span className='text-danger'>Invalid Login, pls try agin</span>)})
      }
  }
}

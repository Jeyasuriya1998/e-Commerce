import React, { Component } from "react";

export default class CustomersList extends Component {
  state = { pageTitle: "Customers", CustomerCount: 5,
            customers: [
                {id:1, name:"Suriya", phone:"+91 6374363117",address:{ city:"Madurai"}, photos:'https://picsum.photos/id/1024/60'},
                {id:2, name:"Murugan", phone:"+91 8464736388",address:{ city:"Madurai"}, photos:'https://picsum.photos/id/1028/60'},
                {id:3, name:"Soma", phone:"+91 6353728226",address:{ city:"Madurai"}, photos:'https://picsum.photos/id/1011/60'},
                {id:4, name:"Saravana", phone:"",address:{ city:"Madurai"}, photos:'https://picsum.photos/id/1025/60'},
                {id:5, name:"Iraianbu", phone:null,address:{ city:"Madurai"}, photos:'https://picsum.photos/id/1026/60'},
            ] };
  getCustomerNameStyle = (custName) =>{
    if (custName.startsWith('S')) return "green-highlight border-left"
    else if (custName.startsWith('M')) return "red-highlight border-right"
    else {}
  }
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p1">
          {this.state.pageTitle}
          <span className="badge badge-secondary">{this.state.CustomerCount}</span>
          <button className="btn btn-primary m-1" onClick={this.onClickRefresh}>
            Refresh
          </button>
        </h4>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Photos</th>
                    <th>Cutomers</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
              {this.getCustomerRow()} 
            </tbody>
        </table>
      </div>
    );
  }

  onClickRefresh = () => {
    this.setState({CustomerCount: 7});
  }

  checkPhone = (phone) =>{
    if (phone) return phone
    else{
      return <div className="bg-warning p-1 text-center">No Phone</div>
    }
  }

  getCustomerRow = () => {
    return (this.state.customers.map((cust, index) =>{
      return(<tr key={cust.id}>
          <td>{cust.id}</td>
          <td><img src={cust.photos} alt="Customers" />
            <div><button className="btn btn-sm btn-secondary" onClick={() => this.onChangePicture(cust, index)}>Change Picture</button></div>
          </td>
          <td className={this.getCustomerNameStyle(cust.name)}>{cust.name}</td>
          <td>{this.checkPhone(cust.phone)}</td>
          <td>{cust.address.city}</td>
      </tr>)
  }))
  }
  
  onChangePicture = (cust, index) => {
    var custArr = this.state.customers;
    custArr[index].photos = "https://picsum.photos/id/104/60";

    this.setState({customers: custArr})
  }
}

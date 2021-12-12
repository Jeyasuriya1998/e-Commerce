import React, { Component } from "react";
import Products from "./Products";

export default class ShoppingCard extends Component {
    constructor(props){
        console.log("Shooping Cart - Constructor")
        super(props);
        this.state = {
                products: [
                { id: 1, productName: "Lenova Laptop", price: 80000, quantity: 0 },
                { id: 2, productName: "Dell Laptop", price: 60000, quantity: 0 },
                { id: 3, productName: "HP Laptop", price: 55500, quantity: 0 },
                { id: 4, productName: "i Pad", price: 44000, quantity: 0 },
                { id: 5, productName: "i Phone", price: 33000, quantity: 0 },
                ],
            };
    }
  
  render() {
    console.log("Shooping Cart - Render")
    return (
      <div className="container-fluid">
        <h4>Shopping Card</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Products
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Products>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount(){
    console.log("Shooping Cart - componentDidMount")
    }

  componentDidUpdate(prevProps, prevState){
      console.log("Shooping Cart - componentDidUpdate", prevProps, this.props, prevState, this.state)

      if (prevProps.x != this.props.x){
          // Make http call
      }
  }
  
  componentDidCatch(error, info){
    //   console.log("Shopping Card - componentDidCatch");
    //   console.log(error, info);

      localStorage.lastError = `${error}\n${JSON.stringify(info)}`
  }
  handleIncrement = (product, maxValue) => {
    let Allproduct = [...this.state.products];
    let index = Allproduct.indexOf(product);
    if (Allproduct[index].quantity < maxValue) {
      Allproduct[index].quantity++;
      this.setState({
        products: Allproduct,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    let Allproduct = [...this.state.products];
    let index = Allproduct.indexOf(product);
    if (Allproduct[index].quantity > minValue) {
      Allproduct[index].quantity--;
      this.setState({
        products: Allproduct,
      });
    }
  };

  handleDelete =(products) => {
      let Allproduct = [...this.state.products];
      let index = Allproduct.indexOf(products);
      if (window.confirm("Are you sure to Delete?")){
        Allproduct.splice(index, 1);
        this.setState({
            products: Allproduct
      })
      }
  }
}

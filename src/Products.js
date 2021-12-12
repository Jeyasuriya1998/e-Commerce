import React, {Component} from "react";

export default class Products extends Component {
    constructor(props){
        console.log("Product = Constructor")
        super(props);
        this.state ={
            product: this.props.product
        }
    }
    
    render(){
        console.log("Product = render")
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">
                            # {this.state.product.id}
                            <span className="pull-right hand-icon" onClick={() => this.props.onDelete(this.state.product)}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
                        <h6>${this.state.product.price}</h6>
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge">{0 < this.state.product.quantity <10 ?  this.state.product.quantity: "No"}</span>
                            <div className="btn-group">
                                <div className="btn btn-outline-success" onClick={() => this.props.onIncrement(this.state.product, 10)}>+</div>
                                <div className="btn btn-outline-success" onClick={() => this.props.onDecrement(this.state.product, 0)}>-</div>
                            </div>
                        </div>
                        <div className="float-right">
                            <div>{this.props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount(){
        console.log("Product - componentWillUnmount")
      }
    componentDidMount(){
    console.log("Product - componentDidMount")
    }
    componentDidUpdate(){
        console.log("Product - componentDidUpdate")
        }
}
import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import Menu from './Menu'
import Checkout from './Checkout'
import ItemModal from '../utilities/ItemModal'

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        };
    }
    
    handleShow = () => {
        this.setState({ showModal: true });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }
    
    render(){
        const {cart, cartOpen} = this.props;
        return(
            <div className='Shop'>
                <Menu addToCart={this.props.addToCart}/>
                <div>
                    <p>Click to get the full Modal experience!</p>

                    <Button bsStyle="primary" bsSize="large" onClick={this.props.toggleCart}>
                        Launch demo modal
                    </Button>

                    <ItemModal 
                        cart={cart}
                        handleClose={this.handleClose}
                        toggleCart={this.props.toggleCart}
                        show={cartOpen}
                    />
                </div>
                <Checkout />
            </div>
        )
  }
}

export default Shop
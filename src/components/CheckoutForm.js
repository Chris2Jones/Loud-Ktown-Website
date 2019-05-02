import React from 'react';
import ReactDOM from 'react-dom';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './CheckoutForm.css';
import { connect } from 'react-redux';
import history from '../history';

class CheckoutForm extends React.Component {
  render() {
    if (!this.props.info) {
      history.push('/rent');
      return null;
    }
    console.log(this.props.info);
    return ReactDOM.createPortal(
      <div className='modal-container'>
        <div className='modal-body'>
          <h2>Order Summary</h2>
          <ul className='summary-list'>
            <li>Name:{' ' + this.props.info.name}</li>
            <li>Email:{' ' + this.props.info.email}</li>
            <li>Phone:{' ' + this.props.info.phone}</li>
            <li>Address:{' ' + this.props.info.address}</li>
            <li>
              Dropoff on:
              {' ' + this.props.info.startdate.toString().substring(0, 15)}
            </li>
            <li>
              Pickup on:
              {' ' + this.props.info.enddate.toString().substring(0, 15)}
            </li>
            <li>Product:{' ' + this.props.info.endDate}</li>
            <li>
              <h3>Total:{' $' + this.props.info.price.toString()}</h3>
            </li>
          </ul>
          <div>
            <p>Would you like to complete this purchase?</p>
            <CardElement />
            <button onClick={() => console.log('Clicked!')}>Submit</button>
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}

const mapStateToProps = state => {
  return { info: state.orders[0] };
};

export default connect(
  mapStateToProps,
  null
)(injectStripe(CheckoutForm));
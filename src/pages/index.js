import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';
import ButtonAppBar from '../components/header';
import Row from '../components/row';
import { connect } from 'react-redux';


import withWidth from 'material-ui/utils/withWidth';


import compose from 'recompose/compose';


import {
  fetchTrakilaProducts,
} from '../actions'


const styles = {
   
};

var page = 1;
var products = [];

class Index extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
        console.log("this.props",this.props);
        this.props.fetchTrakilaProducts(page);
        products.push(this.props.offerdata)
      }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  more = () => {
    console.log("more");    
    page++;
    this.props.fetchTrakilaProducts(page);
    products.push(this.props.offerdata)

  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {

console.log(this.props)
    return (
        <span>
         <ButtonAppBar/> 
        <Row products={this.props.offerdata}/>
        <Button raised color="primary" onClick={this.more} >
        More
      </Button>   
         </span>

    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

const msp = (state) => {
  return {
    product: state.data,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    prices: state.dataprices,
    offerdata: state.offerdata.offers,
    priceLoaded: state.priceLoaded
  };
};

const mdp = (dispatch) => {
  return {
    fetchTrakilaProducts: (page) => dispatch(fetchTrakilaProducts(page))
  };
};

 //export default withRoot(withStyles(styles)(Index));

export default withRoot(withStyles(styles)(connect(msp, mdp)(Index)));

//export default withStyles(styles,0, connect(msp, mdp))(Index);

//  export default compose(
//    withStyles(styles,{
//     name: 'Index',
//   }),
// withWidth(),
//   connect(msp, mdp),

//   )(Index);
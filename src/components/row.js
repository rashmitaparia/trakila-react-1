// @flow weak

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Slider from 'react-slick';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';






const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),

  card: {
    maxWidth: 345,
    margin: 20,
     
  },
  media: {
    height: 50,
    width: 50,
    

  },

});



const settings = {
  dots: false,
  //infinite: true,
  speed: 500,
  slidesToShow: 5,
  arrows: true,
  slidesToScroll: 1
};


export class Row extends React.Component {

  constructor(props) {
    super(props);
    const { classes } = props;

    // const bull = <span className={classes.bullet}>•</span>;
  }

  componentDidMount() {

    console.log("this.props",this.props);
    //this.props.fetchTrakilaProducts();
  }


  render() {
    return (

      <div>

        <Paper className={this.props.classes.root} elevation={4}>
          <Slider {...settings}>

          {this.props.products.map(product => (

            <div key={product.prodid}>
              <Card className={this.props.classes.card}>
                <CardMedia
                  className={this.props.classes.media}
                  image="http://via.placeholder.com/50x50"
                  title={product.item}
                />
                <CardContent>
                  <Typography type="headline" component="h2">
                    {/* {product.item} */}

                  </Typography>
                  {product.item}
                </CardContent>
                <CardActions>
                  <Button dense color="primary">
                    Share
          </Button>
                  <Button dense color="primary">
                    Learn More
          </Button>
                </CardActions>
              </Card>
            </div>
          ))}
          </Slider>
        </Paper>
      </div>

    );
  }
}




// const msp = (state) => {
//   return {
//     product: state.data,
//     hasErrored: state.itemsHasErrored,
//     isLoading: state.itemsIsLoading,
//     prices: state.dataprices,
//     offerdata: state.offerdata,
//     priceLoaded: state.priceLoaded
//   };
// };

// const mdp = (dispatch) => {
//   return {
//     fetchTrakilaProducts: () => dispatch(fetchTrakilaProducts())
//   };
// };

//var r  = connect(msp, mdp)(Row);

//export default withStyles(styles, connect(msp, mdp))(Row);
export default withStyles(styles)(Row);



//export default r


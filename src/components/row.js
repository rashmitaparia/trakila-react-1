// @flow weak

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Slider from 'react-slick';

import Card, { CardHeader,CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui-icons/AddShoppingCart';







const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3,
  }),

  card: {
    maxWidth: 300,
    minWidth: 300,
    margin: 10,
     
  },
  media: {
    height: 300,
    width: 300,
    "margin":"0px auto",

  },
  // ellipsis:{"fontSize":"14px","fontWeight":"500","marginTop":"15px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"},
ellipsis:{"display":"block","textOverflow":"ellipsis","wordWrap":"break-word","fontWeight":"bold","overflow":"hidden","height":"3em","maxHeight":"3em","lineHeight":"1.8em"}
});



const settings = {
  dots: false,
  //infinite: true,
  speed: 500,
  slidesToShow: 4,
  arrows: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }],
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
                <CardHeader></CardHeader>
                <CardMedia
                  className={this.props.classes.media}
                  image={"http://dev.trakila.com:8888/unsafe/fit-in/300x300/"+product.image}
                  // title={product.item}
                  alt={product.item}
                />
                <CardContent  className={this.props.classes.ellipsis}>
                  <Typography  component="h3">
                    {/*  {product.item} */}

                  </Typography>
                  {product.item}
                </CardContent>
                <CardContent>
                  Price : {product.price} {product.currency}
                </CardContent>
                <CardContent>
                  Reduced By : {product.price_diff}
                </CardContent>
                
                <CardActions>
                  <Grid item xs={9}><Button dense color="primary">
                    Share
                  </Button></Grid>
                  <Grid item xs={2}><a color="accent" href={product.url} target="_blank">
                    <Icon >add_shoppin_cart</Icon>
                  </a>
                   </Grid>
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


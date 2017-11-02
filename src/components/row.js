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

import Divider from 'material-ui/Divider';






const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3,
  }),

  card: {
    maxWidth: 245,
    minWidth: 245,
    maxHeight:350,
    minHeight:350,
    
    margin: 5,
     
  },

  cardcontent:{
   paddingTop:4,
   paddingBottom:4,
   paddingLeft:16,
   paddingRight:16
  },

  media: {
    height: 185,
    width: 138,
    "margin":"0px auto",

  },
  price:{"color":"#ff0000","fontWeight":"bold","paddingLeft":"20px"},
  price_difference:{"textDecoration": "line-through"},
  bordertop:{"borderTop":"1px solid #ccc"},
  borderleft:{"borderLeft":"1px solid #ccc"},
  // ellipsis:{"fontSize":"14px","fontWeight":"500","marginTop":"15px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"},
  ellipsis:{"display":"block","textOverflow":"ellipsis","wordWrap":"break-word","fontWeight":"bold","overflow":"hidden","height":"2em","maxHeight":"2em","lineHeight":"1.5em"}
});





const settings = {
  dots: false,
  //infinite: true,
  speed: 500,
  slidesToShow: 4,
  arrows: true,
  responsive: [{
    breakpoint: 1280,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: true
    }
  }, 
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
     }
  },
  {
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

         <Grid container spacing={24}>
          {this.props.products.map(product => (
            <Grid item xs={6} sm={3}>
               <Card className={this.props.classes.card} key={product.prodid}>
                 <CardMedia
                  className={this.props.classes.media}
                  image={"http://dev.trakila.com:8888/unsafe/fit-in/185x138/"+product.image}
                  // title={product.item}
                  alt={product.item}
                />
                <CardContent  className={this.props.classes.ellipsis}>
                  {product.item}
                </CardContent>
                <Divider></Divider>

                <CardContent className={this.props.classes.cardcontent} >
                <Grid item xs={12}><span className={this.props.classes.price_difference}>{product.price + ~--product.price_diff} </span>
                <span className={this.props.classes.price}>{product.price}</span></Grid>
                 <Grid item xs={2} >
                 <Typography type="subheading" color="secondary">
                   {product.host}
                 </Typography>
                 
                </Grid>
             </CardContent>
              </Card>
              </Grid>
           ))}
           </Grid>

 

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


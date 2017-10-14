// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Slider from 'react-slick';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
 

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),

  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function Row(props) {
  const { classes } = props;

  var settings = {
    dots: false,
    //infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 1
  };

   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
      <Slider {...settings}>
  
      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>




      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>


      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>


      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>


      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>





      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>





      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>





      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
      </div>
   
    </Slider>
      </Paper>
    </div>
  );
}

Row.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Row);
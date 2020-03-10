import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {withRouter}from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const SingleProduct = ({title, link, price, match, history}) => {
  const classes = useStyles();

  // WHAT EACH PRODUCT LOOKS LIKE
  return (
    <div onClick={() => history.push(`${match.url}${link}`)}>
         <GridListTileBar
              title={title}
              subtitle={<span>starting at $ {price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${title}`} className={classes.icon}>
                  <ShoppingCartIcon />
                </IconButton>
              }
            />
    </div>
  );
}

export default withRouter(SingleProduct)
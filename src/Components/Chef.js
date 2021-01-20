import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import chefs from "./data.json";

import "./Chef.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
    <div className="chefCardTitle"><h1>Ting Tong's Certified Chefs</h1></div>
    
    <div className='chef'>
     {chefs.map(chef=>{
                return (
                  <div className='chefCard'>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={chef.name}
                        height="450"
                        image={chef.img.src}
                        title={chef.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {chef.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          From {chef.nationality}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Located in {chef.location}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                      <CardActions>
                      <Link to="/ChefPage">
                      <Button size="small" color="primary">
                        explore
                      </Button> </ Link>
                    </CardActions>
                  </Card>
                  </div>
                );
        })}
      </div>
      </div>
  );
}

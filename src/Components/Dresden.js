import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import chefs from "./data.json";
import DresdenMenu from "./DresdenMenu";
import { CenterFocusStrong } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    fontSize:"2 em",
  },
  media: {
    height: 100,
    width: "80%",
    paddingTop: "60%", // 16:9
    marginLeft: "auto",
    marginRight: "auto",
  },

  

  

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Berlin() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const result = chefs.find(chef=>chef.location==='Dresden');

  return (
    <div className="card-container">
      <div className="card">
        <h1>Active Chefs in Berlin</h1>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={result.name}
            subheader={result.location}
          />
          <CardMedia className={classes.media} image={result.img.src} />
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="h6">
              {result.bio}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            See Menu Here !
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Dishes:</Typography>
              <Typography paragraph>
                <ul>
                  <li>
                    <DresdenMenu />
                  </li>
                </ul>
              </Typography>
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// import "./styles.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
    margin: "0 auto",
  },
  title: {
    marginTop: "0",
    marginBottom: "0",
  },
  body: {
    marginTop: "0",
  },
  imageDescription: {
    color: "rgba(0, 0, 0, 0.54)",
  },
});

function SimpleCard({ title, body, imageSrc, imageTitle, imageDescription }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.body}>{body}</p>
        <CardMedia
          image={imageSrc}
          title={imageTitle}
          alt={imageTitle}
          component="img"
        />
        <p className={classes.imageDescription}>{imageDescription}</p>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;

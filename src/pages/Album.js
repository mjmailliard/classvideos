import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardMediaYoutube: {
    paddingTop: '0%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Class Media Library
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Beware!
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              This is a collection of various images and links to recorded lectures that have originated from within our cohort.
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          
          <Grid container spacing={40}>
            {/* {cards.map(card => ( */}
 {/* Use this as a template for new cards
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="/images/works-why.jpg" target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    title="Why...."  
                    image="/images/works-why.jpg"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     title
                    </Typography>
                    <Typography>
                      description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> */}
{/* end template */}

              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="https://www.youtube.com/embed/845wnUGwi8g" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    className={classes.cardMedia}
                    title="Routing"  
                    image="favicon.ico"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    React Routing
                    </Typography>
                    <Typography>
                    Tyler showing us routing
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> 



              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="https://www.youtube.com/embed/x0lxw7OgHTw" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    className={classes.cardMedia}
                    title="Resume Site tip"  
                    image="favicon.ico"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Resume Site
                    </Typography>
                    <Typography>
                    Brad discusses a portfolio site and interview feedback regarding order of information on the site
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> 

              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="https://www.youtube.com/embed/fwefe_IZXDA" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    className={classes.cardMedia}
                    title="Mapping"  
                    image="favicon.ico"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Mapping
                    </Typography>
                    <Typography>
                    Brad discusses mapping
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> 

              {/* <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                                      <iframe title='mapping' src="https://www.youtube.com/embed/fwefe_IZXDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>                 

                  <CardMedia
                    className={classes.cardMediaYoutube}
                    title="Why....">  
                  </CardMedia>
                 
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mapping
                    </Typography>
                    <Typography>
                      Brad discusses mapping
                    <br />
                    (Full screen doesn't work yet, click the youtube logo to watch from there)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> */}

              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                <a href="/images/bantha-carl.png" target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    image='/images/bantha-carl.png'
                    title="Carl in costume"
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Carl in Bantha Costume
                    </Typography>
                    <Typography>
                    "The Sand People are easily startled, but they will soon be back, and in greater numbers."
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
              
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="/images/works-why.jpg" target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    title="Why...."  
                    image="/images/works-why.jpg"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Why....
                    </Typography>
                    <Typography>
                      I'm not sure which one is worse.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="/images/99bugs.png" target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    title="99 little bugs"  
                    image="/images/99bugs.png"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      99 little bugs 
                    </Typography>
                    <Typography>
                      Take one down, patch it around...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="/images/how-it-is.jpg" target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    title="Average day"  
                    image="/images/how-it-is.jpg"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Big Dreams
                    </Typography>
                    <Typography>
                      Jusy your average day as a programmer
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <a href="/images/drill.png" target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    title="This is a drill"  
                    image="/images/drill.png"                 
                  />
                  </a>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      This is a drill
                    </Typography>
                    <Typography>
                      I repeat, this is a drill.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

            {/* // ))} */}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          What are you doing down here?
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          All the good stuff is higher up on the page.
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
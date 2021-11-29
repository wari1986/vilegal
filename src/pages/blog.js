import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import GbiBridge from '../components/BackgroundImageHeroBlog';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
  // hero: {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
  //   height: '500px',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   position: 'relative',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   color: '#fff',
  //   fontSize: '4rem',
  //   [theme.breakpoints.down('sm')]: {
  //     height: 300,
  //     fontSize: '3em',
  //   },
  // },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: '100%',
    height: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',

  },
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <LayoutBlog>
      <div className="h-2/6">
        <GbiBridge />
      </div>
      <div>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            {/* Articulos */}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link className="px-4" href="/article20171010">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Régimen de comunicación procesal en el proceso civil Bolivia
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        En Bolivia tenemos un Código Procesal Civil similar al Código Procesal para
                        Iberoamérica estudiado, analizado y construido por más de 30 años por
                        diversos destacados jurisconsultos de muchos países Iberoamericanos.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar
                        src="https://drive.google.com/uc?export=view&id=1IsOzLXhrg6PSn6Pwv3mpFLBjtQJQ8SjU"
                        alt="manuelvillarroel"
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Dr. Manuel Villarroel Vargas
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          10 de Noviembre 2017
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: 18235
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </CardActions>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link className="px-4" href="/article20170517">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Debilidades en la aplicación del nuevo Código Procesal Civil
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Estamos a más de un año de aplicación del Código Procesal Civil Ley 439 y la
                        celeridad en la administración de justicia no ha mejorado, lamentablemente
                        está más lenta que en aplicación del Código de Procedimiento Civil.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar
                        src="https://drive.google.com/uc?export=view&id=1IsOzLXhrg6PSn6Pwv3mpFLBjtQJQ8SjU"
                        alt="manuelvillarroel"
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Dr. Manuel Villarroel Vargas
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          17 de mayo 2017.
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: 7276
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </CardActions>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link className="px-4" href="/article20160928">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1587846814306-22afe89cacfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Monitoreo de cese de copropiedad
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        El Art.391 el Código Procesal Civil, señala: “Podrá demandarse el cese del
                        estado de copropiedad común o sin indivisión forzosa que haya tenido origen
                        contractual, cuando exista imposibilidad de la cómoda división del bien,
                        para su venta en pública subasta.”
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src="https://drive.google.com/uc?export=view&id=1IsOzLXhrg6PSn6Pwv3mpFLBjtQJQ8SjU" />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Dr. Manuel Villarroel Vargas
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          28 de Septiembre 2016
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: 11709
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </CardActions>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link className="px-4" href="/article20140529">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Conciliación previa en materia civil - Bolivia
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Es muy saludable que el nuevo Código Procesal Civil se ocupe de promover en
                        todo momento la conciliación, porque nuestro pueblo y los abogados somos muy
                        pleitistas más que conciliadores.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src="https://drive.google.com/uc?export=view&id=1IsOzLXhrg6PSn6Pwv3mpFLBjtQJQ8SjU" />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Dr. Manuel Villarroel Vargas
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          29 de Mayo 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: 53221
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </CardActions>
                </Link>
              </Card>
            </Grid>
          </Grid>
          <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box>
        </Container>
      </div>
    </LayoutBlog>
  );
};

export default Blog;

// import * as React from 'react';
// import { graphql, useStaticQuery } from 'gatsby'
// import Layout from '../components/layout/Layout';
// import BookList from '../components/BookList';

// const Blog = () => {
//   const { allMarkdownRemark } = useStaticQuery(
//     graphql`
//       query {
//         allMarkdownRemark (filter: {frontmatter: {type: {eq: "book"}}}) {
//           edges {
//             node {
//               frontmatter {
//                 type
//                 path
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return (
//     <Layout>
//       <BookList books={allMarkdownRemark.edges} />
//     </Layout>
//   );
// };

// export default Blog;

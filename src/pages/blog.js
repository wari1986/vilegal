import React from 'react';
import LayoutBlog from '../components/layout/LayoutBlog';
import GbiBridge from '../components/BackgroundImageHeroBlog';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

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
import ViewCounter from '../components/ViewCounter'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
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
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link className="px-4" to="/regimen_comunicacion_procesal">
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
                          Visitas: <ViewCounter value="b9403ed9-9332-4235-b243-884adfb1ff21" />
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
                <Link className="px-4" to="/debilidades_codigo_civil">
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
                          Visitas: <ViewCounter value="5454ff72-a9e4-4852-8595-90670b669c82" />
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
                <Link className="px-4" to="/monitorio_cese_de_copropiedad">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1587846814306-22afe89cacfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Monitorio de cese de copropiedad
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
                          Visitas: <ViewCounter value="6025ba9a-8b61-4ac2-91d3-44f90a5627b3" />
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
                <Link className="px-4" to="/conciliacion_previa">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Conciliación previa en materia civil
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
                          Visitas: <ViewCounter value="bdac3106-68ed-4128-9873-655a41bc96b0" />
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
                <Link className="px-4" to="/procesos_monitorios">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Procesos monitorios
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        En todos los casos indicados anteriormente, juntamente con la demanda se
                        deberá acompañar documento auténtico o legalizado por autoridad competente,
                        que demuestre fehacientemente el derecho del demandante.
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
                          Visitas: <ViewCounter value="09dffc65-2071-48aa-af7c-d560b748a120" />
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
                <Link className="px-4" to="/procedimiento_extraordinario">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Procedimiento extraordinario
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        El proceso extraordinario se sustancia en una sola audiencia en la que se
                        concentra todo el trámite y el pronunciamiento de la sentencia sobre el
                        fondo de la pretensión jurídica sustentada en la demanda.
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
                          Visitas: <ViewCounter value="c38ceb8d-27b6-4f1a-99c3-1558af9c9c6a" />
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
                <Link className="px-4" to="/proceso_ordinario">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Procedimiento ordinario
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Descripción y fases del proceso ordinario en Bolivia.
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
                          Visitas: <ViewCounter value="e6e82d3d-5456-4857-89f1-acdc9a86cfef" />
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
                <Link className="px-4" to="/seguro_social">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Contribuciones al seguro social obligatorio Bolivia
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Tanto el empleador como el trabajador, tienen a su cargo una serie de
                        contribuciones.
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
                          21 de Abril 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value="67e63e78-a1b0-4592-b5d9-413ceae47f4b" />
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
                <Link className="px-4" to="/accidente_de_trabajo">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Muerte de trabajador por accidente de trabajo
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Existen Autos Supremos (2012-2013) recientes en los que se establece que el
                        empleador pese a demostrar que el trabajador se encuentra asegurado.
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
                          21 de Abril 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value="ae2fd099-500c-40d1-9557-1a3f94bf7755" />
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
                <Link className="px-4" to="/contrato_plazo_fijo">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Contrato a plazo fijo
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Para efectos de estabilidad laboral, se podría decir que el contrato
                        indefinido es la regla y el contrato a plazo fijo es la excepción.
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
                          16 de Abril 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value="5986bc8c-789f-4a48-8cf7-ca8e07866629" />
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
                <Link className="px-4" to="/improcedencia_de_pago_desahucio">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29yayUyMHNhZmV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Improcedencia del pago de desahucio por muerte del trabajador
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        El Art. 9 del Decreto Supremo No.1260 de 05 de julio de 1948 establece que:
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
                          24 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value="5b9dd9c3-e674-41d6-b9b5-638559ce563f" />
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
                <Link className="px-4" to="/retiro_indirecto">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1495558685573-aba7573d9c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNhZCUyMGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Retiro indirecto del trabajador
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        El retiro indirecto del trabajador no solamente se produce cuando
                        intempestivamente se rebaja el salario, sino también cuando se modifican
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
                          22 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value="1975f239-6dd0-4fab-9d98-70181f1b1f8c" />
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
                <Link className="px-4" to="/clasificacion_procesos_civiles">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Clasificación de los procesos civiles en el nuevo código procesal civil
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        El código procesal civil establece la siguiente clasificación de los
                        procesos civiles.
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
                          22 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='68270073-3431-4bff-bc13-c2501ac25f1b' />
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
                <Link className="px-4" to="/lactancia_laboral">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1565656953707-6905eb61aacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFjdGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lactancia fuera o dentro la fuente laboral
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        El Decreto Supremo No.115 de 06 de mayo de 2009, Reglamento a la Ley de
                        Fomento a la Lactancia Materna y Comercialización de sus Sucedáneos.
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
                          17 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='b5e6215e-9449-473a-9166-0ee035555cc0' />
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
                <Link className="px-4" to="/causales_despido">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Causales de despido por abandono y retiro voluntario. ¿Corresponde
                        beneficios sociales?
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Si bien la Resolución Ministerial No. 447 de fecha 08 de julio de 2009
                        establece que la renuncia puede ser verbal, ésta debe realizarse.
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
                          17 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='31724d97-2349-4984-9636-57aba02c0221' />
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
                <Link className="px-4" to="/preaviso_despido">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        ¿Existe todavía el preaviso de despido?
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Al establecerse mediante el Decreto Supremo No.28699 que nadie podrá ser
                        despedido sino solo por las causales señaladas por el Art.16
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
                          16 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='1e2e9e18-4d9f-4ab2-9722-dafc2f0be709' />
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
                <Link className="px-4" to="/inamovilidad_todos_trabajadores">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1617448570768-09ae7a069496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcmtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Inamovilidad de todos los trabajadores
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        En la política laboral del Gobierno Nacional se puede identificar dos
                        pilares fundamentales: Primero, lograr la mayor estabilidad laboral a
                        través.
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
                          16 de Enero 2014
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='413ff47f-304f-4438-8a64-51c8eccb8ae7' />
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
                <Link className="px-4" to="/segundo_aguinaldo">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1604156425963-9be03f86a428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Pago de segundo aguinaldo
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        En Bolivia por Decreto Supremo No.1802 de fecha 20 de noviembre de 2013, el
                        Gobierno Nacional ha dispuesto el pago a los trabajadores.
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
                          20 de Noviembre 2013
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='8b96848e-cbbe-4530-969b-7e98c9185b1c' />
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
                <Link className="px-4" to="/pago_indemnizacion">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1617203441790-5723a811b7fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Pago de indemnización a cuenta de liquidación final y pago definitivo
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Sucede que un empleado suscribió dos contratos laborales a plazo fijo por
                        los cuales a su conclusión recibió su correspondiente indemnización.
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
                          12 de Noviembre 2013
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='b9840e11-be95-4aaa-86de-613f0b5290e1' />
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
                <Link className="px-4" to="/aguinaldo_moneda_extranjera">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      title="Dr.Manuel Villarroel Vargas"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        ¿Corresponde el aguinaldo para aquellos que perciben su salario en moneda
                        extranjera?
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Es muy frecuente la duda relativa a si corresponde o no pagar aguinaldo a
                        aquellas personas que perciben su salario en moneda extranjera.
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
                          12 de Noviembre 2013
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Visitas: <ViewCounter value='59a4957a-d730-4213-bd43-3e709e3e692e' />
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
          {/* <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box> */}
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

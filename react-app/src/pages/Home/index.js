/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: "800px",
    margin: "0 auto",
    padding: theme.spacing(3, 2)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">DCleaner principal proveedor de servicios e insumos sanitizantes y de protección a la salud
de la zona sur de México</Typography>
        <br />
        <Typography variant="body1">
          SALUD E INNOVACIÓN
Desde hace más de 40 años mantenemos el compromiso de ofrecer el más alto nivel de servicio y productos de calidad a nuestros clientes.

Nuestro catálogo de más de 800 páginas es fácil de usar y contiene más de 38,500 productos de empaque, envío, productos industriales y de limpieza y mantenimiento, listos para enviar hoy mismo.

Los productos de la marca DCleaner combinan la mejor calidad con el mejor precio. Nuestro equipo de compradores busca los productos más finos disponibles a precios competitivos.
        </Typography>
      </Paper>
    </div>
  );
}

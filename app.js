
const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./database/db');
require('./database/relations');

//setting....
const port = process.env.PORT || 3001

//Middleware express para llenar el body
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://event-psi.vercel.app/'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//importar las rutas creadas
app.use('/test', require('./routes/rutaprueba'));//ruta de prueba

//Event Routes
app.use('/api', require('./routes/event'));

//User Routes
app.use('/api/user', require('./routes/user'));

//Comment Routes
app.use('/api/comment', require('./routes/comment'));

//Promoter Routes
app.use('/api/promoter', require('./routes/promoter'));

//Cloudinary Routes
app.use('/cloudinary',require('./routes/cloudinary'));




app.listen(port, () => {
  console.log(`Listening at ${port}`);

  //conectar base de datos
  sequelize.sync( {force: false}).then(() => {
      console.log('Conection to the DB Success');
  }).catch(error => {
      console.log('An error has been found: ',error)
  })
})

//import express
import express from 'express';
//import mongoose
import mongoose from 'mongoose';

//app config
const app = express();
const port = process.env.PORT || 8000;
//connection to db
const connection_url = `mongodb+srv://admin:fsH52pD6jayhJkvs@cluster0.rat6n.gcp.mongodb.net/tinder-db?retryWrites=true&w=majority`;

//middlewares

//db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// api endpoints
app.get('/', (req, res) => res.status(200).send('hello word!'));

//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

//password
//fsH52pD6jayhJkvs;

//189.199.125.10

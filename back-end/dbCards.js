//import mongoose
import mongoose from 'mongoose';

//create Schema
const cardSchema = mongoose.Schema({
	name: String,
	imgUrl: String,
});

export default mongoose.model('cards', cardSchema);

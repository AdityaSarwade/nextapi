import mongoose from "mongoose";

const dbConn = async () => {
	try {
		if (!process.env.MONGOBD_URI) {
			throw new Error(
				"Please define the MONGODB_URI environment variable inside .env"
			);
		}
		await mongoose.connect(process.env.MONGOBD_URI, { family: 4 });
		console.log("DB Connected");
	} catch (error) {
		console.log(error);
	}
};

export default dbConn;

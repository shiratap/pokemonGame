require('dotenv').config();
require('./src').listen(process.env.PORT, () => {
	console.log(`Listening on Port:${process.env.PORT}`);
});

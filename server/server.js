const express = require("express");
const cors = require("cors");
require('dotenv').config()
const bodyParser = require("body-parser"); 
const mercadopago = require("mercadopago");



const app = express();
const port = process.env.PORT || 8080

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.MP_ACCESS_TOKEN,
});


app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.json());



app.get("/", function (req, res) {
	res.status(200).send("server funcionando");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"failure": "https://patitas-callejeras-front.vercel.app/",
			"success": "https://patitas-callejeras-front.vercel.app/",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(port, () => {
	console.log(`The server is now running on Port ${port}`);
});
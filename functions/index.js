const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51N0Ks9KO8cRRkVAMYwTZOgwABpEFuzhemsJMICUEDCmYoBhXJKdigL9TBoQuOe0y0Taaoy7ppw34N7tykg1cS7CD007vIk49bA");


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello"))
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment received", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    });
});

exports.api = functions.https.onRequest(app);

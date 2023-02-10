require('dotenv').config();
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static('/src'));
app.use(express.json());


app.post('/payment', async (req, res) => {

    // console.log(req.body)
    const items = req.body.items;
    let lineItems = [];

    items.forEach(item => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));

})


app.get('/paymentIntents', async (req, res) => {
    try {
      const paymentIntents = await stripe.paymentIntents.list({
        limit: 1
      });
  
      res.json(paymentIntents);
      console.log('server', paymentIntents)
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });




app.listen(4000, () => console.log("Listening on port 4000!"));
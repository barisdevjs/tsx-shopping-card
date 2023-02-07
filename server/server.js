// secret key

// sk_test_51MYc87Jgkc2AipgyOJm6CBDqCXR3Ogd1QD0zKYOJ0mQOM6m1FbkzZBo381zH5m7MQoi8TUlLmxHtyYriOapwF40l00h4b57IhZ


// git price_1MYqm6Jgkc2Aipgy6sdDS0DM

// computer price_1MYqnzJgkc2Aipgy3SH8aVTz

// Javascript price_1MYqpEJgkc2Aipgys7dqjCyw

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MYc87Jgkc2AipgyOJm6CBDqCXR3Ogd1QD0zKYOJ0mQOM6m1FbkzZBo381zH5m7MQoi8TUlLmxHtyYriOapwF40l00h4b57IhZ');

const app = express();
app.use(cors());
app.use(express.static('/src'));
app.use(express.json());


app.post('/payment', async (req, res) => {


    console.log(req.body)
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

// customerId
const paymentIntent = await stripe.paymentIntents.retrieve(
    'pm_1MYsCKJgkc2AipgyW4EtMkyz'
  );


app.listen(4000, () => console.log("Listening on port 4000!"));
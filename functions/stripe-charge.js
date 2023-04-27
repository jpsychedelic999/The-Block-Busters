const stripe = require('stripe')('sk_test_51MjICwDMiDAm4KQ1be5hfaDlN4BVYINt0kNvXW8pwz8yu1sDkRzhEeVpFJWvetqInw7MLP5rEmcaUaQ1VOKUPQ8E00Z1ZzReo1')

exports.handler = async function (event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}
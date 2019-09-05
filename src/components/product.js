import React, { useState } from "react"

const API_KEY = "pk_test_0PchIJ2AJq0BknBAKIcieMBQ005cIAlnXZ"

const Product = ({ defaultSku, skus, name, image }) => {
  const stripe = window.Stripe(API_KEY)
  const [sku, setSku] = useState(defaultSku)

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <article>
      <img
        src={image}
        width="340"
        height="340"
        alt={name}
      />
      <h3>{name}</h3>
      <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        {skus.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      <button onClick={placeOrder}>Buy Me</button>
    </article>
  )
}

export default Product

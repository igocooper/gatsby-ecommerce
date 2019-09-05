import React, { useState } from "react"

const API_KEY = "pk_test_0PchIJ2AJq0BknBAKIcieMBQ005cIAlnXZ"

const Product = ({
  skus,
  product: {
    node: { name },
  },
  image = "https://st.depositphotos.com/1813303/2640/v/950/depositphotos_26408557-stock-illustration-front-t-shirt-vector.jpg",
}) => {
  const stripe = window.Stripe(API_KEY)
  const [sku, setSku] = useState(skus[1])

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
      <img src={image} width="340" height="340" alt={name} />
      <h3>{name}</h3>
      <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        {skus.map(({ node: { id, attributes: { name } } }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={placeOrder}>Buy Me</button>
    </article>
  )
}

export default Product

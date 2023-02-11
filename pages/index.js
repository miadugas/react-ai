import Head from "next/head"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const [productInput, setProductInput] = useState("")

  async function onSubmit(e) {
    e.preventDefault()

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: productInput }),
    })

    if (count == 10) {
      return console.log("you have reached your limit")
    }
    setCount(count + 1)
    setProductInput("")
  }

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Open AI App</h1>
          <img src="favicon.ico" />
          <h3>Application Name Generator</h3>
          <p>You've used this service {count} times</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="product"
              value={productInput}
              onChange={(e) => {
                setProductInput(e.target.value)
                console.log(productInput)
              }}
              placeholder="Describe your product"
            />
            <input type="submit" value="Generate names" />
          </form>
        </main>
      </div>
    </>
  )
}

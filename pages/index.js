import Head from "next/head"

export default function Home() {
  return (
    <>
      <div class="div">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main style="back">
          <h1>Open AI App</h1>
          <img src="favicon.ico" />
          <h3>Application Name Generator</h3>
          <form>
            <input
              type="text"
              name="product"
              placeholder="describe a product"
            />
            <input type="submit" />
          </form>
        </main>
      </div>
    </>
  )
}

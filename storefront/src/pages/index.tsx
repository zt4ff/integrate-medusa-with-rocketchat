import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Script from "next/script"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Script id="rocket-chat" src="/rocketchat.js" strategy="afterInteractive" />
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home

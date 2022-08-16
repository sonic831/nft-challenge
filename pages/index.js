import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold text-red-500">
        Welcome to the NFT Challenge!
      </h1>
    </div>
  )
};

export default Home;

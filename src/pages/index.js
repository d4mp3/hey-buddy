import { useState } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { list, list2 } from '../assets/cards-list'
import styles from '@/styles/Home.module.css'
import SearchFilter from '@/components/SearchFilter'
import Header from '@/components/Header'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData }) {
  console.log(exploreData)
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className=''>
      <Head>
        <title>Hey Buddy!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <SearchFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
       {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
      <Footer />
      {/* {exploreData?.map(item => (
        <h1>{item.title}</h1>
      ))} */}

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/71XA').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
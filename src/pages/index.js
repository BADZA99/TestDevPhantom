import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
import Influenceurs from './components/Influenceurs';


export default function Home() {
  return (
    <>
      <main className=" bg-[#f1f1f1]">
        <Layout />
      </main>
    </>
  );
}

// pages/index.tsx
import Head from 'next/head';
import { Card } from '../components/common/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone for property listings." />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listing App</h1>
        <Card title="Sample Property" description="A cozy place to stay." image="/assets/placeholder.jpg" />
      </main>
    </>
  );
}

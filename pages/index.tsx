import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import "@aws-amplify/ui-react/styles.css";

import React, { Props, PropsWithRef } from 'react';

import dynamic from 'next/dynamic';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import axios from "axios";

import { Auth, Hub } from 'aws-amplify';

const ClientDependentComponent = dynamic(() => import('../components/ClientDependentComponent'), { ssr: false});
// const StandardCard = dynamic(() => import('../src/ui-components/StandardCard'), { ssr: false});
import { StandardCardCollection, EditProfile, StandardCard, ItemCard2Collection } from '../src/ui-components';
import { atom, useRecoilState } from 'recoil'



const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
  effects: [
    () => {
      const asyncLoad = async () => {
        const user = await Auth.currentAuthenticatedUser()
        const idToken = user.signInUserSession.idToken.jwtToken
        console.log("fff");
        console.log(idToken);
        const headers = {headers: { Authorization: `Bearer ${idToken}`},}; 
        console.log(headers);
        try {
          const { data } = await axios.get(
            "https://otv5e4loi7.execute-api.ap-northeast-1.amazonaws.com/staging/items",
            headers
          );
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      }
      asyncLoad();

      Hub.listen("ui", (capsule) => {
        console.log(capsule.payload.event);
        if (capsule.payload.event === "actions:datastore:create:finished") {
          // Do something after signout
          console.log(capsule.payload.event);
        }
      });
    },
  ],
});

const signUpFields = [
  {
    type: "email",
    label: "custom_label",
    placeholder: "Custom placeholder",
    hint: null,
    required: true,
  },
];

const Home: NextPage = () => {
  // const { data, isLoading, error } = useQuery("posts", async () => {
  //   const user = await Auth.currentAuthenticatedUser()
  //   const idToken = user.signInUserSession.idToken.jwtToken
  //   console.log("fff");
  //   console.log(idToken);
  //   const headers = {headers: { Authorization: `Bearer ${idToken}`},}; 
  //   console.log(headers);
  //   const { data } = await axios.get(
  //     "https://otv5e4loi7.execute-api.ap-northeast-1.amazonaws.com/staging/items",
  //     // headers
  //   );
  //   return data;
  // });

  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };
  
  const data = "hama";

  console.log("a");
  console.log(data);

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  if (!data) {
    return <div>Error Occured</div>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! {data}</a>
        </h1>

        <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>

        <p className={styles.description}>
          <Link href={'/ssr-demo'}>
            <a>SSR Demo</a>
          </Link>
        </p>

        <EditProfile />

        <ItemCard2Collection />

        <StandardCardCollection overrideItems={({ item, index })=>({
          backgroundColor: index % 2 === 0 ? 'white' : 'lightgray',
        })} />

        <ClientDependentComponent foo={''} />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about">
          <a  className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

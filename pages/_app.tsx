import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Amplify } from 'aws-amplify'; 
import awsExports from "../src/aws-exports";
import { AmplifyProvider } from '@aws-amplify/ui-react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure({ ...awsExports, ssr: true});

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <AmplifyProvider>
      <QueryClientProvider client={queryClient}>
        <Authenticator>
        <Component {...pageProps} />
        </Authenticator>
        </QueryClientProvider>
      </AmplifyProvider>
    </RecoilRoot>
  )
}

export default MyApp;

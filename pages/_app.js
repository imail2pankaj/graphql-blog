import React from 'react';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | Data Protection Excellence (DPEX) Network"
        defaultTitle="Data Protection Excellence (DPEX) Network"
        description="The Data Protection Excellence (DPEX) Network, the first of its kind facility in the ASEAN region, aims to provide leadership, best practices, training, research and support for all things around data privacy from an operational perspective."
        openGraph={{
          images: [{
            url: 'https://www.dpexnetwork.org/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75'
          }]
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

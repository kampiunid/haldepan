import Head from 'next/head'
import React from 'react'
import { metadata } from "./metadata";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel='icon' href='/images/icon/fabicon.png' />
      </Head>
      {children}
    </>
  )
}

export default Layout;

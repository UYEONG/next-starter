import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import css from './style.scss';

class About extends React.Component<DispatchProp> {
  public render() {
    return (
      <>
        <Head>
          <title>About</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Head>
        <article className={css.wrapper}>
          About me
          <br />
          <Link href="/">
            <a>Go to home</a>
          </Link>
        </article>
      </>
    );
  }
}

export default connect()(About);

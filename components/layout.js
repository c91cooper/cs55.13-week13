import Head from 'next/head';
import Link from 'next/link';

export default function Layout( {children, home}){
  return(
    <div>
      <Head>
        <title>WP Post Directory</title>
      </Head>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-primary mt-3">Back to List</a>
          </Link>
        )
      }
    </div>
  );
}
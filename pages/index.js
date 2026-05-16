import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout, { siteTitle } from "@/components/Layout";
import Link from "next/link";
import utilStyle from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import { getPostsData } from "@/lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  return {
    props: {
      allPostsData,
    }
  }
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>プロフィール2</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <p className={utilStyle.boldText}>{title}</p>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import Layout from '../components/layout';
import index from "../styles/index.module.scss";
export default function SecondPage() {
    return (
        <Layout>
            <Head>
                <title>Second Page</title>
            </Head>
            <div className={`${index.App}`} >
                <h1>Second Page</h1>
                <Link href="/">
                    Home
                </Link>
            </div>
        </Layout>
    )
}

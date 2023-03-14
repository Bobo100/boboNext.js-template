import Head from "next/head";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <h1>Home</h1>               
            </div>
        </Layout>
    )
}

export default HomePage
import HomeComponent from '@/components/Home/HomeComponent';
import Layout from '@/components/layout';

function HomePage() {
    return (
        <Layout title="Home" content="Home Page">
            <HomeComponent />
        </Layout>
    )
}

export default HomePage
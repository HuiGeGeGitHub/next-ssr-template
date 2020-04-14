import Head from "next/head"
import Test from '../components/index/Test.tsx'
import Axios from "axios"
import Link from 'next/link'
const Home = (props) => {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="title">
                    <Test></Test> 
                </h1>
                <Link href="/haha">
                    <a> 哈哈 </a>
                </Link>
            </main>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await Axios.get(`https://api.imjad.cn/cloudmusic/?id=10`)
    // Pass data to the page via props
    return { props: { res: res.data } }
}

export default Home

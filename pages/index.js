import { useEffect } from "react"
import { connect } from 'react-redux'
import Axios from "axios"
import Head from "next/head"
import Test from "../components/index/Test.tsx"
import Link from "next/link"
const Home = (props) => {
    useEffect(() => {
        console.log(props)
        ;(async () => {
            const res = await Axios.get(
                `https://api.imjad.cn/cloudmusic/?id=10`
            )
            console.log(res)
        })()
    }, [])
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1
                    className="title"
                    onClick={(e) => {
                        console.log(e)
                    }}>
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
// export async function getServerSideProps() { // 推荐这种
export async function getInitialProps() {
    // Fetch data from external API
    const res = await Axios.get(`https://api.imjad.cn/cloudmusic/?id=10`)
    // Pass data to the page via props
    return { props: { res: res.data } }
}

export default connect()(Home)

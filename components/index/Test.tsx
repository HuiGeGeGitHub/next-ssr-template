import React, { useEffect } from 'react'
import axios from 'axios'
import './Test.scss'

function Test(props: any): any {
    useEffect(() => {
        let set = new Set()
    }, [])
    return (
        <div className="testClass">
            test 特殊
        </div>
    )
}

Test.getInitialProps = async function () {
    const res = await axios.get('https://api.github.com/repos/zeit/next.js')
    console.log(res)
    // console.log(`Show data fetched. Count: ${data.length}`);
}

export default Test
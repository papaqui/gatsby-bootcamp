import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>home</h1>
      <h2>I'm Fernando, a front-end developer from Mexico.</h2>
      <p>
        Hire me <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

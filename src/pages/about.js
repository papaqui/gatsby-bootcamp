import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>about me</h1>
      <p>
        I was born in Mexico. I am a self taught developer, although the self
        taught always comes with a lot of tutorials, books and resources created
        by someone else, so, I am a modern community knowloedge lerner.
      </p>
      <p>
        Need a developer? <Link to="/contact">Hire me!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

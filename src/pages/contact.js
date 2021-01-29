import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1>contact</h1>
      <ul>
        <li>www.fernandopapaqui.dev</li>
        <li>hola@rivaslevi.mx</li>
        <li>
          <a
            href="https://twitter.com/PapaquiRivas"
            target="_blank"
            rel="noreferrer"
          >
            @PapaquiRivas
          </a>{' '}
          on Twitter
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage

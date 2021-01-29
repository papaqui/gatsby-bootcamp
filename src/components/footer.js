import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        Hecho en México por{' '}
        <Link to="/about">{data.site.siteMetadata.author}</Link>, © 2021
      </p>
    </footer>
  )
}

export default Footer

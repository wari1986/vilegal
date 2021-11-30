import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../../modules/styles.css'

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <footer className="footer">
      <div>
        © All rights reserved | {new Date().getFullYear()} |{title}
      </div>
    </footer>
  );
}

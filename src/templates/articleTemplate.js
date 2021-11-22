import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

export default function Template(data) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={data.markdownRemark.frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      <div>Autor: {frontmatter.author}</div>
      <div>Fecha de Publicación: {frontmatter.date}</div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

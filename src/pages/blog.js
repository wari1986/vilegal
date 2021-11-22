import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/Layout';
import BookList from '../components/BookList';

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (filter: {frontmatter: {type: {eq: "book"}}}) {
          edges {
            node {
              frontmatter {
                type
                path
                title
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <BookList books={allMarkdownRemark.edges} />
    </Layout>
  );
};

export default Blog;

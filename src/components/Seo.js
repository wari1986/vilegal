import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ description, keywords, title, image, url, author, language }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.siteUrl
        const metaImage = image || data.site.siteMetadata.icon
        const metaLanguage = language || data.site.siteMetadata.language
        const metaKeywords = keywords || [
          'estudio jurídico',
          'estudio de abogados',
          'asesoria legal',
          'La Paz',
          'Bolivia',
          'blog articulos derecho',
          'blog articulos juridicos',
          'blog para estudiantes de derecho',
          'consulta legal',
        ];
        return (
          <Helmet
            title={title}
            htmlAttributes={{
              lang: 'es',
            }}
            meta={[
              {
                name: `description`,
                content: `metaDescription`,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:type`,
                content: `blog`,
              },
              {
                property: `og:author`,
                content: metaAuthor,
              },
              {
                property: `og:language`,
                content: metaLanguage,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `robots`,
                content: `all`,
              },
              {
                name: `googlebot`,
                content: `all`,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        );
      }}
    />
  )
}


const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        author
        description
        icon
        siteUrl
        language
      }
    }
  }
`
export default Seo;

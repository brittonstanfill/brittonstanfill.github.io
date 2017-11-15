import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="blog_container">
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(post => {
          if (post.node.frontmatter.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div  className="blog_entries" key={post.node.frontmatter.path}>
                <div className="blog_entry_content">
                  <h1 className="blog_entry_title">
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={post.node.frontmatter.path}
                    >
                      {title}
                    </Link>
                  </h1>
                  <p className="blog_entry_description" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  <div className="blog_meta_data">
                    <small className="blog_entry_date">{post.node.frontmatter.date}</small>
                    <small className="blog_entry_tag">{post.node.frontmatter.tag}</small>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title,
            tag
          }
        }
      }
    }
  }
`

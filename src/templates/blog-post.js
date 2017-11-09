import React from 'react'
import get from 'lodash/get'
import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return <BlogPost post={post} />
  }
}

export default BlogPostTemplate

/*
If you add a new property to a blog post (ie imageUrl, avatar, etc), you'll do that down there in the "frontmatter" section. Then, in components/BlogPost.js, you'll need to add it as well.
*/

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

import React from 'react'
import Bio from '../components/Bio'
import Helmet from 'react-helmet'

export default class BlogPost extends React.Component {
	render() {
		const post = this.props.post;
		const {
			date,
			title,
			description,
			tag,
		} = post.frontmatter;

		// console.log(post)

		return (
	      <div className="post_container">
	        <Helmet title={`Page Title`} />
	        <h1 className="post_title">{title}</h1>
	        <p className="post_date">{date}</p>
	        <p className="post_tag">{tag}</p>
	        <p className="post_description">{description}</p>
	        <div dangerouslySetInnerHTML={{ __html: post.html }} />
	      </div>
		)
	}
}
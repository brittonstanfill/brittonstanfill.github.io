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
		} = post.frontmatter;

		// console.log(post)

		return (
	      <div>
	        <Helmet title={`Page Title`} />
	        <h1>{title}</h1>
	        <p className="date">
	          {date}
	        </p>
	        <p>
	          Description: {description}
	        </p>
	        <div dangerouslySetInnerHTML={{ __html: post.html }} />
	        <hr/>
	        <Bio />
	      </div>
		)
	}
}
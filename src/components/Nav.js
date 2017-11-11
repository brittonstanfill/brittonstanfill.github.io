import React from 'react'
import Link from 'gatsby-link'

export default class Nav extends React.Component {
	render () {
		return (
			<nav>
				<span className='logo'>Britton Stanfill</span>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='blog'>Blog</Link>
					</li>
					<li>
						<Link to='course'>Course</Link>
					</li>
				</ul>
			</nav>
		)
	}
}
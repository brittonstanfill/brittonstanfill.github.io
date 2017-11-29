import React from 'react'
import Link from 'gatsby-link'

export default class Nav extends React.Component {
	render () {
		return (
			<nav>
				<span className='logo'><Link to='/'>Britton Stanfill</Link></span>
				<ul>
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
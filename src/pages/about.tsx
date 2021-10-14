import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section className="About">
				<h1>About</h1>
				<p>
					Hello, I'm Sultan!
					<br />
					<br />
					This is a blog where I intend to share  ideas from STEM that I find interesting and helpful!
					<br />
					<br />
					sif you'd like to get in touch{" "}
					<a
						href="mailto:ksula0155@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						click here for my email
					</a>
					<br />
					<br />
					<br />
					<br />
					- Sultan
				</p>
			</section>
		</Layout>
	)
}

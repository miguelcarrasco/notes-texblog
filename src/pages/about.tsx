import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
    return (
        <Layout>
            {/* siteTitle specifies that the title will the siteTitle alone */}
            <SEO title="siteTitle"/>
            <section className="About">
                <h1>Acerca de</h1>
                <p>
                    Mi nombre es Miguel Angel Carrasco, soy un entusiasta de las matemáticas, la programación y el jazz.
                    <br/>
                    <br/>
                    Este es un simple proyecto que empecé como un sitio donde compilar y almacenar diversas ideas de
                    varios tópicos tales como matemáticas, computación, física, música y en general, todo tipo de
                    conocimiento valioso que he ido aprendiendo con el tiempo, principalmente para recordarlas y
                    compartirlas públicamente.
                    <br/>
                    <br/>
                    El blog esta hecho en <a href="https://gatsbyjs.com">Gatsby</a> y está basado en el starter{" "}
                    <a
                        href="https://github.com/aaaakshat/gatsby-starter-texblog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TeXBlog
                    </a>{" "}
                    hecho por{" "}

                    <a
                        href="http://akshatbisht.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Askhat Bisht
                    </a>{" "}
                </p>
            </section>
        </Layout>
    )
}

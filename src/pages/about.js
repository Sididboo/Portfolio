import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Button from "../components/Button"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A propos de moi
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
              Qui suis-je ?
            </h2>
            <div className="mt-4 leading-loose">
              Bonjour, je m'appelle Théo VACANT et j'ai 23 ans. Je suis
              originaire du Grand-Est, en particulier de Meurthe-et-Moselle.
              <br />
              <br />
              Depuis que je suis enfant, je suis fasciné par l'informatique.
              J'ai toujours voulu devenir développeur ou avoir un métier en lien
              avec le monde du numérique. Je suis actuellement en BTS SIO en
              dernière année, je souhaite me tourner vers une Licence puis un
              master si cela est possible.
              <br />
              <br />
              {/* <Button href="../../static/CV-TheoVACANT.pdf">
                Télécharger mon CV
              </Button>
              <br/> */}
              <br />
              Si vous souhaitez me contacter:
              <br />
              <a
                href="mailto:contact@johndoe.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                contacts@theovacant.Fr
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Test"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 800, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

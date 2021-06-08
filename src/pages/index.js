import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import FetchRepoGit from "../components/FetchRepoGit"

const IndexPage = ({ data }) => {
  return (
    <div className="bg-gray-900">
      <Layout>
        <SiteMetadata title="Home" description="Portfolio Théo VACANT" />

        <Hero />

        <div className="flex flex-wrap content-center bg-gray-900 py-12 lg:py-16">
          {data.portfolio && data.portfolio.nodes.length > 0 ? (
            <Cards items={data.portfolio.nodes} />
          ) : (
            <div className="container">No projects found.</div>
          )}
        </div>
        <FetchRepoGit />
      </Layout>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`

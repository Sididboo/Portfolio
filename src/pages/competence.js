import React from "react"
import Layout from "../layouts/Layout"
import pdfE6 from "../../static/E6_prerempli.pdf"

export default function veille() {
  return (
    <div>
      <Layout>
        <div className="container py-12 lg:pb-16">
          <h1 className="mb-12 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
            Compétences profesionnelles
          </h1>
          <div>
            <iframe
              src={pdfE6}
              frameborder="0"
              height="500"
              width="100%"
            ></iframe>
          </div>
        </div>
      </Layout>
    </div>
  )
}

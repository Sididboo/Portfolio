import React from "react"
import Timeline from "../components/Timeline"
import Layout from "../layouts/Layout"

export default function parcours() {
  return (
    <div className="bg-gray-900">
      <Layout>
        <h1 className="container mb-12 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
          Mon parcours
        </h1>
        <Timeline />
      </Layout>{" "}
    </div>
  )
}

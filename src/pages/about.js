import React from "react"
import Layout from "../layouts/Layout"
import downloadFile from "../../static/CV-VACANT_Theo.pdf"

const AboutPage = ({ data }) => (
  <Layout>
    <div className="bg-gray-900">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
              A propos de moi
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
              Qui suis-je ?
            </h2>
            <div className="text-white mt-4 leading-loose">
              Bonjour, je m'appelle Théo VACANT et j'ai 23 ans. Je suis
              originaire du Grand-Est, en particulier de Meurthe-et-Moselle.
              <br />
              <br />
              Depuis que je suis enfant, je suis fasciné par l'informatique.
              J'ai toujours voulu devenir développeur ou avoir un métier en lien
              avec le monde du numérique. Je suis actuellement en dernière année
              du BTS SIO option SLAM, je souhaite me tourner vers une Licence
              puis un master si cela est possible.
              <br />
              <br />
              <a href={downloadFile}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {" "}
                  Télécharger mon CV
                </button>
              </a>
              <br />
              <br />
              Si vous souhaitez me contacter:
              <br />
              <a
                href="mailto:contacts@theovacant.fr"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-700"
              >
                contacts@theovacant.fr
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

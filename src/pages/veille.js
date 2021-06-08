import React from "react"
import Layout from "../layouts/Layout"

const veille = () => (
  <div>
    <Layout>
      <div className="container py-12 lg:pb-16">
        <h1 className="text-5xl text-center leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
          Veille technologique et juridique
        </h1>

        <h2 className="text-xl text-center mt-10 leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
          Qu'est-ce qu'une veille technologique ?
        </h2>

        <div className="flex flex-row space-x-2">
          <div className="text-white text-center flex-1 mt-4 ">
            La veille technologique consiste à s'informer de façon systématique
            sur les techniques les plus récentes et surtout sur leur mise à
            disposition.Cette activité met en œuvre des techniques
            d'acquisition, de stockage et d'analyse d'informations et leur
            distribution automatique aux différentes sections concernées de
            l'entreprise, à la manière d'une revue de presse. Ces informations
            peuvent concerner une matière première, un produit, un composant, un
            procédé, l'état de l'art et l'évolution de l'environnement
            scientifique, technique, industriel ou commercial de l'entreprise.
          </div>
        </div>

        <hr className="mt-6 mb-6" />
        <h2 className="text-xl text-center mt-10 leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
          Objectifs de la veille technologique ?
        </h2>

        <div className="flex flex-row space-x-2">
          <div className="text-white text-center flex-1 mt-4 ">
            Mettre en place une veille technologique permanente sur des domaines
            identifiés répond à plusieurs objectifs. Cela permet de constituer
            une base d’informations clés pour identifier et comprendre les
            concurrents et les technologies. C’est un moyen de collecter des
            informations stratégiques sur les concurrents et leurs innovations.
            En réalisant des recherches fréquentes dans différents domaines
            susceptibles d’interagir avec vos objectifs, vous créez de nouvelles
            opportunités de partenariats ou d’innovations. Vous pouvez aussi y
            détecter les entrants potentiels, les domaines innovants ou vous
            inspirer des marchés connexes.
          </div>
        </div>

        <hr className="mt-6 mb-6" />
        <h2 className="text-xl text-center mt-10 leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
          Les outils que j'utilise pour ma veille ?
        </h2>

        <div className="flex flex-row space-x-2 grid grid-cols-1">
          <section>
            <div className="text-white text-center flex-1 mt-4">
              Pour ma veille technologique et juridique, j'utilise des outils
              qui rassemblent un ensemble de flux RSS choisi au préalable. Pour
              la veille, je me sers principalement en particulier du site
              Feedly.
            </div>
          </section>
          <section>
            <div className="text-white text-center flex-1 mt-4">
              <img
                className="float-left"
                src={"Feedly-logo.png"}
                alt="feedlyIcons"
              />
              <p className="pt-12">
                Feedly est un agrégateur de flux RSS et Atom en ligne. Il est
                accessible par un navigateur internet, et est également
                disponible sous forme d'application pour smartphone. Il permet,
                via une interface web ou une application mobile1, de gérer et
                personnaliser ses abonnements à des flux RSS.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  </div>
)

export default veille

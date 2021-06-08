import React, { useEffect, useState } from "react"
import { AiFillEye, AiFillLayout, AiFillStar } from "react-icons/ai"
import axios from "axios"
import { motion } from "framer-motion"

function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Sididboo/repos")
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div className="bg-gray-900">
      <h2 className="flex justify-center text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">
        Mes projets
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-center gap-4  ">
        {" "}
        {posts.map(post => (
          <a className="no-underline" href={post.html_url}>
            <div className="max-w-md w-80 min-w-full py-4 px-8 bg-white shadow-2xl rounded-lg my-20">
              <motion.button whileHover={{ scale: 1.1 }}>
                <div>
                  <h2 className="text-black text-3xl font-semibold">
                    {post.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{post.description}</p>
                </div>
                <div className="mt-2 mb-2 inline-flex">
                  <AiFillEye className="mt-1 mr-2" /> {post.watchers_count}
                  <AiFillStar className="mt-1 mr-2 ml-2" />{" "}
                  {post.stargazers_count}
                </div>
              </motion.button>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default DataFetching

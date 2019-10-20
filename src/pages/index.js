import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Name from "../../public/icons/Name";
import "../scss/main.scss"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div styles={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  // <div class="vertical-center text-center">
  <div class="vertical-center">
    <div class="container dead-center">
        <svg
          width="671.5"
          height="90"
          viewBox="0 0 671.5 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#FFF"
            stroke-width="0.25mm"
            fill="none"
            styles="stroke:#FFF;stroke-width:0.25mm;fill:none"
          >
            <path
              class="name"
              d={Name}
              vector-effect="non-scaling-stroke"
            />
          </g>
        </svg>
      <div class="flex-row">
        <div class="flex-small link">
          <Link to="/experience/" class="white first">Experience</Link>
        </div>
        <div class="flex-small link">
          <a href="/ezapanta.pdf" class="whitenpm install gh-pages --save-dev second">Resume</a>
        </div>
      </div>
      <h5 class="text-center current">Jr. Software Engineer @ DigitalMint</h5>
    </div>  
  </div>
)

export default IndexPage
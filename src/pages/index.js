import React from "react";
import { Link } from "gatsby";

// import Image from "../components/image"
// import SEO from "../components/seo"
import Name from "../../public/icons/Name";
import "../scss/main.scss";

const IndexPage = () => (
  <div className="vertical-center">
    <div className="container dead-center">
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
          <path className="name" d={Name} vector-effect="non-scaling-stroke" />
        </g>
      </svg>
      <div className="flex-row">
        <div className="flex-small link">
          <Link to="/experience/" className="white first">
            Experience
          </Link>
        </div>
        <div className="flex-small link">
          <a href="/ezapanta.pdf" className="white second">
            Resume
          </a>
        </div>
      </div>
      <h5 className="text-center current">Software Engineer @ DigitalMint</h5>
    </div>
  </div>
);

export default IndexPage;

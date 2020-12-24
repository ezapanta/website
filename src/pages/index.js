import React from "react";
import { Link } from "gatsby";
import Name from "../../public/icons/Name";
import "../scss/main.scss";

const IndexPage = () => (
  <div className="abs-center">
    <div className="container">
      <div>
        <svg viewBox="0 0 671.5 90" preserveAspectRatio="xMidYMid meet">
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#FFF"
            strokeWidth="0.25mm"
            fill="none"
            styles="stroke:#FFF;strokeWidth:0.25mm;fill:none"
          >
            <path className="name" d={Name} vectorEffect="non-scaling-size" />
          </g>
        </svg>
      </div>
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
      <h5 className="text-center current">
        Jr. Software Engineer @ DigitalMint
      </h5>
    </div>
  </div>
);

export default IndexPage;

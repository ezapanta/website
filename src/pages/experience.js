import React from "react";
import "../scss/main.scss";

const Experience = () => (
  <div>
    <h1 className="text-center fadeTitle">Experience</h1>
    <div className="medium-container margin-bottom first">
      <div className="flex-row">
        <strong className="flex-large no-margin-bottom">
          Jr. Software Engineer @ DigitalMint
        </strong>
      </div>
      <div className="flex-row">
        <span className="flex-large">
          <p>Sep. 2019 - Present</p>
        </span>
      </div>
      <div className="flex-row">
        <span className="flex-large">
          <p>
            Launched Bravo, a management platform for cryptocurrency exchanges.
            I mainly develop frontend features written with React.
            Occassionally, I peek into the backend as an opportunity to learn
            Go.
          </p>
        </span>
      </div>
    </div>
    <div className="medium-container margin-bottom second">
      <div className="flex-row">
        <strong className="flex-large no-margin-bottom">
          Full-Stack Developer @ Backbar
        </strong>
      </div>
      <div className="flex-row">
        <span className="flex-large">
          <p>Jun. 2019 - Sep. 2019</p>
        </span>
      </div>
      <div className="flex-row">
        <span className="flex-large">
          <p>
            A management tool beverages programs at bars and restaurants. After
            launch, I continued to maintain the mobile application in addition
            to its Vue web application, and the backend which consists of a
            Node/Express API and MySQL database. Visit the{" "}
            <a href="https://www.getbackbar.com/">
              <u className="link">info site</u>
            </a>
            {" to learn more!"}
          </p>
        </span>
      </div>
    </div>
    <div className="medium-container margin-bottom third">
      <div className="flex-row">
        <strong className="flex-large no-margin-bottom">
          Mobile Development Intern @ Backbar
        </strong>
      </div>
      <div className="flex-row">
        <span className="flex-large">
          <p>Jan. 2019 - Jun. 2019</p>
        </span>
      </div>
      <div className="flex-row">
        <span className="flex-large">
          <p>
            Developed React Native management tool beverages programs at bars
            and restaurants. Features include real-time inventory counting, menu
            information updates, and more! Download Backbar (for free!) on the{" "}
            <span>
              <a href="https://apps.apple.com/us/app/backbar/id1461796151">
                <u className="link">App Store</u>
              </a>
            </span>
            {" and "}
            <a href="https://play.google.com/store/apps/details?id=com.backbar&hl=en_US">
              <u className="link">Google Play</u>
            </a>
            .
          </p>
        </span>
      </div>
    </div>
  </div>
);

export default Experience;

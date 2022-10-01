import React from "react";
import "../scss/main.scss";

const Experience = () => (
  <div className="vertical-center" style={{ color: "#FFFFFF" }}>
    <div className="dead-center">
      <h1 className="text-center fadeTitle" style={{ color: "#FFFFFF" }}>
        Experience
      </h1>
      <div className="container margin-bottom first">
        <div className="flex-row">
          <strong className="flex-large no-margin-bottom">
            Jr. Software Engineer @ DigitalMint
          </strong>
        </div>
        <div className="flex-row">
          <p className="flex-large">Sep. 2019 - Present</p>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            Launching Bravo, a management platform for cryptocurrency exchanges.
            I mainly develop frontend React applications.
          </div>
        </div>
      </div>
      <div className="container margin-bottom second">
        <div className="flex-row">
          <strong className="flex-large no-margin-bottom">
            Software Engineer @ Backbar
          </strong>
        </div>
        <div className="flex-row">
          <p className="flex-large">Jun. 2019 - Sep. 2019</p>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            A management tool for beverage programs at bars and restaurants.
            After launch, I continued to maintain the mobile application in
            addition to its Vue application, and the backend which consists of a
            Node/Express API and MySQL database. Visit the{" "}
            <a href="https://www.getbackbar.com/">
              <u className="link">info site</u>
            </a>
            {" to learn more!"}
          </div>
        </div>
      </div>
      <div className="container margin-bottom third">
        <div className="flex-row">
          <strong className="flex-large no-margin-bottom">
            Mobile Development Intern @ Backbar
          </strong>
        </div>
        <div className="flex-row">
          <p className="flex-large">Jan. 2019 - Jun. 2019</p>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            Developed React Native app for beverage programs at bars and
            restaurants. Features include real-time inventory counting, menu
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;

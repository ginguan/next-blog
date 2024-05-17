// pages/about.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="p-8">
      <main className="flex flex-col items-center justify-between min-h-screen style={{paddingLeft:'5%',paddingRight:'5%'}}">
        <div className="z-10 flex flex-col items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.demolab.com?font=Pixelify+Sans&size=30&duration=3000&pause=1000&color=000000C0&random=false&width=450&lines=%F0%9F%91%8B+Hey+there%2C+I+am+Gin.+;+I'm+a+software+developer+%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB"
              alt="Typing SVG"
            />
          </a>
        </div>

        <div className="mt-8 w-full max-w-5xl">
          <p className="text-lg">
            I am currently working as a software engineer and work on platforms that empower developers and player experience. I
            have worked on developing the enterprise platform including web and mobile applications that help workplace management.
            I mainly focus on full-stack applications and have established different applications using JS Frameworks and databases
            within a group or individually. I have experience working with Agile software development methodology and test-driven
            development.
          </p>

          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/yingjinguan"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/-YingjinGuan-blue?style=flat&logo=Linkedin&logoColor=white"
                alt="Linkedin Badge"
                className="inline"
              />
            </a>
          </div>
        </div>

        <section className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-bold">WORK EXPERIENCE</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Software Engineer - Electronic Arts{' '}
              <img
                src="https://user-images.githubusercontent.com/22879067/153312026-a6f6dba0-4e14-4982-b0d1-2a8ac5549fc0.png"
                alt="Electronic Arts Logo"
                className="inline-block w-6 h-6"
              />{' '}
              <span className="text-sm text-gray-500">January 2022 - Present</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Designed and developed innovative products that enhanced game services and improved developer experience, utilizing
                React, TypeScript/JavaScript, and Node.js.
              </li>
              <li>Participate in all aspects of an iterative, Agile software development process.</li>
              <li>
                Implement transition from Mistral workflow systems to a more streamlined and efficient process using RESTful APIs,
                enhancing the application’s performance and scalability.
              </li>
              <li>
                Design and implement user-friendly React forms to replace the previous system, improving user experience and ensuring
                seamless data collection and validation.
              </li>
              <li>
                Own the requirements gathering process for key projects, identified prevalent use cases, and streamlined requirement
                processing.
              </li>
              <li>
                Collaborate with cross-functional teams to design and implement seamless integration experiences, enhancing system
                interoperability and user satisfaction.
              </li>
              <li>
                Championed knowledge sharing within the team by hosting training sessions, leading to enhanced product proficiency and team
                expertise.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">
              Full Stack Developer - Yoppworks Inc./Bille App Inc.{' '}
              <img
                src="https://user-images.githubusercontent.com/22879067/153311766-973b4fd9-f344-4d0e-8911-3fec93207894.png"
                alt="Yoppworks Logo"
                className="inline-block w-6 h-6"
              />{' '}
              <span className="text-sm text-gray-500">March 2021 – January 2022</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Develop an enterprise platform (websites and mobile app) that helps workplace managements, real estate portfolio, and employees.
              </li>
              <li>Designed and implemented Scala-based RESTful APIs for key features.</li>
              <li>
                Collaboratively shaped the product roadmap, integrating frontend (React, React Native), backend (Scala), and database
                management (PostgreSQL) in a dynamic agile setting.
              </li>
              <li>
                Operate with limited oversight to fulfill duties. Work with engineering and product manager to provide input on new features being
                developed/released.
              </li>
              <li>
                Improving standalone reservation system which allows users to search buildings by proximity, view floorplans with amenities and
                space availability, develop integration with Google Workspace and Microsoft 365 calendar systems/APIs to propagate changes.
              </li>
              <li>
                Transition from Elastic Search to microservices APIs, rectifying data inconsistency issues and bolstering the contact tracing analytic
                system.
              </li>
              <li>Upgrade Firebase version for React Native Applications.</li>
              <li>Responsible for writing unit/stress/regression tests for new features and integration.</li>
              <li>Resolved issues caused by ineffective query optimization and pipeline failures.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-bold">EDUCATION</h2>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Master of Computer Science</strong> - University of Ottawa <span className="text-sm text-gray-500">Sep 2018 – Aug 2020</span>
            </li>
            <li>
              <strong>Honours Bachelor of Science - Engineering: Specialized in Computer Science</strong> - University of Ottawa{' '}
              <span className="text-sm text-gray-500">Sep 2014 – June 2018</span>
            </li>
          </ul>
        </section>

        <section className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-bold">SKILLS</h2>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Programming Languages:</strong> JavaScript, TypeScript, Python, Java, Scala, HTML5, XML, CSS, PHP, SQL, Go, GraphQL, Bash
            </li>
            <li>
              <strong>Technologies/Tools:</strong> Git, NodeJS, ExpressJS, AngularJS, React, Redux, Android Studio, React Native, Django, Agile, Postgres, Mongodb,
              MySQL, Docker, Kubernetes, AWS, Google cloud platform, REST, Microservices, Spark, Jest, Kafka, ElasticSearch, Spring Boot, Grafana Labs
            </li>
            <li>
              <strong>Manual/Automated Testing Skills:</strong> System & Unit Testing, Regression Testing, Load Testing, Test Cases, Plans & Scripts, Tracking, Logging &
              Reporting, Test Strategies & Coverages
            </li>
          </ul>
        </section>

        <section className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-bold">PERSONAL PROJECTS</h2>
          <details className="mt-4 w-full">
            <summary className="text-xl font-semibold cursor-pointer">WEB APP PROJECTS</summary>
            <ul className="list-disc list-inside mt-2">
              <li>
                <a
                  href="https://github.com/ginguan/UI_Practice.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Music Product Website
                </a>
                : A frontend design web with 3 pages (intro, pricing, payment) with animation features. Using <strong>ReactJS, HTML, CSS, JavaScript</strong>
              </li>
              <li>
                <a
                  href="https://github.com/ginguan/react_login.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  JWT Authentication System
                </a>
                : Website allow user to signup and signin using username, email, password and profile picture. The front-end is created with React Redux, React Router, Axios. Using <strong>ReactJS, Express, HTML, CSS, JavaScript, Mongo atlas, JSON Web Token Authentication</strong>
              </li>
              <li>
                Movie Database Website: a website allows user to search for movies/actors/directors and provides recommendation from different ranking, categories, set preferences, score the movies and write reviews. Using <strong>PHP</strong> to connect database and backend, <strong>CSS, and HTML for frontend</strong> and <strong>PostgreSQL</strong>.
              </li>
              <li>
                <a
                  href="https://github.com/JerryFZhang/ConferenceTravelGrantSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Conference Travel Grant System
                </a>
                : a website for user for conference travel grant with traveling location and tuition. Using <strong>Nodejs, Express.js, MongoDB</strong> and <strong>jQuery</strong>.
              </li>
              <li>
                Weather Website: a cross-platform smart weather application that indicates temperature changes compares to the previous day to give you a better understanding of your weather. Using <strong>DarkSky API, Bootstrap, Node.js, CSS,</strong> and <strong>HTML, MongoDB</strong>.
              </li>
              <li>
                <a
                  href="https://github.com/ginguan/CRUD_Practice_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  TV Show Management Website
                </a>
                : An application that allows users to manage TV shows (create, delete, search, update information of tv shows) and displayed on calendar, generate today’s schedule(CSV) to user. Using <strong>React, Redux, Spring Boot, PostgreSQL, Java, JavaScript</strong>.
              </li>
              <li>
                <a
                  href="https://ginguan.github.io/Movie_Award/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Movie Award Web
                </a>
                : A webpage that can search OMDB api for movies, and allow the user to save their favourite movies they feel should be up for nomination (Up to 5 nominations). Using <strong>HTML, Typescript, ReactJS</strong>
              </li>
              <li>
                <a
                  href="https://github.com/ginguan/simpleTutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Tutorials Management Application
                </a>
                : a web application allows users create, delete, search, update information of tutorials. Using <strong>HTML, Typescript, AngularJS</strong>.
              </li>
            </ul>
          </details>

          <details className="mt-4 w-full">
            <summary className="text-xl font-semibold cursor-pointer">MOBILE APP PROJECTS</summary>
            <ul className="list-disc list-inside mt-2">
              <li>
                <a
                  href="https://github.com/ginguan/employeeapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Employee Management Mobile Application
                </a>
                : a mobile application that allows a company to store details on an employee information such as name, position, salary, picture, etc. includes camera access, images upload. Using <strong>React Native, Node.js and express.js</strong> and <strong>MongoDB</strong>.
              </li>
              <li>
                <a
                  href="https://github.com/ginguan/youtube-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  YouTube Clone Mobile App
                </a>
                : a mobile application that allows user to make clone of youtube app using YouTube api. includes how to add dark mode, toggle button to toggle theme. Using <strong>React Native</strong>.
              </li>
              <li>
                Weather Mobile App: a mobile application that show the weather conditions of any city. includes autocomplete when user types, save city name on device storage. Using <strong>React Native</strong>.
              </li>
              <li>
                Football Tournament Android Application: an android application that allows users to set and fill information for the knockout, round robin and knockout round robin tournaments. Frontend using <strong>Android Studio</strong> with XML and backend using <strong>Java</strong> programming.
              </li>
            </ul>
          </details>

          <details className="mt-4 w-full">
            <summary className="text-xl font-semibold cursor-pointer">OTHER APP PROJECTS/SYSTEMS</summary>
            <ul className="list-disc list-inside mt-2">
              <li>
                <a
                  href="https://github.com/GabiRepare/SMTravel.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  SM Travel Calling System
                </a>
                : this is based on the Modelling and Simulation Study process to create High-level Conceptual Model using <strong>Java</strong>, detailed conceptual model and simulation program of a calling system to handle call request of a travel office. At the end, a set of experiments are designed and carried out with the simulation program that provides sufficient to achieve the goals of the project.
              </li>
              <li>
                <a
                  href="https://github.com/xtstc131/CSI5147_Final_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Unity 3D Game
                </a>
                : 3D ball balance game using <strong>Unity 3D</strong> and <strong>C#</strong>.
              </li>
              <li>
                Facial Landmark Detection and Face Mesh Export: using iOS device to detect human face and analyze facial features and export 3D face mesh. Modify face mesh deformation using <strong>Python</strong>.
              </li>
              <li>
                Implement Machine Learning Algorithm for Predicting Online Bids are Made by Robot or Human: using <strong>MySQL</strong> to preprocess the dataset and using Jupyter Notebook(<strong>Python</strong>) for algorithm implementation.
              </li>
              <li>
                Product Pricing from Crowdsourcing Data Mart: a project involving large scale dataset for physical design of data mart, data staging, OLAP queries, business intelligence dashboard, and data visualization. Using <strong>Microsoft SQL, Knime</strong>.
              </li>
              <li>
                Car Rental System: A simple <strong>Java</strong> system that allows users to rent car for choosing dates, car model and get a total summary for final expenses.
              </li>
            </ul>
          </details>
        </section>

        {/* <section className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-bold">SHARE SOME MUSIC I AM LISTENING 🎧</h2>
          <div className="mt-4">
            <a href="https://github.com/kittinan/spotify-github-profile" target="_blank" rel="noopener noreferrer">
              <img
                src="https://spotify-github-profile.vercel.app/api/view?uid=ux8hmewvah60mppog68eu8kjx&cover_image=false&theme=default&show_offline=false&background_color=121212&interchange=true&bar_color_cover=false"
                alt="Spotify Profile"
              />
            </a>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default AboutPage;

import React from "react";
import {
  EnvironmentOutlined,
  LikeOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import { experience, projects } from "../data/data";
import item from "antd/es/list/Item";

const AboutMe = () => {
  return (
    <div className="body-container">
      <div className="left">
        <section className="about">
          <article>
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nemo quam, voluptatum est quos aliquid modi culpa ipsum unde
              maiores commodi impedit vero adipisci necessitatibus corrupti,
              dicta totam officiis sapiente. Saepe optio enim nobis, nostrum,
              recusandae sunt esse nihil quod accusantium dicta repudiandae
              porro ducimus praesentium molestiae? Iste rem nisi omnis possimus
              adipisci esse obcaecati? Quod aliquid voluptates dignissimos
              exercitationem.
            </p>
          </article>
        </section>

        <section className="projets">
          <h2>My new projects</h2>
          <article>
            <img
              className="featured-img"
              src="data:image/jpeg;base64,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"
              alt="image développeur"
            />
            <div className="projet-info">
              <h3>here are some of my latest projects</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores delectus et unde deleniti inventore. Esse hic sunt
                sapiente suscipit dicta numquam ad libero sequi, dolorum illo
                quod impedit officiis quos. Neque et ex, cum placeat ad ducimus
                non harum maiores quod voluptates impedit quam magni voluptatum
                labore! Nihil modi necessitatibus tenetur a expedita doloremque
                porro facilis, maiores, odit odio sed! Assumenda nesciunt autem
                deserunt, cum recusandae, aspernatur molestiae cumque eius harum
                rerum esse repellat id voluptatum ipsa voluptatem sint labore
                sed quam voluptates, doloribus illo quod? Distinctio eius nam a.
              </p>
              <div className="btn-link">
                <button className="btn" icon={<LikeOutlined />}>
                  Support my projects
                </button>
              </div>
            </div>
          </article>

          {/* Divider est le trait blanc qui sépare here are some of my latest projects et */}
          <Divider className="separate" />

          {/* le .map et item viennent du (dossier data.js) pour les données dinamiques qui viennent de la base de donnée  */}
          {projects.map((item) => {
            return (
              <>
                <article className="article-item" key={item.id}>
                  <div className="left">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="right">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button
                      className="btn1"
                      type="link"
                      icon={<LinkOutlined />}
                    >
                      learn more
                    </button>
                  </div>
                </article>
              </>
            );
          })}

          <Divider className="separate" />

          <section className="experiences">
            <h2>Professional experience</h2>
            {experience.map((item) => {
              return (
                <>
                  <article key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </>
              );
            })}
          </section>
        </section>
      </div>
      <aside>
        <div className="contacts section">
          <div className="contact-item">
            <EnvironmentOutlined />
            <span>Paris, France</span>
          </div>
          <div className="contact-item">
            <MailOutlined />
            <span>
              <a href="mailto:davidM@hotmail.fr">davidM@hotmail.fr</a>
            </span>
          </div>
          <div className="contact-item">
            <LinkOutlined />
            <span>
              <a href="www.youtube.com">www.youtube.com</a>
            </span>
          </div>
        </div>
        <div className="skills section">
          <h2>skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            natus quam. Similique aliquid nisi, nobis maiores numquam magnam in
            a obcaecati, dolores dolor beatae dolorum blanditiis molestias
            voluptate molestiae nostrum.
          </p>
          <div className="skills-list">
            <div className="skill-item">
              <span>PHP & Laravel</span>
              <div className="full">
                <div className="percent forth"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>React</span>
              <div className="full">
                <div className="percent first"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>HTML & CSS</span>
              <div className="full">
                <div className="percent second"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Javascript</span>
              <div className="full">
                <div className="percent third"></div>
              </div>
            </div>
          </div>
           <button className="btn1" type="link" icon={<LinkOutlined/>}>learn more on GitHub</button>
        </div>
        <div className="section">
            <h2>Languages</h2>
            <div className="languages-Item">
                <h3>French</h3>
                <span>Natif</span>
                <div className="full">
                    <div className="percent"></div>
                </div>
            </div>
            <div className="languages-Item">
                <h3>English</h3>
                <span>B2</span>
                <div className="full">
                    <div className="percent fifth"></div>
                </div>
            </div>
        </div>
      </aside>
    </div>
    // </div>
    //    </>
  );
};

export default AboutMe;

import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3> Frontend Development</h3>

          <div className="exp__content">
            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                <h4> HTML </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                <h4> CSS </h4>
                <small className="text-light"> Experienced </small>{" "}
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> JavaScript </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> Bootstrap </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> ReactJs </h4>
                <small className="text-light"> Experienced </small>{" "}
              </div>
            </article>
            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> NextJs </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> Ant Design </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> Tailwind </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp_backend">
          <h3> Backend Development</h3>

          <div className="exp__content">
            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> NodeJs </h4>
                <small className="text-light"> Experienced </small>{" "}
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                <h4> MongoDB </h4>
                <small className="text-light"> Experienced </small>{" "}
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> MySql </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> Python </h4>
                <small className="text-light"> Experienced </small>{" "}
              </div>
            </article>

            <article className="exp__details">
              <BsFillPatchCheckFill className="exp__icon" />
              <div>
                {" "}
                <h4> Django </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

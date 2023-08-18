import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: " Seamless Integration with PyPSA Earth",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Effortlessly merge PyPSA Earth's capabilities into workflows; promotes
        collaboration, saves time, and simplifies data transfer.
      </>
    ),
  },
  {
    title: "Python-Powered Visualization with Streamlit",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Utilizes Python and Streamlit for user-friendly interface; empowers
        Python-savvy users to modify visualizations swiftly.
      </>
    ),
  },
  {
    title: " Dynamic Visualization of PyPSA Earth Models",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Interactive data visualization across diverse PyPSA Earth models,
        real-time insights for informed decision-making.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import "./Parallax.css";
import HillOne from "../asset/hill1.png";
import HillTwo from "../asset/hill2.png";
import HillThree from "../asset/hill3.png";
import HillFour from "../asset/hill4.png";
import HillFive from "../asset/hill5.png";
import Tree from "../asset/tree.png";
import Leaf from "../asset/leaf.png";
import Plant from "../asset/plant.png";

function ParallaxSection() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigator">
          <a href="#" className="activate">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="parallax">
        <img
          src={HillOne}
          alt=""
          srcSet=""
          style={{ top: `${scrollValue * 1.5}px` }}
          id="hill1"
        />
        <img src={HillTwo} alt="" srcSet="" id="hill2" />
        <img src={HillThree} alt="" srcSet="" id="hill3" />
        <img
          src={HillFour}
          alt=""
          srcSet=""
          style={{ left: `${scrollValue * -1.5}px` }}
          id="hill4"
        />
        <img
          src={HillFive}
          alt=""
          srcSet=""
          style={{ left: `${scrollValue * 1.5}px` }}
          id="hill5"
        />
        <h2 style={{ marginTop: `${scrollValue * 2.5}px` }} id="text">
          Prithwiraj Mohan P M
        </h2>
        <img src={Tree} alt="" srcSet="" id="tree" />
        <img
          src={Leaf}
          alt=""
          srcSet=""
          style={{
            top: `${scrollValue * -1.5}px`,
            left: `${scrollValue * 1.5}px`,
          }}
          id="leaf"
        />
        <img src={Plant} alt="" srcSet="" id="plant" />
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem
        saepe perferendis ipsum, quae quos voluptatum eligendi corporis! Eos
        nobis eligendi assumenda, minima ullam amet! Expedita quos minima ab.
        Voluptates!
      </section>
    </div>
  );
}

export default ParallaxSection;

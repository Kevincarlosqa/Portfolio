import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { memo, useCallback } from "react";

const ParticlesContact = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fps_limit: 60,
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: { enable: true, mode: "repulse" },
            onhover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 2, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
              speed: 3,
            },
            grab: { distance: 400, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#d7dde1" },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            size: true,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: "right",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 160 },
          opacity: {
            anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
            random: true,
            value: 1,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            image: {
              height: 100,
              replace_color: true,
              src: "images/github.svg",
              width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
          },
          size: {
            anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
            random: true,
            value: 1.5,
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: "",
        },
        retina_detect: true,
      }}
    />
  );
};

export default memo(ParticlesContact);

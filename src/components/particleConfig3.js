export default function options() {
  return {
    backgroundMode: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
      },
      number: {
        value: 0,
      },
      collisions: {
        enable: false,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: true,
        },
      },
      size: {
        value: 5,
        random: {
          enable: true,
          minimumValue: 3,
        },
        animation: {
          enable: false,
          speed: 10,
          minimumValue: 0.1,
          sync: true,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 0.5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: false,
        },
        speed: 10,
        direction: "none",
        random: true,
        straight: false,
        outMode: "destroy",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    detectRetina: true,
    background: {},
    emitters: {
      direction: "none",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        delay: 0.1,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };
}

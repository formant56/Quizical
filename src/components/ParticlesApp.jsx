import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import partic2 from "./particleConfig2";
import partic3 from "./particleConfig3";

const ParticlesApp = ({ sele }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  let parobject;
  if (sele == "circles") {
    parobject = partic2();
  } else if (sele == "fireworks") {
    parobject = partic3();
  }
  // useMemo(() => partic());
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={parobject}
    />
  );
};

export default ParticlesApp;

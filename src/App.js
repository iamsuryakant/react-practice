import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import AnimateCursor from './animated/AnimateCursor';



function App() {

  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#3cba54", "#f4c20d", "#db3236", "#4885ed"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);



  return (
    <div className="App">
      <AnimateCursor/>
      <Particles options={options} init={particlesInit} />
      <Navbar/>
      <Home />
      <About />
    </div>
  );
}

export default App;

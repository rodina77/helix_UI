import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import HelixHome from './components/home/helix_home';
import About from './components/about/about';
import Statistics from './components/statistics/statistics';
import Features from './components/features/features';
import Vission from './components/vision_mission/vission';
import How_it_work from './components/how_it_work/how_it_work';
import Footer from './components/footer/footer';
import SimpleMap from './components/maps/maps';
// Define debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const slides = [<HelixHome />, <About />, <Statistics/>,<Features/>,<How_it_work/>,<Vission/>,<SimpleMap/>, <Footer/>];
const totalSlides = slides.length;
const slideHeight = 100; // Change this value as per your requirement
const swipeThreshold = 0.5;
const debounceTime = 140; // Adjust debounce time to prevent rapid index changes

const VerticalSlider = () => {
  const [index, set] = useState(0);
  const [props, setProps] = useSprings(totalSlides, i => ({ y: i * slideHeight }));

  const debouncedSetIndex = debounce(setIndex, debounceTime);

  function setIndex(newIndex) {
    set(newIndex);
  }

  const bind = useGesture({
    onWheel: ({ direction }) => {
      if (direction[1] > swipeThreshold && index < totalSlides - 1) {
        debouncedSetIndex(index + 1);
      } else if (direction[1] < -swipeThreshold && index > 0) {
        debouncedSetIndex(index - 1);
      }
    },
  });

  setProps(i => {
    return {
      y: (i - index) * slideHeight,
      zIndex: i === index ? 1 : 0,
    };
  });

  return (
    <div {...bind()} style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {props.map(({ y, zIndex }, i) => (
        <animated.div
          key={i}
          style={{
            transform: y.to(y => `translate3d(0, ${y}%, 0)`),
            zIndex,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {slides[i]}
        </animated.div>
      ))}
    </div>
  );
};

export default VerticalSlider;

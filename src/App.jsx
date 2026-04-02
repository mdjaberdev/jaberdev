import './App.css'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import ReactLenis from 'lenis/react';



function App () {
  return (
    <>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
      >
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About/>} /> */}
          </Route>
          {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App



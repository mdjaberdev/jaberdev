import './App.css'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import ReactLenis from 'lenis/react';

import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
const Home = lazy(() => import("/src/components/pages/Home"));



function App () {
  return (
    <>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<RootLayouts />}>
              <Route index element={<Home />} />
              {/* <Route path="/about" element={<About/>} /> */}
            </Route>
            {/* <Route path="*" element={<Error/>} /> */}
          </Routes>
        </Suspense>
      </ReactLenis>
    </>
  );
}

export default App



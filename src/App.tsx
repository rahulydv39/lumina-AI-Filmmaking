import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;

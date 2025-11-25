import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TosPixMorph from './pages/TosPixMorph';
import TosColorPalette from './pages/TosColorPalette';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos/pixmorph" element={<TosPixMorph />} />
          <Route path="/tos/color-palette" element={<TosColorPalette />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
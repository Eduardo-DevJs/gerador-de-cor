import React, { useState } from 'react';

const App = () => {
  const [colorRandom, setColorRandom] = useState('#FFFFFF');

  function gerarCorAleatoria() {
    let cor = Math.floor(Math.random() * 16777215).toString(16);

    while (cor.length < 6) {
      cor = '0' + cor;
    }

    let randomColor = '#' + cor;

    setColorRandom(randomColor);
  }

  return (
    <div style={{background: `${colorRandom}`}} className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-5 max-w-3xl">
        <div className="bg-slate-800 p-5 rounded-md text-white">
          <h1 className="font-medium text-4xl max-md:text-base">
            Background Color: {colorRandom}
          </h1>
        </div>
        <button
          onClick={gerarCorAleatoria}
          className="bg-slate-800 border-none text-white font-medium border p-2 max-w-40 rounded"
        >
          Clique em mim
        </button>
      </div>
    </div>
  );
};

export default App;

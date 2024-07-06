import React, { useState, useEffect } from "react";

const dogURL = `https://dog.ceo/api/breeds/image/random`;
const factURL = `https://catfact.ninja/fact`
const catURL = `https://api.thecatapi.com/v1/images/search`
const foxURL = `https://randomfox.ca/floof/`

function App() {
  
  const [dog, setDog] = useState(null);
  const [cat, setCat] = useState(null);
  const [fact, setFact] = useState(null);
  const [fox, setFox] = useState(null);

  const fetchDog = async () => {
    const result = await fetch(dogURL);
    const json = await result.json();
    setDog(json.message);
  };

  const fetchFact = async () => {
    const result = await fetch(factURL);
    const json = await result.json()
    setFact(json.fact)
  }

  const fetchCat = async () => {
    const result = await fetch(catURL);
    const json = await result.json()
    setCat(json[0].url)
  }

  const fetchFox = async () => {
    const result = await fetch(foxURL);
    const json = await result.json()
    setFox(json.image)
  }

  useEffect(() => {
    fetchDog();
    fetchFact();
    fetchCat();
    fetchFox();
  }, []);


return (
  <>

    <div className="content-center">

      <header className="text-center">
        <h1 className="text-2xl py-4 font-mono font-extrabold">Animal Things!</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 justify-center items-center overflow-hidden bg-slate-600 rounded-md">
        <img src={dog} alt="doges" className="object-scale-down max-w-[300px] max-h-[300px] min-h-[300px] mx-auto"/>
        <img src={cat} alt="big cat!" className="object-scale-down max-w-[300px] max-h-[300px] min-h-[300px] mx-auto"/>
        <img src={fox} alt="fox!" className="object-scale-down max-w-[300px] max-h-[300px] min-h-[300px] mx-auto"/>
      </div>

      <div className="text-center my-5 font-mono mx-8">
        <p>{fact}</p>
      </div>

      <span></span>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-12 py-4 bg-slate-400 rounded-md mx-8">
        <button onClick={fetchDog} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Random Dog!</button>
        <button onClick={fetchFact} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Random Animal Fact!</button>
        <button onClick={fetchCat} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Random Cat!</button>
        <button onClick={fetchFox} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Random Fox!</button>
      </div>
    
    </div>
  
  </>
);
}

export default App;

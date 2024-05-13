import React, { useState } from 'react';

function App() {
  const [springExtension, setSpringExtension] = useState<Number>();

  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    const k = 48.9;
    const m = 0.0117;
    const angle = Number(formJson.angle) * Math.PI / 180.0;
    const distanceX = Number(formJson.distanceX);
    const distanceY = Number(formJson.distanceY);

    const x = Math.sqrt((-4.9 * m * Math.pow(distanceX, 2))/(k * Math.pow(Math.cos(angle), 2) * (distanceY - (Math.tan(angle) * distanceX))));

    setSpringExtension(x * 100); 
  }

  return (
    <div className="grid gap-4 place-content-center h-screen bg-slate-900 text-white">
      <img className="absolute bottom-0 right-0 h-full w-full" src="space.avif" alt="bongo cat gif"/>
      <div className="h-full w-full p-10 z-10 bg-opacity-30 rounded-lg bg-white">
      <div className="flex justify-center">
        <h1 className="text-xl font-semibold">Spring Launcher Calculator</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <p>Angle</p>
          <input required type="number" name="angle" className="bg-gray-100 h-8 w-full rounded-md" step="any"/>
        </div>
        <div className="py-2">
          <p>Distance - Horizontal</p>
          <input required type="number" name="distanceX" className="bg-gray-100 h-8 w-full rounded-md" step="any"/>
        </div>
        <div className="py-2">
          <p>Distance - Vertical</p>
          <input required type="number" name="distanceY" className="bg-gray-100 h-8 w-full rounded-md" step="any"/>
        </div>
        <div className="flex gap-2 pt-6">
          <button type="reset" className="bg-gray-200 text-black rounded-md w-full">Reset</button>
          <button type="submit" className="bg-blue-600 rounded-md w-full">Submit</button>
        </div>
      </form>
      <div>
        {springExtension !== undefined ? " Spring Extension: " + parseFloat(springExtension.toString()).toFixed(2) + "cm" : null}
      </div>
      </div>
      <img className="absolute h-3/5" src="cat-nyan-cat.gif" alt="nyan cat gif"/>
      <img className="absolute bottom-0 right-0 h-3/5" src="bongo-cat.gif" alt="bongo cat gif"/>
    </div>
  );
}

export default App;

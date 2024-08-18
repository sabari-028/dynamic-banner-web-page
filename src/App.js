import React, { useState } from "react";
import Banner from "./components/Banner";
import Dashboard from "./components/dashboard";

function App() {
  const [bannerProps, setBannerProps] = useState({
    isVisible: true,
    description: "Welcome to our site!",
    timer: 50,
    link: " ",
  });

  return (
    <div className="App">
      <header>
        <h1>Dynamic  Website</h1>
      </header>
      <main>
        <Banner {...bannerProps} />
        <Dashboard setBannerProps={setBannerProps} />
      </main>
      <footer>
        <p>©  Banner Project website</p>
      </footer>
    </div>
  );
}

export default App;

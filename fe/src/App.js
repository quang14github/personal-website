import React, { useEffect, useState } from "react";
import LoadingScreen from "Components/LoadingScreen";
import Hero from "Components/Hero";
import About from "Components/About";
import Portfolio from "Components/Portfolio";
import Contact from "Components/Contact";
import Footer from "Components/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 3500);
    return () => {
      clearTimeout(timer);
    };
  });
  let loadingScreen = loading ? <LoadingScreen /> : null;
  return (
    <div className="App">
      {loadingScreen}
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

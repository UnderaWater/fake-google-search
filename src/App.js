import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Paths from "./components/Paths";

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-zinc-800 dark:text-gray-200 min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Paths />
        <Footer />
      </div>
    </div>
  );
}

export default App;

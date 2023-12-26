import "./styles.css";

import Search from "./Search";

import Footer from "./Footer";
import Weather from "./Weather";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <Search />
        <main>
          <div class="current-weather">
            <Weather />
            <Temperature />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

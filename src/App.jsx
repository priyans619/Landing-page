import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <div className="bg-[#0e0e0e]">
        <Navbar />
        <div className="space-y-10 md:space-y-20">
        <Home />
       </div>
    </div>
  );
}

export default App;
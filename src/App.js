import "./assets/css/style.css";
import JadwalSholat from "./components/JadwalSholat";
import Jam from "./components/Jam";
// import Content from "./components/Content";

// function standar
// function App() {

//arrow function
const App = () => {
  // document.body.classList.add("bg-slate-200");
  return (
    <div className="main relative h-screen top-0 right-0 bottom-0 z-0 left-0 bg-gradient-to-r from-indigo-400 via-blue-400 to-blue-700">
      {/* <div className="content relative p-4 backdrop-opacity-10 bg-white/5 h-screen"> */}
      <div className="fixed circle w-96 h-96 bg-blue-700 z-10 rounded-full -top-32 -left-32"></div>
      <div className="fixed circle w-96 h-96 bg-blue-700 z-20 rounded-full -bottom-32 -right-7"></div>
      {/* <div className="fixed circle w-96 h-96 bg-blue-500 -z-10 rounded-full -bottom-32 -right-32"></div> */}
      <div className="fixed z-30 rounded-box top-8 bottom-8 right-8 left-8 bg-white bg-opacity-40 backdrop-blur-lg p-5">
        <header className="text-center main-title">
          <h1 className="text-cyan-900 text-4xl uppercase tracking-widest font-sans font-extrabold">
            Masjid Arrahmah
          </h1>
        </header>
        <section></section>
        <section className="fixed bottom-4 right-4 left-4 mx-auto z-30">
          <Jam />
          <JadwalSholat className="self-center" />
        </section>
      </div>
      {/* </div> */}
    </div>
  );
};

export default App;

import "./assets/css/style.css";
import JadwalSholat from "./components/JadwalSholat";
// import Content from "./components/Content";

// function standar
// function App() {

//arrow function
const App = () => {
  // document.body.classList.add("bg-slate-200");
  return (
    <div className="content relative p-4 backdrop-opacity-10 bg-white/5">
      <header></header>
      <section></section>
      section jadwal sholat
      <section className="absolute bottom-4 right-4 left-4 mx-auto z-10">
        <JadwalSholat className="self-center" />
      </section>
    </div>
  );
};

export default App;

// ini adalah contoh kasus functional components
const JadwalSholat = () => {
  return (
    <div className="kotak-jadwal grid w-full grid-cols-6 gap-0">
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out">
        <figure>
          <img
            src={require("../assets/img/img-cover/shubuh.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body font-bold">
          <h1 className="card-title text-2xl justify-center">Subuh</h1>
          <h1 className="justify-center text-5xl text-center font-extrabold">
            17:30
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out">
        <figure>
          <img src={require("../assets/img/img-cover/dhuha.jpg")} alt="Shoes" />
        </figure>
        <div className="card-body font-bold">
          <h1 className="card-title text-2xl justify-center">Dhuha</h1>
          <h1 className="justify-center text-5xl text-center font-extrabold">
            17:30
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out">
        <figure>
          <img
            src={require("../assets/img/img-cover/dzuhur.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body font-bold">
          <h1 className="card-title text-2xl justify-center">Dzuhur</h1>
          <h1 className="justify-center text-5xl text-center font-extrabold">
            17:30
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out">
        <figure>
          <img src={require("../assets/img/img-cover/ashar.jpg")} alt="Shoes" />
        </figure>
        <div className="card-body font-bold">
          <h1 className="card-title text-2xl justify-center">Ashar</h1>
          <h1 className="justify-center text-5xl text-center font-extrabold">
            17:30
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out">
        <figure>
          <img
            src={require("../assets/img/img-cover/maghrib.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body font-bold">
          <h1 className="card-title text-2xl justify-center">Maghrib</h1>
          <h1 className="justify-center text-5xl text-center font-extrabold">
            17:30
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out">
        <figure>
          <img src={require("../assets/img/img-cover/isya.jpg")} alt="Shoes" />
        </figure>
        <div className="card-body font-bold text-center justify-center">
          <h1 className="card-title text-2xl justify-center">Isya'</h1>
          <h1 className="justify-center text-5xl text-center font-extrabold">
            17:30
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;

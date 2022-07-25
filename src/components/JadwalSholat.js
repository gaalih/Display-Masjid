// ini adalah contoh kasus functional components
import React, { useState, useEffect } from "react";
import axios from "axios";

const JadwalSholat = () => {
  const [getJadwalSholat, setJadwalSholat] = useState([]);
  const [getHariHijriyah, setHariHijriyah] = useState([]);
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const current = new Date();

  const date_number = `${current.getFullYear()}-${(
    "0" +
    (current.getMonth() + 1)
  ).slice(-2)}-${current.getDate()} `;

  const date = `${current.getDate()} ${
    months[current.getMonth() + 1]
  } ${current.getFullYear()}`;

  const kodeKota = 680;

  const getWaktu = async () => {
    const jadwalSholat = await fetch(
      "https://api.banghasan.com/sholat/format/json/jadwal/kota/" +
        kodeKota +
        "/tanggal/" +
        date_number
    );
    const value = await jadwalSholat.json();
    const status = value.status;
    const result = value.jadwal.data;
    setJadwalSholat(result);
    return result;
    // console.log(status);
    // console.log(result);
  };

  const getHijriyah = async () => {
    const dateToHijriyah = `${current.getDate()}-${current.getMonth()}-${current.getFullYear()}`;
    // const hijriyah = await fetch(
    //   "https://api.flagodna.com/hijriyah/api/" + dateToHijriyah,
    //   { mode: "cors" }
    // );

    // const result = await hijriyah.json();
    // setHariHijriyah(result);
    // console.log(result);
    // return result;

    axios
      .get("https://api.flagodna.com/hijriyah/api/" + dateToHijriyah)
      .then((response) => {
        setHariHijriyah(response);
        return response;
      });
  };

  useEffect(() => {
    getWaktu();
    getHijriyah();
  }, []);

  return (
    <div className="kotak-jadwal grid w-full grid-cols-7 gap-0 ">
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/imsak.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 p-1 pb-5 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Imsak</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {/* {getHariHijriyah.tanggal_hijriyah} */}
            {getJadwalSholat.imsak}
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/shubuh.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 p-1 pb-5 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Subuh</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {getJadwalSholat.subuh}
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/dhuha.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 p-1 pb-5 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Dhuha</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {getJadwalSholat.dhuha}
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/dzuhur.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 p-1 pb-5 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Dzuhur</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {getJadwalSholat.dzuhur}
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/ashar.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 p-1 pb-5 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Ashar</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {getJadwalSholat.ashar}
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/maghrib.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Maghrib</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {getJadwalSholat.maghrib}
          </h1>
        </div>
      </div>
      {/* waktu       */}
      <div className="card bg-base-100 shadow-xl scale-75 hover:scale-100 transition duration-500 ease-in-out h-60">
        <figure>
          <img
            className="w-full h-32"
            src={require("../assets/img/img-cover/isya.jpg")}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 py-3 text-cyan-900 font-bold">
          <h1 className="card-title text-1xl justify-center">Isya'</h1>
          <h1 className="justify-center text-4xl text-center font-extrabold">
            {getJadwalSholat.isya}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JadwalSholat;

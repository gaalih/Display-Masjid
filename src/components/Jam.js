import React from "react";

class Jam extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() }; // initialise the state
  }

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    const { time } = this.state; // retrieve the time from state

    var hari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];

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
    const date_number = `${current.getDate()}-${(
      "0" +
      (current.getMonth() + 1)
    ).slice(-2)}-${current.getFullYear()}`;
    const date = `${hari[current.getDay()]}, ${current.getDate()} ${
      months[current.getMonth()]
    } ${current.getFullYear()}`;

    return (
      <div className="fixed top-24 left-11">
        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <h1 className="card-title text-3xl font-extrabold text-cyan-900 text-center">
              {time.toLocaleTimeString()}
            </h1>
          </div>
        </div>
        <p className="text-1xl font-bold text-cyan-900 text-center mt-2 tracking-widest">
          {date}
        </p>
        <p className="text-2xl font-bold text-white text-center mt- tracking-widest">
          {date}
        </p>
      </div>
    );
  }
}

export default Jam;

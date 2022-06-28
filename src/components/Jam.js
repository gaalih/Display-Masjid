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
    const date = `${current.getDate()} ${
      months[current.getMonth() + 1]
    } ${current.getFullYear()}`;

    return (
      <div className="fixed top-36 left-11">
        <div class="card w-64 bg-base-100 shadow-xl">
          <div class="card-body">
            <h1 class="card-title text-3xl font-extrabold text-cyan-900 text-center">
              {time.toLocaleTimeString()}
            </h1>
          </div>
        </div>
        <p className="text-1xl font-bold text-cyan-900 text-center mt-3">
          {date}
        </p>
      </div>
    );
  }
}

export default Jam;

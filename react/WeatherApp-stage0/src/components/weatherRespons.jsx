import React from 'react';

class WeatherResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onAddFavorite();
    this.setState(state => ({ favorite: !state.favorite }));
  }

  render() {
    const { report } = this.props;
    return (
      <div className="card border-info m-3" style={{ width: '20rem' }}>
        <div className="card-body">
          <h4 className="card-title">{`${report.name}: `}</h4>
          <p className="card-text">{report.weather[0].description}</p>
          <p>
            {`Температура: ${report.main.temp}°C, ветер ${report.wind.speed} м/с,
            облачность ${report.clouds.all}%, давление ${report.main.pressure} гПа`}
          </p>
          <button
            className="btn btn-outline-info btn-sm mt-1"
            type="button"
            onClick={this.handleClick}
            disabled={this.state.favorite}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default WeatherResponse;

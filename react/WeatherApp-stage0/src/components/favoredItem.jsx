import React from 'react';

function WeatherFavoredItem(props) {
  const { report } = props;
  return (
    <div className="card border-info m-3" style={{ width: '20rem' }}>
      <div className="card-body">
        <h4 className="card-title">{`${report.name}: `}</h4>
        <p className="card-text">{report.weather[0].description}</p>
        <p>
          {`Температура: ${report.main.temp}°C, ветер ${report.wind.speed} м/с,
          облачность ${report.clouds.all}%, давление ${report.main.pressure} гПа`}
        </p>
      </div>
    </div>
  );
}

export default WeatherFavoredItem;

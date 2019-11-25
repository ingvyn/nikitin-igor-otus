import React from 'react';
import ReactDOM from 'react-dom';
import weatherReportArray from './components/weatherReqs';
import WeatherResponse from './components/weatherRespons';
import FavoredList from './components/favoredList';

class WeatherSearchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredValue: '',
      display: '',
      weatherRep: undefined,
      isError: false,
      favoriteList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
  }

  handleRequest() {
    const isFound = weatherReportArray
      .map(item => item.name)
      .indexOf(this.state.enteredValue);
    if (isFound == -1) {
      this.setState({ isError: true });
      return;
    }
    this.setState({ weatherRep: weatherReportArray[isFound] });
  }

  handleChange(event) {
    this.setState({
      enteredValue: event.target.value,
      display: event.target.value,
      weatherRep: undefined,
      isError: false
    });
  }

  handleSubmit(event) {
    this.setState({ display: '' });
    this.handleRequest();
    event.preventDefault();
  }

  handleAddFavorite() {
    this.setState(state => ({
      favoriteList: [...state.favoriteList, state.weatherRep],
      weatherRep: undefined
    }));
  }

  render() {
    return (
      <div className="container">
        <form className="m-2" onSubmit={this.handleSubmit}>
          <input
            type="text"
            width="16rem"
            value={this.state.display}
            placeholder="Ваш город"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </form>
        {this.state.isError && (
          <div>
            <h4>Ошибка</h4>
            <p>Данных нет</p>
          </div>
        )}
        {!this.state.isError && this.state.weatherRep && (
          <div>
            <WeatherResponse
              report={this.state.weatherRep}
              onAddFavorite={this.handleAddFavorite}
            />
          </div>
        )}
        {this.state.favoriteList.length !== 0 && (
          <FavoredList itemList={this.state.favoriteList} />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<WeatherSearchControl />, rootElement);

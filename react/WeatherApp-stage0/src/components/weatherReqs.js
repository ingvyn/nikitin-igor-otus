var req =
  'http://api.openweathermap.org/data/2.5/weather?q=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&lang=ru&units=metric&APPID=6921de21435abd7312d2a739eca5fe7a';
var weatherReportArray = [
  {
    coord: { lon: 37.62, lat: 55.75 },
    weather: [
      { id: 600, main: 'Snow', description: 'небольшой снег', icon: '13d' }
    ],
    base: 'stations',
    main: {
      temp: -7.7,
      pressure: 1048,
      humidity: 78,
      temp_min: -8,
      temp_max: -7
    },
    visibility: 10000,
    wind: { speed: 4, deg: 170 },
    clouds: { all: 75 },
    dt: 1574324973,
    sys: {
      type: 1,
      id: 9029,
      country: 'RU',
      sunrise: 1574313359,
      sunset: 1574342093
    },
    timezone: 10800,
    id: 524901,
    name: 'Москва',
    cod: 200
  },
  {
    coord: { lon: 73.37, lat: 54.99 },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'облачно с прояснениями',
        icon: '04n'
      }
    ],
    base: 'stations',
    main: {
      temp: -7,
      pressure: 1031,
      humidity: 85,
      temp_min: -7,
      temp_max: -7
    },
    visibility: 10000,
    wind: { speed: 3, deg: 100 },
    clouds: { all: 75 },
    dt: 1574680851,
    sys: {
      type: 1,
      id: 8960,
      country: 'RU',
      sunrise: 1574650586,
      sunset: 1574679036
    },
    timezone: 21600,
    id: 1496153,
    name: 'Омск',
    cod: 200
  },
  {
    coord: { lon: 60.61, lat: 56.84 },
    weather: [
      { id: 600, main: 'Snow', description: 'небольшой снег', icon: '13d' }
    ],
    base: 'stations',
    main: {
      temp: -5,
      pressure: 1030,
      humidity: 92,
      temp_min: -5,
      temp_max: -5
    },
    visibility: 10000,
    wind: { speed: 2, deg: 160 },
    clouds: { all: 90 },
    dt: 1574681160,
    sys: {
      type: 1,
      id: 8985,
      country: 'RU',
      sunrise: 1574654260,
      sunset: 1574681489
    },
    timezone: 18000,
    id: 1486209,
    name: 'Екатеринбург',
    cod: 200
  },
  {
    coord: { lon: 33.08, lat: 68.97 },
    weather: [
      { id: 620, main: 'Snow', description: 'небольшой снегопад', icon: '13n' }
    ],
    base: 'stations',
    main: {
      temp: -1,
      pressure: 1010,
      humidity: 92,
      temp_min: -1,
      temp_max: -1
    },
    visibility: 5000,
    wind: { speed: 3, deg: 230 },
    clouds: { all: 75 },
    dt: 1574681276,
    sys: {
      type: 1,
      id: 8927,
      country: 'RU',
      sunrise: 1574669621,
      sunset: 1574679345
    },
    timezone: 10800,
    id: 524305,
    name: 'Мурманск',
    cod: 200
  },
  {
    coord: { lon: 131.89, lat: 43.12 },
    weather: [{ id: 800, main: 'Clear', description: 'ясно', icon: '01n' }],
    base: 'stations',
    main: {
      temp: -11,
      pressure: 1035,
      humidity: 66,
      temp_min: -11,
      temp_max: -11
    },
    visibility: 10000,
    wind: { speed: 2, deg: 350 },
    clouds: { all: 0 },
    dt: 1574681664,
    sys: {
      type: 1,
      id: 8885,
      country: 'RU',
      sunrise: 1574633804,
      sunset: 1574667724
    },
    timezone: 36000,
    id: 2013348,
    name: 'Владивосток',
    cod: 200
  },
  {
    coord: { lon: 30.32, lat: 59.94 },
    weather: [
      { id: 804, main: 'Clouds', description: 'пасмурно', icon: '04d' }
    ],
    base: 'stations',
    main: {
      temp: -3.58,
      pressure: 1024,
      humidity: 73,
      temp_min: -5,
      temp_max: -1.67
    },
    visibility: 10000,
    wind: { speed: 2, deg: 150 },
    clouds: { all: 96 },
    dt: 1574681513,
    sys: {
      type: 1,
      id: 8926,
      country: 'RU',
      sunrise: 1574662759,
      sunset: 1574687532
    },
    timezone: 10800,
    id: 498817,
    name: 'Санкт-Петербург',
    cod: 200
  }
];

export default weatherReportArray;

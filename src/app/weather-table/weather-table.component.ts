import { Component, OnInit, OnChanges } from '@angular/core';

import { WeatherService } from '../weather.service';
import { interval } from 'rxjs/observable/interval';

const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss'],
  providers: []
})

export class WeatherTableComponent implements OnChanges, OnInit {

  currentTime = Date.now();
  private _3HrsDateTime = (new Date(this.currentTime + 10800000));
  private _9HrsDateTime = (new Date(this.currentTime + 32400000));
  private _15HrsDateTime = (new Date(this.currentTime + 54000000));

  private _3HrsTime: string = '';
  private _9HrsTime: string = '';
  private _15HrsTime: string = '';

  fiveDayForecast: any;
  currentWeather: any = {};
  sunRise: any;
  sunRise2: any;
  sunRise3: any;
  sunRise4: any;
  sunRise5: any;
  sunRise6: any;
  geolocationPosition: number;
  private abbreviatedCountry: string = '';
  private country: string = '';
  private isC: boolean = true;
  private isKM: boolean = true;
  private counter: number = 0;
  private counter2: number = 0;
  private isDayTimeNow: boolean = false;
  private isDayTime3hrs: boolean = false;
  private isDayTime9hrs: boolean = false;
  private isDayTime15hrs: boolean = false;

  private sunrise1Milli: number = 0;
  private sunset1Milli: number = 0;
  private _3HrsTimeMilli: number = 0;
  private _9HrsTimeMilli: number = 0;
  private _15HrsTimeMilli: number = 0;

  private currentDayTimeMilli: number = 0;



  constructor(private _weatherService: WeatherService) {
    this.updateTime();
  }

  ngOnChanges() {
    this.ngOnInit();
    console.log("changes caught");
  }



  ngOnInit() {

    // Using a hack job to solve the issue with the API passing data to local storage after the DOM gets populated with null data
    let y = '';
    let t = '';
    let s = '';
    let s2 = '';
    let s3 = '';
    let s4 = '';
    let s5 = '';
    let s6 = '';


    setTimeout(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y),

      this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s),

      this._weatherService.sunriseSunset,
      s2 = localStorage.getItem("sunriseSunsetTomorrow"),
      this.sunRise2 = JSON.parse(s2),

      this._weatherService.sunriseSunset3,
      s3 = localStorage.getItem("sunriseSunsetPlus2days"),
      this.sunRise3 = JSON.parse(s3),

      this._weatherService.sunriseSunset4,
      s4 = localStorage.getItem("sunriseSunsetPlus3days"),
      this.sunRise4 = JSON.parse(s4),

      this._weatherService.sunriseSunset5,
      s5 = localStorage.getItem("sunriseSunsetPlus4days"),
      this.sunRise5 = JSON.parse(s5),

      this._weatherService.sunriseSunset6,
      s6 = localStorage.getItem("sunriseSunsetPlus5days"),
      this.sunRise6 = JSON.parse(s6))

      , 3000);

    setInterval(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y),

      this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s),

      this._weatherService.sunriseSunset2,
      s2 = localStorage.getItem("sunriseSunsetTomorrow"),
      this.sunRise2 = JSON.parse(s2),

      this._weatherService.sunriseSunset3,
      s3 = localStorage.getItem("sunriseSunsetPlus2days"),
      this.sunRise3 = JSON.parse(s3),

      this._weatherService.sunriseSunset4,
      s4 = localStorage.getItem("sunriseSunsetPlus3days"),
      this.sunRise4 = JSON.parse(s4),

      this._weatherService.sunriseSunset5,
      s5 = localStorage.getItem("sunriseSunsetPlus4days"),
      this.sunRise5 = JSON.parse(s5),

      this._weatherService.sunriseSunset6,
      s6 = localStorage.getItem("sunriseSunsetPlus5days"),
      this.sunRise6 = JSON.parse(s6))
      , 7500);

    setInterval(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y),

      this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s),

      this._weatherService.sunriseSunset2,
      s2 = localStorage.getItem("sunriseSunsetTomorrow"),
      this.sunRise2 = JSON.parse(s2),

      this._weatherService.sunriseSunset3,
      s3 = localStorage.getItem("sunriseSunsetPlus2days"),
      this.sunRise3 = JSON.parse(s3),

      this._weatherService.sunriseSunset4,
      s4 = localStorage.getItem("sunriseSunsetPlus3days"),
      this.sunRise4 = JSON.parse(s4),

      this._weatherService.sunriseSunset5,
      s5 = localStorage.getItem("sunriseSunsetPlus4days"),
      this.sunRise5 = JSON.parse(s5),

      this._weatherService.sunriseSunset6,
      s6 = localStorage.getItem("sunriseSunsetPlus5days"),
      this.sunRise6 = JSON.parse(s6))
      , 12500);

    this._weatherService.currentLocalWeather;
    t = localStorage.getItem("currentWeather");
    this.currentWeather = JSON.parse(t);

    this._weatherService.fiveDayForecast;
    y = localStorage.getItem("forecastWeather");
    this.fiveDayForecast = JSON.parse(y);

    this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s);

    this._weatherService.sunriseSunset2,
      s2 = localStorage.getItem("sunriseSunsetTomorrow"),
      this.sunRise2 = JSON.parse(s2);

    this._weatherService.sunriseSunset3,
      s3 = localStorage.getItem("sunriseSunsetPlus2days"),
      this.sunRise3 = JSON.parse(s3);

    this._weatherService.sunriseSunset4,
      s4 = localStorage.getItem("sunriseSunsetPlus3days"),
      this.sunRise4 = JSON.parse(s4);

    this._weatherService.sunriseSunset5,
      s5 = localStorage.getItem("sunriseSunsetPlus4days"),
      this.sunRise5 = JSON.parse(s5);

    this._weatherService.sunriseSunset6,
      s6 = localStorage.getItem("sunriseSunsetPlus5days"),
      this.sunRise6 = JSON.parse(s6);

    setTimeout(() => (

      this.userLocationAdd()
      , 1000));

    let patt1 = /[AP]/g;

    // find current time for the day in milliseconds
    let currentDayTime = (new Date(this.currentTime)).toString().slice(16, 24).split(":");
    this.currentDayTimeMilli = (parseInt(currentDayTime[0]) * 3600000) + (parseInt(currentDayTime[1]) * 60000) + (parseInt(currentDayTime[2]) * 100);


    // find sunrise time in milliseconds for today
    let sunrise1 = (this.sunRise.results.sunrise).split(patt1);
    let sunrise1Nums = sunrise1[0];
    let sunrise1MilliArr = sunrise1Nums.split(':');
    this.sunrise1Milli = (sunrise1MilliArr[0] * 3600000) + (sunrise1MilliArr[1] * 60000) + (sunrise1MilliArr[2] * 100);


    // find sunset time in milliseconds for today
    let sunset1 = (this.sunRise.results.sunset).split(patt1);
    let sunset1Nums = sunset1[0].trim();
    let sunset1MilliArr = sunset1Nums.split(':');
    let b = [];
    for( var i = 0; i < sunset1MilliArr.length; i++) {
      b[i] = parseInt(sunset1MilliArr[i]);
    }
    this.sunset1Milli = ((b[0]+12) * 3600000) + (b[1] * 60000) + (b[2] * 100);


    // Find time of the day in milliseconds + 3 Hrs
    this._3HrsTime = this._3HrsDateTime.toString().slice(16, 24);
    let _3HrsTimeMilliNum = this._3HrsTime.toString();
    let _3HrsTimeMilliArr = _3HrsTimeMilliNum.split(':');
    // console.log()
    this._3HrsTimeMilli = (parseInt(_3HrsTimeMilliArr[0]) * 3600000) + (parseInt(_3HrsTimeMilliArr[1]) * 60000) + (parseInt(_3HrsTimeMilliArr[2]) * 100);


    // Find time of the day in milliseconds + 9 Hrs
    this._9HrsTime = this._9HrsDateTime.toString().slice(16, 24);
    let _9HrsTimeMilliNum = this._9HrsTime.toString();
    let _9HrsTimeMilliArr = _9HrsTimeMilliNum.split(':');
    this._9HrsTimeMilli = (parseInt(_9HrsTimeMilliArr[0]) * 3600000) + (parseInt(_9HrsTimeMilliArr[1]) * 60000) + (parseInt(_9HrsTimeMilliArr[2]) * 100);


    // Find time of the day in milliseconds + 15 Hrs
    this._15HrsTime = this._15HrsDateTime.toString().slice(16, 24);
    let _15HrsTimeMilliNum = this._15HrsTime.toString();
    let _15HrsTimeMilliArr = _15HrsTimeMilliNum.split(':');
    this._15HrsTimeMilli = (parseInt(_15HrsTimeMilliArr[0]) * 3600000) + (parseInt(_15HrsTimeMilliArr[1]) * 60000) + (parseInt(_15HrsTimeMilliArr[2]) * 100);

    this.isNightorDayNow();
    this.isNightorDay3Hrs();
    this.isNightorDay9Hrs();
    this.isNightorDay15Hrs();
  }

  updateTime() {
    const getAPIInterval = interval(60000);
    getAPIInterval.subscribe(val => this.currentTime = Date.now());
  }

  userLocationAdd() {
    this.abbreviatedCountry = this.currentWeather.sys.country;

    switch (this.abbreviatedCountry) {
      case 'AF':
        this.country = 'Afghanistan';
        break;
      case 'AL':
        this.country = 'Albania';
        break;
      case 'DZ':
        this.country = 'Algeria';
        break;
      case 'AS':
        this.country = 'American Samoa';
        break;
      case 'AD':
        this.country = 'Andorra';
        break;
      case 'AO':
        this.country = 'Angolla';
        break;
      case 'AI':
        this.country = 'Anguilla';
        break;
      case 'AQ':
        this.country = 'Antarctica';
        break;
      case 'AG':
        this.country = 'Antigua and Barbuda';
        break;

      case 'AR':
        this.country = 'Argentina';
        break;
      case 'AM':
        this.country = 'Armenia';
        break;
      case 'AW':
        this.country = 'Aruba';
        break;
      case 'AU':
        this.country = 'Australia';
        break;
      case 'AT':
        this.country = 'Austria';
        break;
      case 'AZ':
        this.country = 'Azerbaijan';
        break;
      case 'BS':
        this.country = 'Bahamas';
        break;
      case 'BH':
        this.country = 'Bahrain';
        break;
      case 'BD':
        this.country = 'Bangladesh';
        break;

      case 'BY':
        this.country = 'Belarus';
        break;
      case 'BE':
        this.country = 'Belgium';
        break;
      case 'BZ':
        this.country = 'Belize';
        break;
      case 'BM':
        this.country = 'Bermuda';
        break;
      case 'BT':
        this.country = 'Bhutan';
        break;
      case 'BO':
        this.country = 'Bolivia';
        break;
      case 'BA':
        this.country = 'Bosnia and Herzegovina';
        break;
      case 'BW':
        this.country = 'Botswana';
        break;
      case 'BV':
        this.country = 'Bouvet Island';
        break;

      case 'BR':
        this.country = 'Brazil';
        break;
      case 'IO':
        this.country = 'British Indian Ocean Territory';
        break;
      case 'BN':
        this.country = 'Brunei Darussalam';
        break;
      case 'BG':
        this.country = 'Bulgaria';
        break;
      case 'BF':
        this.country = 'Burkina Faso';
        break;
      case 'BI':
        this.country = 'Burundi';
        break;
      case 'KH':
        this.country = 'Cambodia';
        break;
      case 'CA':
        this.country = 'Canada';
        break;
      case 'CV':
        this.country = 'Cape Verde';
        break;

      case 'KY':
        this.country = 'Cayman Islands';
        break;
      case 'CF':
        this.country = 'Central African Republic';
        break;
      case 'TD':
        this.country = 'Chad';
        break;
      case 'CL':
        this.country = 'Chile';
        break;
      case 'CN':
        this.country = 'China';
        break;
      case 'CX':
        this.country = 'Chrismas Island';
        break;
      case 'CC':
        this.country = 'Cocos (Keeling) Islands';
        break;
      case 'CO':
        this.country = 'Colombia';
        break;
      case 'KM':
        this.country = 'Comoros';
        break;

      case 'CG':
        this.country = 'Congo';
        break;
      case 'CD':
        this.country = 'Congo, The Democratic Republic of';
        break;
      case 'CK':
        this.country = 'Cook Islands';
        break;
      case 'CR':
        this.country = 'Costa Rica';
        break;
      case 'CI':
        this.country = "Côte D'Ivoire";
        break;
      case 'HR':
        this.country = 'Croatia';
        break;
      case 'CU':
        this.country = 'Cuba';
        break;
      case 'CY':
        this.country = 'Cyprus';
        break;
      case 'CZ':
        this.country = 'Czech Republic';
        break;

      case 'DK':
        this.country = 'Denmark';
        break;
      case 'BDJ':
        this.country = 'Djibouti';
        break;
      case 'DM':
        this.country = 'Dominica';
        break;
      case 'DO':
        this.country = 'Dominican Republic';
        break;
      case 'EC':
        this.country = 'Ecuador';
        break;
      case 'EG':
        this.country = 'Egypt';
        break;
      case 'SV':
        this.country = 'El Salvador';
        break;
      case 'GQ':
        this.country = 'Equatorial Guinea';
        break;
      case 'ER':
        this.country = 'Eritrea';
        break;

      case 'EE':
        this.country = 'Estonia';
        break;
      case 'ET':
        this.country = 'Ethiopia';
        break;
      case 'FK':
        this.country = 'Falkland Islands';
        break;
      case 'FO':
        this.country = 'Faroe Islands';
        break;
      case 'FJ':
        this.country = 'Fiji';
        break;
      case 'GF':
        this.country = 'French Guiana';
        break;
      case 'PF':
        this.country = 'French Polynesia';
        break;
      case 'TF':
        this.country = 'French Southern Territories';
        break;
      case 'GA':
        this.country = 'Gabon';
        break;

      case 'GM':
        this.country = 'Gambia';
        break;
      case 'GE':
        this.country = 'Georgia';
        break;
      case 'DE':
        this.country = 'Germany';
        break;
      case 'GH':
        this.country = 'Ghana';
        break;
      case 'GI':
        this.country = 'Gibraltar';
        break;
      case 'GR':
        this.country = 'Greece';
        break;
      case 'GL':
        this.country = 'Greenland';
        break;
      case 'GD':
        this.country = 'Grenada';
        break;
      case 'GP':
        this.country = 'Guadeloupe';
        break;

      case 'GU':
        this.country = 'Guam';
        break;
      case 'GT':
        this.country = 'Guatemala';
        break;
      case 'FGN':
        this.country = 'Guinea';
        break;
      case 'GW':
        this.country = 'Guinea-Bissau';
        break;
      case 'GY':
        this.country = 'Guyana';
        break;
      case 'HT':
        this.country = 'Haiti';
        break;
      case 'HM':
        this.country = 'Heard Island and McDonald Islands';
        break;
      case 'HN':
        this.country = 'Honduras';
        break;
      case 'HK':
        this.country = 'Hong Kong';
        break;

      case 'HU':
        this.country = 'Hungary';
        break;
      case 'IS':
        this.country = 'Iceland';
        break;
      case 'IN':
        this.country = 'India';
        break;
      case 'ID':
        this.country = 'Indonesia';
        break;
      case 'IR':
        this.country = 'Iran, Islamic Republic of';
        break;
      case 'IQ':
        this.country = 'Iraq';
        break;
      case 'IE':
        this.country = 'Ireland';
        break;
      case 'IL':
        this.country = 'Israel';
        break;
      case 'IT':
        this.country = 'Italy';
        break;

      case 'JM':
        this.country = 'Jamaica';
        break;
      case 'JP':
        this.country = 'Japan';
        break;
      case 'JO':
        this.country = 'Jordan';
        break;
      case 'KZ':
        this.country = 'Kazakhstan';
        break;
      case 'KE':
        this.country = 'Kenya';
        break;
      case 'KI':
        this.country = 'Kiribati';
        break;
      case 'KP':
        this.country = "Korea, Democratic People's Republic of";
        break;
      case 'KR':
        this.country = 'Korea, Republic of';
        break;
      case 'KW':
        this.country = 'Kuwait';
        break;

      case 'KG':
        this.country = 'Kyrgyzstan';
        break;
      case 'LA':
        this.country = "Lao People's Democratic Republic";
        break;
      case 'LV':
        this.country = 'Latvia';
        break;
      case 'LB':
        this.country = 'Lebanon';
        break;
      case 'LS':
        this.country = 'Lesotho';
        break;
      case 'LR':
        this.country = 'Liberia';
        break;
      case 'SLY':
        this.country = 'Libyan Arab Jamahiriya';
        break;
      case 'LI':
        this.country = 'Liechtenstein';
        break;
      case 'LT':
        this.country = 'Lithuania';
        break;

      case 'LU':
        this.country = 'Luxembourg';
        break;
      case 'MO':
        this.country = 'Ethiopia';
        break;
      case 'FK':
        this.country = 'Macao';
        break;
      case 'MK':
        this.country = 'Macedonia, The Former Yugoslav Republic of';
        break;
      case 'MG':
        this.country = 'Madagascar';
        break;
      case 'MW':
        this.country = 'Malawi';
        break;
      case 'MY':
        this.country = 'Malaysia';
        break;
      case 'MV':
        this.country = 'Maldives';
        break;
      case 'ML':
        this.country = 'Mali';
        break;

      case 'MT':
        this.country = 'Malta';
        break;
      case 'MH':
        this.country = 'Marshall Islands';
        break;
      case 'MQ':
        this.country = 'Martinique';
        break;
      case 'MR':
        this.country = 'Mauritania';
        break;
      case 'MU':
        this.country = 'Mauritius';
        break;
      case 'YT':
        this.country = 'Mayotte';
        break;
      case 'MX':
        this.country = 'Mexico';
        break;
      case 'FM':
        this.country = 'Micronesia, Federated States of';
        break;
      case 'MD':
        this.country = 'Moldava, Republic of';
        break;

      case 'MC':
        this.country = 'Monaco';
        break;
      case 'MN':
        this.country = "Mongolia";
        break;
      case 'MS':
        this.country = 'Montserrat';
        break;
      case 'MA':
        this.country = 'Morocco';
        break;
      case 'MZ':
        this.country = 'Mozambique';
        break;
      case 'MM':
        this.country = 'Myanmar';
        break;
      case 'NA':
        this.country = 'Namibia';
        break;
      case 'NR':
        this.country = 'Nauru';
        break;
      case 'NP':
        this.country = 'Nepal';
        break;

      case 'NL':
        this.country = 'Netherlands';
        break;
      case 'AN':
        this.country = 'Netherlands Antilles';
        break;
      case 'NC':
        this.country = 'New Caledonia';
        break;
      case 'NZ':
        this.country = 'New Zealand';
        break;
      case 'NI':
        this.country = 'Nicaragua';
        break;
      case 'NE':
        this.country = 'Niger';
        break;
      case 'NG':
        this.country = 'Nigeria';
        break;
      case 'NU':
        this.country = 'Niue';
        break;
      case 'NF':
        this.country = 'Norfolk Island';
        break;


      case 'MP':
        this.country = 'Northern Mariana Islands';
        break;
      case 'NO':
        this.country = 'Norway';
        break;
      case 'OM':
        this.country = 'Oman';
        break;
      case 'PK':
        this.country = 'Pakistan';
        break;
      case 'PW':
        this.country = 'Palau';
        break;
      case 'PS':
        this.country = 'Palestinian Territory, Occupied';
        break;
      case 'PA':
        this.country = 'Panama';
        break;
      case 'PG':
        this.country = 'Papua New Guinea';
        break;
      case 'PY':
        this.country = 'Paraguay';
        break;

      case 'PE':
        this.country = 'Peru';
        break;
      case 'PH':
        this.country = "Philippines";
        break;
      case 'PN':
        this.country = 'Pitcairn';
        break;
      case 'PL':
        this.country = 'Poland';
        break;
      case 'PT':
        this.country = 'Portugal';
        break;
      case 'PR':
        this.country = 'Puerto Rico';
        break;
      case 'QA':
        this.country = 'Qatar';
        break;
      case 'RE':
        this.country = 'Réunion';
        break;
      case 'RO':
        this.country = 'Romania';
        break;

      case 'RU':
        this.country = 'Russian Federation';
        break;
      case 'RW':
        this.country = 'Rwanda';
        break;
      case 'SH':
        this.country = 'Saint Helena';
        break;
      case 'HN':
        this.country = 'Saint Kitts and Nevis';
        break;
      case 'LC':
        this.country = 'Saint Lucia';
        break;
      case 'PM':
        this.country = 'Saint Pierre and Miquelon';
        break;
      case 'VC':
        this.country = 'Saint Vincent and the Grenadines';
        break;
      case 'WS':
        this.country = 'Samoa';
        break;
      case 'SM':
        this.country = 'San Marino';
        break;


      case 'ST':
        this.country = 'Sao Tome and Principe';
        break;
      case 'SA':
        this.country = 'Saudi Arabia';
        break;
      case 'SN':
        this.country = 'Senegal';
        break;
      case 'CS':
        this.country = 'Serbia and Montenegro';
        break;
      case 'SC':
        this.country = 'Seychelles';
        break;
      case 'SL':
        this.country = 'Sierra Leone';
        break;
      case 'SG':
        this.country = 'Singapore';
        break;
      case 'SK':
        this.country = 'Slovakia';
        break;
      case 'SI':
        this.country = 'Slovenia';
        break;

      case 'SB':
        this.country = 'Solomon Islands';
        break;
      case 'SO':
        this.country = "Somalia";
        break;
      case 'ZA':
        this.country = 'South Africa';
        break;
      case 'GS':
        this.country = 'South Georgia and South Sandwich Islands';
        break;
      case 'ES':
        this.country = 'Spain';
        break;
      case 'LK':
        this.country = 'Sri Lanka';
        break;
      case 'SD':
        this.country = 'Sudan';
        break;
      case 'SR':
        this.country = 'Suriname';
        break;
      case 'SJ':
        this.country = 'Svalbard and Jan Mayen';
        break;

      case 'SZ':
        this.country = 'Swaziland';
        break;
      case 'SE':
        this.country = 'Sweden';
        break;
      case 'CH':
        this.country = 'Switzerland';
        break;
      case 'SY':
        this.country = 'Syrian Arab Republic';
        break;
      case 'TW':
        this.country = 'Taiwan, Republic of China';
        break;
      case 'TJ':
        this.country = 'Tajikistan';
        break;
      case 'TZ':
        this.country = 'Tanzania, United Republic of';
        break;
      case 'TH':
        this.country = 'Thailand';
        break;
      case 'TL':
        this.country = 'Timor-Leste';
        break;


      case 'TG':
        this.country = 'Togo';
        break;
      case 'TK':
        this.country = 'Tokelau';
        break;
      case 'TO':
        this.country = 'Tonga';
        break;
      case 'TT':
        this.country = 'Trinidad and Tobago';
        break;
      case 'TN':
        this.country = 'Tunisia';
        break;
      case 'TR':
        this.country = 'Turkey';
        break;
      case 'TM':
        this.country = 'Turkmenistan';
        break;
      case 'TC':
        this.country = 'Turks and Caicos Islands';
        break;
      case 'TV':
        this.country = 'Tuvalu';
        break;

      case 'UG':
        this.country = 'Uganda';
        break;
      case 'UA':
        this.country = "Ukraine";
        break;
      case 'AE':
        this.country = 'United Arab Emirates';
        break;
      case 'GB':
        this.country = 'United Kingdom';
        break;
      case 'US':
        this.country = 'United States';
        break;
      case 'UM':
        this.country = 'United States Minor Outlying Islands';
        break;
      case 'UY':
        this.country = 'Uruguay';
        break;
      case 'UZ':
        this.country = 'Uzbekistan';
        break;
      case 'VU':
        this.country = 'Vanuatu';
        break;

      case 'VN':
        this.country = 'Vietnam';
        break;
      case 'VG':
        this.country = 'Virgin Islands, British';
        break;
      case 'VI':
        this.country = 'Virgin Islands, U.S.';
        break;
      case 'WF':
        this.country = 'Wallis and Futuna';
        break;
      case 'EH':
        this.country = 'Western Sahara';
        break;
      case 'YE':
        this.country = 'Yemen';
        break;
      case 'ZW':
        this.country = 'Zimbabwe';
        break;

      default:
        this.country = '';
    }
  }


  ToggleWeatherMeasurement() {
    this.counter++;
    if (this.counter % 2 === 0) {
      this.isC = true;
      document.getElementById("CtoFToggle").innerText = "C°";
    } else {
      this.isC = false;
      document.getElementById("CtoFToggle").innerText = "F°";
    }
    console.log("for wind direction currently " + this.fiveDayForecast.list[0].wind.deg);
    return this.isC;
  }

  ToggleDistanceMeasurement() {
    this.counter2++;
    if (this.counter2 % 2 === 0) {
      this.isKM = true;
      document.getElementById("KMtoMToggle").innerText = "Km/h";

    } else {
      this.isKM = false;
      document.getElementById("KMtoMToggle").innerText = "M/h";
    }
    return this.isKM;
  }

  isNightorDayNow() {
    if (this.currentDayTimeMilli > this.sunrise1Milli && this.currentDayTimeMilli < this.sunset1Milli) {
      this.isDayTimeNow = true;
    } else {
      this.isDayTimeNow = false;
    }
  }

  isNightorDay3Hrs() {
    let d = new Date();
    let n1 = d.getDay();
    let n = this._3HrsDateTime.getDay();
    let local3HrTimeMilli = this._3HrsTimeMilli;

    if (n1 < n) {
      local3HrTimeMilli = this._3HrsTimeMilli + this.currentDayTimeMilli - 86400000;
    }
    if (local3HrTimeMilli > this.sunrise1Milli && local3HrTimeMilli < this.sunset1Milli) {
      this.isDayTime3hrs = true;
    } else {
      this.isDayTime3hrs = false;
    }
  }


  isNightorDay9Hrs() {

    if (this._9HrsTimeMilli > this.sunrise1Milli && this._9HrsTimeMilli < this.sunset1Milli) {
      this.isDayTime9hrs = true;
    } else {
      this.isDayTime15hrs = false;
    }
  }

  isNightorDay15Hrs() {

    if (this._15HrsTimeMilli > this.sunrise1Milli && this._15HrsTimeMilli < this.sunset1Milli) {
      this.isDayTime15hrs = true;
    } else {
      this.isDayTime15hrs = false;
    }
  }

}
import './style/style.css';
import $ from 'jquery';
import moment from 'moment';

const displayTime = () => {
  moment.locale('id');

  $('.time').text(moment().format('LTS'));
  $('.date').text(moment().format('LL'));
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};

updateTime();

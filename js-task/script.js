const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTHS = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

function getDayInfo(date) {
  let splitDate = date.split('.');
  let dateObject = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
  let firstDay = new Date(dateObject.getFullYear(), dateObject.getMonth(), 1).getDay();
  return `${DAYS[dateObject.getDay()]}, ${Math.ceil((dateObject.getDate() + (firstDay - 1)) / 7)} неделя ${MONTHS[dateObject.getMonth()]} ${dateObject.getFullYear()} года`;
}

console.log(getDayInfo('01.01.2022')); // => Суббота, 1 неделя Января 2022 года

console.log(getDayInfo('15.12.2021')); // => Среда, 3 неделя Декабря 2021 года
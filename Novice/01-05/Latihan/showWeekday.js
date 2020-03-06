function getWeekDay(date) {
    let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    return days[date.getDay()];
}

let date = new Date(2020, 2, 6); // 3 Jan 2020
console.log(getWeekDay(date)); // FR
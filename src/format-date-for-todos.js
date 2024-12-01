import { getDate,  getHours, getMinutes, getMonth, getYear } from "date-fns";

export function getWeekdayMonthDayYearHourAndMinutesOfADate(date) {
  const dayOfTheWeek = date.toLocaleString('en-us', { weekday: 'long' });
  const dayOfTheMonth = getDate(date);
  const month = date.toLocaleString("default", { month: "long" });
  const year = getYear(date);
  const hours = getHours(date);
  const minutes = getMinutes(date);
  return `${dayOfTheWeek} ${month} ${dayOfTheMonth} ${year} ${hours}:${minutes}`;
}
export function getTodaysDateInDatetimelocal() {
  const today = new Date();
  const dayOfTheMonth = String(getDate(today)).padStart(2, "0");
  const month = String(getMonth(today) + 1).padStart(2, "0");
  const year = getYear(today);
  // So the task finishes just before the day ends
  const hours = 23;
  const minutes = 59;
  return `${year}-${month}-${dayOfTheMonth}T${hours}:${minutes}`;
}

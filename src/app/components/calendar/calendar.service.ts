import { EventEmitter, Injectable } from "@angular/core";
import * as data from "../../../../mock/data.json";
@Injectable({
  providedIn: "root",
})
export class CalendarService {
  form;
  constructor() {}

  public weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  public monthNames = [
    "January ",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "december",
  ];

  selectedDay = new EventEmitter();

  setDaySelected(day) {
    this.selectedDay.emit(day);
  }

  getDaysByMonth(month, year) {
    const calendar = [];
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    let day = 0;

    for (let i = 0; i < 42; i++) {
      if (i >= firstDay && day !== null) day += 1;
      if (day > lastDate) day = null;
      const dataObj = new Date(year, month, day);

      calendar.push({
        day: day === 0 || day === null ? null : day,
        date:
          day === 0 || day === null
            ? null
            : dataObj.toISOString().split("T")[0],
        today:
          day === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear(),

        weekDay: this.weekDays[dataObj.getDay()],
        monthName: this.monthNames[month],
      });
    }

    return calendar;
  }

  saveAppointment(form) {
    let schedule = [];
    if (!localStorage.getItem("schedule")) {
      schedule.push(form);
      localStorage.setItem("schedule", JSON.stringify(schedule));
    } else {
      schedule = JSON.parse(localStorage.getItem("schedule"));
      schedule.push(form);
      localStorage.setItem("schedule", JSON.stringify(schedule));
    }

    return "Success";
  }
}

import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CalendarService } from "./calendar.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  monthNames = [
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

  weekkDays = ["S", "M", "T", "W", "T", "F", "S"];
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  selectedDay = {
    day: new Date().getDate(),
    today: true,
    date: new Date().toISOString().split("T")[0],
    weekDay: this.calendarService.weekDays[new Date().getDay()],
    monthName: this.calendarService.monthNames[new Date().getMonth()],
  };
  days;
  schedule = [];
  openForm: boolean = false;
  dateTimeSelected;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.getDaysCalendar();
    this.getSchedule();
  }

  getDaysCalendar() {
    this.days = this.calendarService.getDaysByMonth(
      this.currentMonth,
      this.currentYear
    );

    setTimeout(() => {
      this.calendarService.setDaySelected(this.selectedDay);
      this.getSchedule();
    }, 500);
  }

  getSchedule() {
    let scheduleDay = [];
    if (localStorage.getItem("schedule")) {
      this.schedule = JSON.parse(localStorage.getItem("schedule"));
      this.schedule.forEach((item) => {
        if (item.date == this.selectedDay.date) {
          scheduleDay.push(item);
        }
      });

      this.schedule = scheduleDay;
    }
  }

  previousMonth() {
    if (this.currentMonth > 0) {
      this.currentMonth -= 1;
      this.getDaysCalendar();
    }
  }

  nextMonth() {
    if (this.currentMonth < 11) {
      this.currentMonth += 1;
      this.getDaysCalendar();
    }
  }

  setSelectedDay(day) {
    this.selectedDay = day;
    this.calendarService.setDaySelected(this.selectedDay);
    this.getSchedule();
  }

  toogleCard(e) {
    this.openForm = e;
    this.dateTimeSelected = { date: this.selectedDay };
  }

  refreshComponent(e) {
    this.getDaysCalendar();
  }
}

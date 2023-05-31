import { Component, Input, OnInit } from "@angular/core";
import { CalendarService } from "../calendar/calendar.service";

@Component({
  selector: "app-calendar-panel",
  templateUrl: "./calendar-panel.component.html",
  styleUrls: ["./calendar-panel.component.scss"],
})
export class CalendarPanelComponent implements OnInit {
  selectedDay;
  openForm: boolean = false;
  dateTimeSelected;
  scheduleSelected = [];

  @Input() schedule;

  constructor(private calendarService: CalendarService) {}
  hourList = [
    { time: 1, period: "AM" },
    { time: 2, period: "AM" },
    { time: 3, period: "AM" },
    { time: 4, period: "AM" },
    { time: 5, period: "AM" },
    { time: 6, period: "AM" },
    { time: 7, period: "AM" },
    { time: 8, period: "AM" },
    { time: 9, period: "AM" },
    { time: 10, period: "AM" },
    { time: 11, period: "AM" },
    { time: 12, period: "PM" },
    { time: 1, period: "PM" },
    { time: 2, period: "PM" },
    { time: 3, period: "PM" },
    { time: 4, period: "PM" },
    { time: 5, period: "PM" },
    { time: 6, period: "PM" },
    { time: 7, period: "PM" },
    { time: 8, period: "PM" },
    { time: 9, period: "PM" },
    { time: 10, period: "PM" },
    { time: 11, period: "PM" },
    { time: 12, period: "AM" },
  ];
  ngOnInit() {
    this.calendarService.selectedDay.subscribe((res) => {
      this.selectedDay = res;
    });
  }

  formatDate(date) {
    return new Date(date + "T" + "00:00:00").toLocaleDateString();
  }

  openCard(hourSelected) {
    this.toogleCard(true);
    this.dateTimeSelected = { date: this.selectedDay, time: hourSelected };
  }

  openCardWithInfo(info, event) {
    event.stopPropagation();
    this.scheduleSelected = info;
    this.dateTimeSelected = { date: this.selectedDay, time: info.timeStart };
    this.toogleCard(true);
  }

  toogleCard(e) {
    this.openForm = e;
    if (!e) {
      this.scheduleSelected = [];
      this.dateTimeSelected = null;
    }
  }
}

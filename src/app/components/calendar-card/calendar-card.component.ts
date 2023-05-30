import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CalendarService } from "../calendar/calendar.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-calendar-card",
  templateUrl: "./calendar-card.component.html",
  styleUrls: ["./calendar-card.component.scss"],
})
export class CalendarCardComponent implements OnInit {
  @Input() dateTimeSelected;
  @Output() toggleForm = new EventEmitter();
  constructor(private calendarService: CalendarService) {}

  formCalendar = new FormGroup({
    title: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    period: new FormControl(""),
    description: new FormControl("", Validators.required),
  });

  ngOnInit() {
    this.formCalendar.controls["date"].setValue(
      this.dateTimeSelected.date.date
    );
    this.formCalendar.controls["time"].setValue(
      this.dateTimeSelected.time.time
    );
    this.formCalendar.controls["period"].setValue(
      this.dateTimeSelected.time.period
    );
  }

  onSubmit() {
    console.log(this.formCalendar.value);
  }

  close() {
    this.toggleForm.emit(false);
  }
}

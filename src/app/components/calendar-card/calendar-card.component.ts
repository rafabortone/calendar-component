import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CalendarService } from "../calendar/calendar.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { SuccessMessageComponent } from "../success-message/success-message.component";

@Component({
  selector: "app-calendar-card",
  templateUrl: "./calendar-card.component.html",
  styleUrls: ["./calendar-card.component.scss"],
})
export class CalendarCardComponent implements OnInit {
  @Input() dateTimeSelected;
  @Output() toggleForm = new EventEmitter();
  constructor(
    private calendarService: CalendarService,
    public dialog: MatDialog
  ) {}

  formCalendar = new FormGroup({
    title: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    timeStart: new FormControl("", Validators.required),
    timeFinish: new FormControl("", Validators.required),
    period: new FormControl(""),
    description: new FormControl("", Validators.required),
  });

  ngOnInit() {
    this.formCalendar.controls["date"].setValue(
      this.dateTimeSelected.date.date
    );
    this.formCalendar.controls["timeStart"].setValue(
      this.dateTimeSelected.time.time
    );
    this.formCalendar.controls["timeFinish"].setValue(
      this.dateTimeSelected.time.time + 1
    );
    this.formCalendar.controls["period"].setValue(
      this.dateTimeSelected.time.period
    );
  }

  onSubmit() {
    let response = this.calendarService.saveAppointment(
      this.formCalendar.value
    );

    if (response == "Success") {
      const dialogRef = this.dialog.open(SuccessMessageComponent, {
        data: {
          title: "Success",
          text: "Appointment successfully saved",
        },
      });

      dialogRef.afterClosed().subscribe((res) => {
        this.close();
      });
    }
  }

  close() {
    this.toggleForm.emit(false);
  }
}

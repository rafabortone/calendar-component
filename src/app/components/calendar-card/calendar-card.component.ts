import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CalendarService } from "../calendar/calendar.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { SuccessMessageComponent } from "../success-message/success-message.component";
import { CdkDrag } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-calendar-card",
  templateUrl: "./calendar-card.component.html",
  styleUrls: ["./calendar-card.component.scss"],
})
export class CalendarCardComponent implements OnInit {
  @Input() dateTimeSelected;
  @Input() scheduleSelected;
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
    if (this.scheduleSelected && this.scheduleSelected.title) {
      this.formCalendar.controls["title"].setValue(this.scheduleSelected.title);
      this.formCalendar.controls["date"].setValue(this.scheduleSelected.date);
      this.formCalendar.controls["timeStart"].setValue(
        this.scheduleSelected.timeStart
      );
      this.formCalendar.controls["timeFinish"].setValue(
        this.scheduleSelected.timeFinish
      );
      this.formCalendar.controls["period"].setValue(
        this.scheduleSelected.period
      );
      this.formCalendar.controls["description"].setValue(
        this.scheduleSelected.description
      );
    } else {
      console.log(this.dateTimeSelected);

      if (this.dateTimeSelected && this.dateTimeSelected.time) {
        this.formCalendar.controls["timeStart"].setValue(
          this.dateTimeSelected.time.time
        );
        this.formCalendar.controls["timeFinish"].setValue(
          this.dateTimeSelected.time.time + 1
        );
        this.formCalendar.controls["period"].setValue(
          this.dateTimeSelected.time.period
        );
        this.formCalendar.controls["date"].setValue(
          this.dateTimeSelected.date.date
        );
      }
    }
  }

  onSubmit() {
    console.log(this.formCalendar.value);

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
    this.scheduleSelected = [];
    this.toggleForm.emit(false);
  }
}

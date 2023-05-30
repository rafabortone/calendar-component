import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

interface DialogData {
  title: string;
  text: string;
}

@Component({
  selector: "app-success-message",
  templateUrl: "./success-message.component.html",
  styleUrls: ["./success-message.component.scss"],
})
export class SuccessMessageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SuccessMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.dialogRef.updateSize("400px", "350px");
  }

  close() {
    this.dialogRef.close();
  }
}

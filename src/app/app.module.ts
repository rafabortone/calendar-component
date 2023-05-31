import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { CalendarCardComponent } from "./components/calendar-card/calendar-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { CalendarPanelComponent } from "./components/calendar-panel/calendar-panel.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SuccessMessageComponent } from "./components/success-message/success-message.component";
import { MatDialogModule } from "@angular/material/dialog";
import { DragDropModule } from "@angular/cdk/drag-drop";
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCardComponent,
    CalendarPanelComponent,
    SuccessMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    DragDropModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SuccessMessageComponent],
})
export class AppModule {}

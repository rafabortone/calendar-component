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

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCardComponent,
    CalendarPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

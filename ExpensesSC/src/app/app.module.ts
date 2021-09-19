import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// services
import { EntryService } from './entry.service';
import { AppRouterModule } from './app.router.module';
import { HttpClientModule } from '@angular/common/http';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NewEntryComponent } from './new-entry/new-entry.component';

// forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatTableModule, MatInputModule, MatCardModule, MatSelectModule,
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

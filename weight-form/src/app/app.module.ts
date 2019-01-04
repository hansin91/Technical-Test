import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NewWeightComponent } from './pages/new-weight/new-weight.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HomeComponent } from './pages/home/home.component';
import { WeightDetailComponent } from './pages/weight-detail/weight-detail.component';
import { FormComponent } from './components/form/form.component';
import { EditComponent } from './pages/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		NewWeightComponent,
		HomeComponent,
		WeightDetailComponent,
		FormComponent,
		EditComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatButtonModule,
		FormsModule,
		StorageServiceModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

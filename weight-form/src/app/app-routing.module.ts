import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewWeightComponent } from './pages/new-weight/new-weight.component';
import { HomeComponent } from './pages/home/home.component';
import { WeightDetailComponent } from './pages/weight-detail/weight-detail.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'weight/new',
		component: NewWeightComponent
	},
	{
		path: 'weight/edit/:id',
		component: EditComponent
	},
	{
		path: 'weight/:id',
		component: WeightDetailComponent
	},
	{ path: '**', component: HomeComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

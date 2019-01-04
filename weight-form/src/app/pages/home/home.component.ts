import { Component, OnInit } from '@angular/core';
import { WeightService } from 'src/app/services/weight.service';
import { Weight } from 'src/app/models/weight';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	public weights: Weight[];
	constructor(private weightService: WeightService) {
		this.weights = weightService.getList();
	}

	ngOnInit() {}
}

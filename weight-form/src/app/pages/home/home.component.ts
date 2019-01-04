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
	public averageMaxWeight: number;
	public averageMinWeight: number;
	public averageDifference: number;
	constructor(private weightService: WeightService) {
		this.weights = this.weightService.getList();
		this.averageMaxWeight = 0;
		this.averageMinWeight = 0;
		this.averageDifference = 0;
	}

	ngOnInit() {
		if (this.weights) {
			const length = this.weights.length;
			this.averageMaxWeight = this.weights.map((w) => w.maxWeight).reduce((a, b) => a + b, 0) / length;
			this.averageMinWeight = this.weights.map((w) => w.minWeight).reduce((a, b) => a + b, 0) / length;
			this.averageDifference = this.weights.map((w) => w.difference).reduce((a, b) => a + b, 0) / length;
		}
	}
}

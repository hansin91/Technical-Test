import { Component, OnInit } from '@angular/core';
import { WeightService } from 'src/app/services/weight.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
	constructor(private weightService: WeightService) {}

	submit(data) {
		this.weightService.save(data);
	}

	ngOnInit() {}
}

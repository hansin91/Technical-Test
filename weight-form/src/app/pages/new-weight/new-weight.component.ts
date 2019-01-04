import { Component, OnInit } from '@angular/core';
import { WeightService } from 'src/app/services/weight.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-new-weight',
	templateUrl: './new-weight.component.html',
	styleUrls: [ './new-weight.component.scss' ]
})
export class NewWeightComponent implements OnInit {
	constructor(private weightService: WeightService, private router: Router) {}

	addForm = new FormGroup({
		maxWeight: new FormControl(''),
		minWeight: new FormControl(''),
		date: new FormControl('')
	});

	submit() {
		this.weightService.save(this.addForm.value);
		this.router.navigate([ '' ]);
	}

	ngOnInit() {}
}

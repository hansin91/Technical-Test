import { Component, OnInit } from '@angular/core';
import { WeightService } from 'src/app/services/weight.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-new-weight',
	templateUrl: './new-weight.component.html',
	styleUrls: [ './new-weight.component.scss' ]
})
export class NewWeightComponent implements OnInit {
	constructor(private weightService: WeightService, private router: Router) {}

	submit(data) {
		this.weightService.save(data);
		this.router.navigate([ '' ]);
	}

	ngOnInit() {}
}

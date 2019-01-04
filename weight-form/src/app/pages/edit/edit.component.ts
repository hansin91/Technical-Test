import { Component, OnInit } from '@angular/core';
import { WeightService } from 'src/app/services/weight.service';
import { Weight } from 'src/app/models/weight';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.scss' ]
})
export class EditComponent implements OnInit {
	public weight: Weight;
	private subscriptions: Subscription[] = [];
	private index: number;
	constructor(private weightService: WeightService, private route: ActivatedRoute, private router: Router) {
		this.subscriptions.push(
			this.route.paramMap.subscribe((params) => {
				this.index = +params.get('id');
				this.weight = this.weightService.getWeight(this.index);
			})
		);
	}

	form = new FormGroup({
		maxWeight: new FormControl(),
		minWeight: new FormControl(),
		date: new FormControl()
	});

	ngOnInit() {
		this.form.setValue({
			maxWeight: this.weight.maxWeight,
			minWeight: this.weight.minWeight,
			date: this.weight.date
		});
	}

	submit(data) {
		this.weightService.delete(this.index);
		this.weightService.save(data.value);
		this.router.navigate([ '' ]);
	}
}

import { Component, OnInit } from '@angular/core';
import { WeightService } from 'src/app/services/weight.service';
import { Weight } from 'src/app/models/weight';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-weight-detail',
	templateUrl: './weight-detail.component.html',
	styleUrls: [ './weight-detail.component.scss' ]
})
export class WeightDetailComponent implements OnInit {
	public weight: Weight;
	private subscriptions: Subscription[] = [];
	constructor(private weightService: WeightService, private route: ActivatedRoute) {
		this.subscriptions.push(
			this.route.paramMap.subscribe((params) => {
				const index = params.get('id');
				this.weight = this.weightService.getWeight(+index);
			})
		);
	}

	ngOnInit() {}
}

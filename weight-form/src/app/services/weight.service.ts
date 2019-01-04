import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Weight } from '../models/weight';

const STORAGE_KEY = 'local_weights';

@Injectable({
	providedIn: 'root'
})
export class WeightService {
	public weight_list: Weight[];

	constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
		this.weight_list = this.storage.get(STORAGE_KEY) || [];
	}

	public save(data: any): void {
		const weight = new Weight();
		data.maxWeight = +data.maxWeight;
		data.minWeight = +data.minWeight;
		Object.assign(weight, data);
		weight.difference = data.maxWeight - data.minWeight;
		this.weight_list.push(weight);
		const sortedArray = this.weight_list.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
		this.storage.set(STORAGE_KEY, sortedArray);
	}

	public delete(index: number): void {
		this.weight_list.splice(index, 1);
	}

	public getList(): Weight[] {
		return this.storage.get(STORAGE_KEY);
	}

	public getWeight(index: number): Weight {
		return this.weight_list[index];
	}
}

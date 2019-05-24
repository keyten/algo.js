import {BinTree} from './bin-tree';

export class Heap<T> extends BinTree<T> {
	constructor(values: T[]){
        super(values);
        this.buildHeap();
    }

    isValidHeap(i?: number){
        if(i === undefined){
            i = 1;
        }

        const value = this.value(i);
        const left = this.left(i);
        const right = this.right(i);

        if(this.value(left) > value || this.value(right) > value){
            return false;
        }

        return this.isValidHeap(left) && this.isValidHeap(right);
    }

    buildHeap(){
        let i = this.size - 1;
        while(i !== 0){
            this.heapify(i);
            i /= 2;
        }
    }

    heapify(i: number){
        const left = this.left(i);
        const right = this.right(i);
        let max = i;

        if(left < this.size && this.value(left) > this.value(max)){
            max = left;
        }

        if(right < this.size && this.value(right) > this.value(max)){
            max = right;
        }

        if(max !== i){
            [this.values[i], this.values[max]] = [this.values[max], this.values[i]];
            this.heapify(max);
        }
    }
}

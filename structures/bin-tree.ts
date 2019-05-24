export class BinTree<T> {
    constructor(values: T[]){
        this.values = values;
    }

    values: T[];

    left(i: number){
        return i * 2 + 1;
    }

    right(i: number){
        return i * 2 + 2;
    }

    parent(i: number){
        return Math.floor((i - 1) / 2);
    }

    value(i: number){
        return this.values[i];
    }

    get size(){
        return this.values.length;
    }
}

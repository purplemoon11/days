import {from, of} from 'rxjs'
import {map, filter, take} from 'rxjs/operators'

//map
const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(map((val)=> val+10))
const subscribe = example.subscribe((val)=>console.log(val))

//filter
const score = source.pipe(filter((num)=> num % 2 === 0))
const result = score.subscribe((val)=>console.log(val))

//take
const newData = of(1,2,3,4,5)
const ob = newData.pipe(take(1));
const subs = ob.subscribe(val => console.log(val))
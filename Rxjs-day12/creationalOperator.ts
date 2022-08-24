import {of, from} from 'rxjs';
import {ajax} from 'rxjs/ajax'

//of

const score =  of(1,2,3,4,5);
const subscribe = score.subscribe(val => console.log(val))

//from

const array = from([1,2,3,4,5])
const subscribe = array.subscribe(val => console.log(val))

//ajax

const users = ajax(`https://api.publicapis.org/entries`)

const subscribe = users.subscribe(
    res => console.log(res),
    err => console.log(err)
);
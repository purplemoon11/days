import {Observable} from 'rxjs';

const observable = new Observable((subscriber)=>{
    subscriber.next(1);
});

const observer = {
    next: x => console.log('Observer got the next value: ' + x),
    error: err => console.log('Observer got an error ' + err),
    complete: () => console.log('Observer got the complete notification'),
};

observable.subscribe(observer)

import { map } from 'rxjs/operators';
export const transformator = (param?: any) => map((data: any) => {
    const { title, body } = data;
    return { title, body };
  }
);


// import { Observable, of, combineLatest, zip, forkJoin, BehaviorSubject } from 'rxjs';
// export const transformator = (param?: any) => (source: Observable<any>) =>
// new Observable(observer => {
//   return source.subscribe({
//     next(x) {
//       observer.next(
//         x.user
//       );
//     },
//     error(err) { observer.error(err); },
//     complete() { observer.complete(); }
//   });
// });

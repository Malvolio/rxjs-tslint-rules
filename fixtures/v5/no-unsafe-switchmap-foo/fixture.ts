import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";

declare module "rxjs/Observable" {
    interface Observable<T> {
        ofType(type: string, ...moreTypes: string[]): Observable<T>;
    }
}

type Actions = Observable<any>;
const actions = Observable.of({});
const empty = Observable.empty() as Observable<never>;

const fooEffect = actions.ofType("FOO").do(() => {}).switchMap(() => empty);
const barEffect = actions.ofType("BAR").do(() => {}).switchMap(() => empty);
const bazEffect = actions.ofType("BAZ").do(() => {}).switchMap(() => empty);

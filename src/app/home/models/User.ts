export class User {
    constructor(public name?: string) {}
    sayHi() {
      console.log(this.name);
    }
}

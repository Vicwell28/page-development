export class PublisherManager {
  constructor() {
    this.observers = [];
  }

  subscribe(listener) {
    console.log("subscribe");

    if (!this.observers.includes(listener)) {
      this.observers.push(listener);
      console.log(this.observers);
    }
  }

  unSubscribe(listener) {
    console.log("unSubscribe");

    const observerIndex = this.observers.indexOf(listener);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
      console.log(this.observers);
    }
  }

  next(data) {
    console.log("next");

    for (const observer of this.observers) {
      console.log(observer);
      observer.next(data);
    }
  }

  complete(data) {
    console.log("complete");

    for (const observer of this.observers) {
      observer.complete(data);
    }
  }

  error(data) {
    console.log("error");

    for (const observer of this.observers) {
      console.log(observer);
      observer.error(data);
    }
  }
}

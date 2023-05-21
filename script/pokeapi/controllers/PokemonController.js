import { PublisherManager } from "./../shared/PublisherManager.js";

export class PokemonController {
  constructor() {
    this.PublisherManager = new PublisherManager();
  }

  Index() {
    return new PublisherManager((observer) => {
      console.log("VA A CONSUMIR LA API");
      console.log(observer);
      console.log(this);

      fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("RESPUESTA");

          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          console.log("ERROR");

          observer.error(error);
        });
    });
  }

  Show() {
    return {
      subscribe: ({ next, error, complete }) => {
        const observer = {
          next: (data) => next && next(data),
          error: (err) => error && error(err),
          complete: () => complete && complete(),
        };

        this.PublisherManager.subscribe(observer);

        fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("RESPUESTA");
            this.PublisherManager.next(data);
            this.PublisherManager.complete();
            this.PublisherManager.unSubscribe(observer);
          })
          .catch((error) => {
            console.log("ERROR");
            this.PublisherManager.error(error);
            this.PublisherManager.unSubscribe(observer);
          });

        return {
          unsubscribe: () => {
            this.PublisherManager.unSubscribe(observer);
          },
        };
      },
    };
  }

  Store() {}

  Update() {}

  Delete() {}
}

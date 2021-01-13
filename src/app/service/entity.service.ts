import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EntityService {
  constructor() {
    console.log("new instance");
  }

  get(): string {
    return "hello";
  }
}

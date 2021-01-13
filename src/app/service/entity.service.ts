import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EntityService {
  static count = 0;

  constructor() {
    EntityService.count += 1;

    console.log("New EntityService, instance #", EntityService.count);
  }

  get(): string {
    return "hello";
  }
}

import { Component } from "@angular/core";
import { EntityService } from "../../service/entity.service";

@Component({
  selector: "lib-lazy-one",
  template: "Lazy one"
})
export class LazyOneComponent {
  constructor(readonly service: EntityService) {}
}

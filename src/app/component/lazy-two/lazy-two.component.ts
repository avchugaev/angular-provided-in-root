import { Component } from "@angular/core";
import { EntityService } from "../../service/entity.service";

@Component({
  selector: "lib-lazy-two",
  template: "Lazy two"
})
export class LazyTwoComponent {
  constructor(readonly service: EntityService) {}
}

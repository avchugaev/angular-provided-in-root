import { Component, VERSION } from "@angular/core";
import { EntityService } from "./service/entity.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(readonly service: EntityService) {}
}

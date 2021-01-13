import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyOneComponent } from "./lazy-one.component";

@NgModule({
  declarations: [LazyOneComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: LazyOneComponent
      }
    ])
  ]
})
export class LazyOneModule {}

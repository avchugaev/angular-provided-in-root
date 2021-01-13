import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyTwoComponent } from "./lazy-two.component";

@NgModule({
  declarations: [LazyTwoComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: LazyTwoComponent
      }
    ])
  ]
})
export class LazyTwoModule {}

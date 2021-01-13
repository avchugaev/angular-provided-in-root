import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "one",
        loadChildren: () =>
          import("./component/lazy-one/lazy-one.module").then(
            m => m.LazyOneModule
          )
      },
      {
        path: "two",
        loadChildren: () =>
          import("./component/lazy-two/lazy-two.module").then(
            m => m.LazyTwoModule
          )
      }
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

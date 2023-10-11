import { Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";
import { TodoComponent } from "./todo/todo.component";

export const routes: Routes = [
  {
    path: "counter",
    component: CounterComponent,
  },
  {
    path: "typeahead",
    component: TypeaheadComponent,
  },
  { path: "todo", component: TodoComponent },
];

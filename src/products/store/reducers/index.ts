import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromPizzas from "./pizza.reducer";
import * as fromToppings from "./topping.reducer";

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};

export const getProductsState = createFeatureSelector<ProductState>("products");

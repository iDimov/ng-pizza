import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromTopping from "../reducers/topping.reducer";
import { Topping } from "../../models/topping.model";

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromTopping.getToppingsEntities
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromTopping.getSelectedToppings
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  entities => Object.keys(entities).map(id => entities[+id])
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromTopping.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromTopping.getToppingsLoading
);

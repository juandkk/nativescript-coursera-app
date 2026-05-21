import { createAction, props } from '@ngrx/store'

export const addReading = createAction(
  '[Reading] Add',
  props<{ movie: any }>()
)
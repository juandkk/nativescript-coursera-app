const initialState: any[] = []

export function readingReducer(
  state = initialState,
  action: any
) {

  switch (action.type) {

    case '[Reading] Add':

      return [
        ...state,
        action.movie
      ]

    default:
      return state

  }

}
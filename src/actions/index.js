//Actions
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDER'

//Action Creators
export function addRecipe({ day, recipe, meal}) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}

export function removeFromCalender({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDER,
    day,
    meal,
  }
}
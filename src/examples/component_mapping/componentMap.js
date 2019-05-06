import get from 'lodash/get'

// returns component from component map based on key provided
// for example: `__typename` for component mapping and `theme` for theme mapping
// when called once it returns a function that takes props
// called fully via `componentForKey(componentMap, "__typename")(props)`
export const componentForKey = (componentMap, keyProp) => props => {
  const value = get(props, keyProp, null)

  return componentMap[value]
}

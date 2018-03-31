export const INDEX_ROUTE = {
  path: '/'
}

export const SUBMIT_ROUTE = {
  path: '/submit'
}

export function routeFromUrl () {
  const matchingRoute = [INDEX_ROUTE, SUBMIT_ROUTE].filter(route => route.path === window.location.pathname)[0]

  return matchingRoute || INDEX_ROUTE
}

/**
 * Routes helper
 */

// import router
import Director from 'director'

// create director instance
export const router = new Director.Router().configure({strict: false})

// gets routes info from the nested array of pages
export const getRoutes = (arr) => {
  let parentId = ''
  let parentTitle = ''
  let parentUrl = ''
  const routes = []
  const extractRoutes = (data) => {
    for (let i = 0; i < data.pages.length; i++) {
      const route = data.pages[i].route
      if (!route) throw new Error('Route object is missing.')
      if (!route.name) throw new Error('Route object is missing "name" parameter.')
      if (!route.url) throw new Error('Route object is missing "url" parameter.')
      route.id = (parentId) ? parentId + route.name : route.name
      route.pageTitle = (parentTitle) ? parentTitle + route.title : route.title
      route.url = (parentUrl) ? parentUrl + route.url : route.url

      // add route to components object
      route.component = data.pages[i]

      // add route to the routes collection
      routes.push(route)

      // go to nested pages
      if (data.pages[i].pages instanceof Array) {
        parentId += route.name + '.'
        parentTitle += route.title + ' - '
        parentUrl += route.url
        extractRoutes(data.pages[i])
      }
    }
  }

  // get all routes from nested objects
  extractRoutes(arr)
  return routes
}

/**
 * Some common stuff used in demo pages
 */
export const variants = [{
    text: 'default',
    value: 'default'
  }, {
    text: 'primary',
    value: 'primary'
  }, {
    text: 'success',
    value: 'success'
  }, {
    text: 'info',
    value: 'info'
  }, {
    text: 'warning',
    value: 'warning'
  }, {
    text: 'danger',
    value: 'danger'
  }
]
export const sizes = [{
    text: 'sm',
    value: 'sm'
  }, {
    text: 'md',
    value: 'md'
  }, {
    text: 'lg',
    value: 'lg'
  }
]

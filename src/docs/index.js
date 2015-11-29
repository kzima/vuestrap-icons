// import normalize, grid, utilities and Vue
import 'vuestrap/core'

// import pages
import introductionPage from 'src/docs/pages/introduction'
import iconsPage from 'src/docs/pages/icons'

// import component dependencies
import search from 'vuestrap-docs/src/components/search'

// import vuestrap dependencies
import 'vuestrap/components/nav'
import 'vuestrap/components/navbar'
import 'vuestrap/components/buttons'
import 'vuestrap/components/list-group'
import 'vuestrap/components/jumbotron'
import 'vuestrap/components/tables'

// import package.json meta data
import pkg from 'package.json'

// import route util
import {router, handleRoute} from 'utils'

// components
// list of all dependencies
const components = {
	search: search
}

// component pages
const pages = {
	intro: introductionPage,
	icons: iconsPage,
}

// list of routes
const routes = []
const demoPages = []

// list of all comps used in the searchbar
for (const key in pages) {
	if (pages.hasOwnProperty(key)) {
		if (key !== 'intro') {
	    const meta = pages[key].data().meta
	    const route = {
				name: meta.name,
				title: meta.title,
				pageTitle: 'Vuestrap Docs - ' + meta.title,
				route: '/' + meta.name,
				url: '#/' + meta.name
			}
	    // add route for demo page
			routes.push(route)
			// add to demoPages Collection
			demoPages.push(route)
		} else {
			// add special route for intro
			routes.push({
				name: 'intro',
				title: 'Introduction',
				pageTitle: 'Vuestrap Docs',
				route: '/',
				url: '#/'
			})
		}
		// add to components
		components[key] = pages[key]
	}
}

// start docs instance
window.docs = new Vue({
	el: '#docs',
	data: {
		pageTitle: 'Vuestrap Docs',
		pkg: pkg,
		demoPages: demoPages,
		currentView: '',
	},
	components: components,
	ready() {
		// handle routes for other demo pages
		routes.forEach((route) => {
      handleRoute(route, () => {
      	this.$set('currentView', route.name)
        this.$set('pageTitle', route.pageTitle)
      })
    })

		// init router
    router.init('/')
	}
})

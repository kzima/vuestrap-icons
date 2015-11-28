// import components meta data
import icon from 'src/docs/components/icons'
import demo from 'vuestrap-docs/src/components/demo'
import search from 'vuestrap-docs/src/components/search'

// import vuestrap dependencies
import 'vuestrap/components/nav'
import 'vuestrap/components/navbar'
import 'vuestrap/components/buttons'
import 'vuestrap/components/list-group'
import 'vuestrap/components/jumbotron'
import 'vuestrap/components/tables'

// import other dependencies
import pkg from 'package.json'

// start docs instance
new Vue({
	el: '#docs',
	data: {
		title: 'Vuestrap Docs',
		pkg: pkg,
		page: null,
		components: [icon],
	},
	computed: {
		currentComponent() {
			let currentComponent = null; //{meta: {options: [], name: ''}, snippet: '', controls: null}
			this.components.forEach((component) => {
				if (component.meta.name === this.page) {
					currentComponent = component
				}
			})
			return currentComponent
		}
	},
	components: {
		'icon': vuestrapIcons.icons,
		'demo': demo,
		'search': search
	},
	ready() {
		let segments = window.location.pathname.split( '/' )
		segments = segments.filter((n) => { return n !== ''})
		this.page = segments[segments.length - 1]
		this.title = this.currentComponent && this.currentComponent.meta.title ? 'Vuestrap Docs - ' + this.currentComponent.meta.title : 'Vuestrap Docs - ' + this.pkg.name
	}
})

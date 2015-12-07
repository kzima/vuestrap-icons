import snippet from './snippet.html'
import template from './icons.html'
import meta from './icons.json'
import './_icons.scss'
import {sizes, variants} from 'utils'
import icon from 'src/components/icons'
import demo from 'vuestrap-docs/src/components/demo'

export default {
	route: {
		url: '/icons',
		name: 'icons',
		title: 'Icons',
	},
	template: template,
	data() {
		return {
			meta: meta,
		  snippet: snippet,
		  controls: {
		    size: 'xxl',
		    sizes: sizes.concat([{text: 'xl', value: 'xl'}, {text: 'xxl', value: 'xxl'}]),
		    variant: 'info',
		    variants: variants.concat([{text: 'light', value: 'light'}, {text: 'dark', value: 'dark'}]),
		  }
		}
	},
	components: {
		'vs-icon': icon,
		demo: demo,
	},
}

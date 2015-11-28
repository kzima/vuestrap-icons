import snippet from 'docs/icons/snippet.html'
import meta from './icons.json'
import './_icons.scss'
import {sizes, variants} from 'utils'

export default {
  meta: meta,
  snippet: snippet,
  controls: {
    size: 'xxl',
    sizes: sizes.concat([{text: 'xl', value: 'xl'}, {text: 'xxl', value: 'xxl'}]),
    variant: 'info',
    variants: variants.concat([{text: 'light', value: 'light'}, {text: 'dark', value: 'dark'}]),
  }
}

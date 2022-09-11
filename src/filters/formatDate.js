import Vue from 'vue'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
const { utcToZonedTime } = require('date-fns-tz')

export default () => {
  Vue.filter('formatDate', (value, filterFormat) => {
    if (value) {
      const date = new Date(value)
      const zoned = utcToZonedTime(date, 'Europe/Rome')
      return format(zoned, filterFormat || 'dd/MM/yyyy', { locale: it })
    }

    return ''
  })
}

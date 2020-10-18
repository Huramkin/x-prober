import CardStore from '@/Card/src/stores'
import { gettext } from '@/Language/src'
import component from './components'
import store from './stores'

CardStore.addCard({
  id: store.ID,
  title: gettext('Server Benchmark'),
  tinyTitle: gettext('Becnhmark'),
  priority: 800,
  component,
})

import createBrowserHistory from 'history/createBrowserHistory'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

const browserHistory = createBrowserHistory()
const routerStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routerStore)

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0)
})

export {
  history,
  routerStore as RouterStore,
}

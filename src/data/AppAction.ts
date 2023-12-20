import Dispatcher from './Dispatcher'
import AppActionType from './AppActionType'

const AppAction = {

  accessApi(): void {
    Dispatcher.dispatch({
      type: AppActionType.CONNECT_API_URI,
    })
  },

  accessApiCompleted(getResponse: string): void {
    Dispatcher.dispatch({
      type: AppActionType.CONNECT_API_URI_COMPLETED,
      getResponse
    })
  }
}

export default AppAction

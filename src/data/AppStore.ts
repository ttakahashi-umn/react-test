import {ReduceStore} from 'flux/utils'
import Dispatcher from './Dispatcher'
import AppActionType from './AppActionType'

interface AppStorePayload {
  type: AppActionType,
  responseData: string
}

interface AppStoreState {
  responseData: string
}

class AppStore extends ReduceStore<AppStoreState, AppStorePayload> {
  constructor() {
    super(Dispatcher)
  }

  public getInitialState(): AppStoreState {
    return {responseData: ''}
  }

  public reduce(state: AppStoreState, action: AppStorePayload): AppStoreState {
    const {type, ...args} = action

    switch (type) {
      case AppActionType.CONNECT_API_URI_COMPLETED:
        console.log('AppStore : ' + args.responseData)
        return {
            ...state,
          responseData: args.responseData
        }
      default:
        return state
    }
  }
}

export default new AppStore()

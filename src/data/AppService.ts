import Dispatcher from './Dispatcher'
import AppActionType from './AppActionType'
import AppRepository from "./AppRepository";
import AppAction from "./AppAction";

interface AppServicePayload {
    type: AppActionType
    responseData: string
}

class AppService {
    constructor() {
        Dispatcher.register(AppService.handleEvent)
    }

    public static handleEvent(action: AppServicePayload): any {
        const {type, ...args} = action
        switch (type) {
            case AppActionType.CONNECT_API_URI:
                return AppRepository.getResponse().then(response => {
                    console.log('AppRepository getResponse' + response.message)
                    AppAction.accessApiCompleted(response.message)
                })
            default:
            // TODO
        }
    }
}

export default AppService

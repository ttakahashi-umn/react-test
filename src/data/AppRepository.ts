import {local} from '../api'
import {Response} from "./AppDataType";

class AppRepository {
    public static getResponse(): Promise<Response> {
        console.log('AppRepository getResponse')
        return local.get()
    }

}

export default AppRepository

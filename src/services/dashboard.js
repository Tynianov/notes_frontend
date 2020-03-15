import {BASE_API_URL} from "./index";

import {ApiService} from "./index";

const service = ApiService(BASE_API_URL);

const NOTE_API_URL = BASE_API_URL+'/note';

export default {

    getNotesList(){
        return service.get(NOTE_API_URL);
    },
    getNotesDetaild(id){
       return service.get(NOTE_API_URL+'/'+id)
    },
    updateNote(id, data){
        return service({
            method: "PUT",
            url: NOTE_API_URL+'/'+id,
            data
        })
    },
    createNote(data){
        return service({
            method: "POST",
            url: NOTE_API_URL,
            data
        })
    },
    deleteNote(id){
        return service.delete(NOTE_API_URL+'/'+id)
    }

}




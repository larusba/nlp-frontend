import {IdCardSide} from "../form/input/IdCardSubmitForm";

interface NlpService {
    getNerByText: (text: string) => Promise<any>;
    getNerByFile: (file: any) => Promise<any>;
    processIdCard: (files: any[], sides: IdCardSide[]) => Promise<any>
}

const getNerByText = (text: string): Promise<any> => {
    const url = "http://localhost:8080/ner-by-text";
    return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "POST", body: JSON.stringify(text)}).then(res => res.text())
}

const getNerByFile = (file: any): Promise<any> => {
    const url = "http://localhost:8080/ner-by-document";
    return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "POST", body: JSON.stringify(file)}).then(res => res.text())
}

/*** ID CARD APIs ***/

const processIdCard = (files: any[], sides: IdCardSide[]): Promise<any> => {
    const url = "http://localhost:8080/id-card-info-base64";
    return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "POST", body: JSON.stringify({images: files, sides: sides})}).then(res => res.text())
}

export const nlpService: NlpService = {
    getNerByText: getNerByText,
    getNerByFile: getNerByFile,
    processIdCard: processIdCard
}
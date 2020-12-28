import React, {Fragment} from 'react';

interface NlpService {
    getNerByText: (text: string) => Promise<any>;
    getNerByFile: (searchType: string, file: any) => Promise<any>;
    findDocsByText: (text: string, pageNumber: number, results: number) => Promise<any>
}

const getNerByText = (text: string): Promise<any> => {
    const url = "http://localhost:8080/ner-by-text";
    return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "POST", body: JSON.stringify(text)}).then(res => res.text())
}

const getNerByFile = (searchType: string, file: any): Promise<any> => {
    const url = "http://localhost:8080/ner-by-document?" +
        "docType=" + searchType;
    return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "POST", body: JSON.stringify(file)}).then(res => res.text())
}

const findDocsByText = (text: string, pageNumber: number, results: number): Promise<any> => {
    const url = "http://localhost:8080/find-matches-in-all-section?" +
        "text=" + text +
        "&page=" + pageNumber +
        "&results=" + results;
    return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "GET"}).then(res => res.text())
}

export const nlpService: NlpService = {
    getNerByText: getNerByText,
    getNerByFile: getNerByFile,
    findDocsByText: findDocsByText
}
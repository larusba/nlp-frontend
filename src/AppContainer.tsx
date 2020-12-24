import React, {Fragment} from 'react';
import {Formik, Field, Form, FormikValues} from "formik";
import {Col, Container, Row} from "react-bootstrap";
import TextAreaForm from "./TextAreaForm";
import {nlpService} from "./NlpService";
import JsonView from "./JsonView";
import FileSubmitForm from "./FileSubmitForm";

class AppContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {response: {info: "Results will be shown here!"} }
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest(formData: FormikValues, fileBase64?: string) {
        let promise: Promise<string>;

        if (fileBase64 && formData['searchType']) {
            promise = nlpService.getNerByFile(formData['searchType'], fileBase64.substr(fileBase64.indexOf(",") + 1));
        } else if (formData['text']) {
            promise = nlpService.getNerByText(formData['text']);
        } else {
            this.setState({response: JSON.parse("One or more Form values are not populated")})
            promise = new Promise<string>(resolve => "One or more Form values are not populated");
        }

        promise.then(
            (result: string) => {
                console.log('result: ', JSON.parse(result));
                this.setState({response: JSON.parse(result)})
            },
            (error) => {
                console.log("error", error);
            }
        );

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TextAreaForm onSubmit={this.sendRequest}/>
                        <hr/>
                        <FileSubmitForm onSubmit={this.sendRequest}/>
                    </Col>
                    <Col>
                        <JsonView jsonText={this.state.response}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AppContainer;
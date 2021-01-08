import React from 'react';
import {FormikValues} from "formik";
import {Col, Container, Row} from "react-bootstrap";
import {nlpService} from "../service/NlpService";
import JsonView from "../view/JsonView";
import FileSubmitForm from "../form/input/FileSubmitForm";

class V2_NLPContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {response: {info: "Results will be shown here!"} }
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest(formData: FormikValues, fileBase64?: string) {
        let promise: Promise<string>;

        if (fileBase64 && formData['searchType']) {
            promise = nlpService.V2_getNerByFile(formData['searchType'], fileBase64.substr(fileBase64.indexOf(",") + 1));
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
                        <FileSubmitForm onSubmit={this.sendRequest} buttonText={'Submit'}/>
                    </Col>
                    <Col>
                        <JsonView jsonText={this.state.response}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default V2_NLPContainer;
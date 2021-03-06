import React from 'react';
import {FormikValues} from "formik";
import {Col, Container, Row} from "react-bootstrap";
import {nlpService} from "../service/NlpService";
import JsonView from "../view/JsonView";
import TextSearchForm from "../form/search/TextSearchForm";
import FileSubmitForm from "../form/input/FileSubmitForm";

class AdvancedSearchContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {response: {info: "Results will be shown here!"} }
        this.sendSearchRequest = this.sendSearchRequest.bind(this);
        this.sendSaveRequest = this.sendSaveRequest.bind(this);
    }

    sendSearchRequest(formData: FormikValues) {
        nlpService.findDocsByText(formData['text'],0,20).then(
            (result: string) => {
                console.log('result: ', JSON.parse(result));
                this.setState({response: JSON.parse(result)['content']})
            },
            (error) => {
                console.log("error", error);
            }
        );
    }

    sendSaveRequest(formData: FormikValues, fileBase64: string, fileName: string) {
        nlpService.saveDocInElastic(fileName, fileBase64.substr(fileBase64.indexOf(",") + 1)).then(
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
                        <TextSearchForm onSubmit={this.sendSearchRequest}/>
                    </Col>
                    <Col>
                        <FileSubmitForm onSubmit={this.sendSaveRequest} buttonText={'Save'}/>
                    </Col>
                </Row>
                < hr/>
                <Row>
                    <JsonView jsonText={this.state.response}/>
                </Row>
            </Container>
        )
    }
}

export default AdvancedSearchContainer;
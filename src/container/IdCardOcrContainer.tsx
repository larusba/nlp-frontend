import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {nlpService} from "../service/NlpService";
import JsonView from "../view/JsonView";
import IdCardSubmitForm, {IdCardSide, IdCardFile} from "../form/input/IdCardSubmitForm";

class IdCardOcrContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {response: {info: "Results will be shown here!"} }
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest(files: Map<IdCardSide, IdCardFile>) {
        console.log("sendRequestWith -> ", files)
        nlpService.processIdCard(Array.from(files.values()).map(f => f.file.base64.substr(f.file.base64.indexOf(",") + 1)), Array.from(files.keys())).then(
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
                        <IdCardSubmitForm onSubmit={this.sendRequest} buttonText={'Process IdCard'}/>
                    </Col>
                    <Col>
                        <JsonView jsonText={this.state.response}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default IdCardOcrContainer;
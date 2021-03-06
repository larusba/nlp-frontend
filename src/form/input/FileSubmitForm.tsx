import React, {Fragment} from 'react';
import {Formik, Form} from "formik";
import {Row} from "react-bootstrap";
import FileBase64 from 'react-file-base64';

class FileSubmitForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {file: null, fileReady: false};
        this.disableSubmit = this.disableSubmit.bind(this);
    }

    getFiles(files){
        this.setState({ file: files[0], fileReady: true })
    }

    disableSubmit(e) {
        e.preventDefault();
        this.setState({file: this.state.file, fileReady: false})
    }

    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{ }}
                    onSubmit={(values) => this.props.onSubmit(values, this.state.file['base64'], this.state.file['name'])}
                >
                    <Form>
                        <Row className='mt-2'>
                            <div><label htmlFor="file"><h4>File upload</h4></label></div>
                        </Row>
                        <Row className='mt-1 mb-4'>
                            <FileBase64
                                onClick={(e) => this.disableSubmit(e)}
                                multiple={ true }
                                onDone={ this.getFiles.bind(this) } />
                        </Row>
                        <Row className='mt-3 mb-2'>
                            <button type="submit" disabled={!this.state.fileReady}>{this.props.buttonText}</button>
                        </Row>
                    </Form>
                </Formik>
            </Fragment>
        )
    }
}

export default FileSubmitForm;
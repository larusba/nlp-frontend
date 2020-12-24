import React, {Fragment} from 'react';
import {Formik, Field, Form, FormikValues} from "formik";
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
        console.log("m hai toccato");
        this.setState({file: this.state.file, fileReady: false})
    }

    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{ searchType: "SENTENZA"  }}
                    onSubmit={(values) => this.props.onSubmit(values, this.state.file['base64'])}
                >
                    <Form>
                        <Row className='mt-2'>
                            <div><label htmlFor="file">File upload</label></div>
                        </Row>
                        <Row className='mt-1 mb-4'>
                            <FileBase64
                                onClick={(e) => this.disableSubmit(e)}
                                multiple={ true }
                                onDone={ this.getFiles.bind(this) } />
                        </Row>

                        <Row className='mt-2'>
                            <div><label htmlFor="searchType">Select the right file Category</label></div>
                        </Row>
                        <Row className='mt-1'>
                            <Field name="searchType" as="select">
                                <option value="SENTENZA">SENTENZA</option>
                                <option value="VISURA">VISURA</option>
                            </Field>
                        </Row>
                        <Row className='mt-3 mb-2'>
                            <button type="submit" disabled={!this.state.fileReady}>Submit</button>
                        </Row>
                    </Form>
                </Formik>
            </Fragment>
        )
    }
}

export default FileSubmitForm;
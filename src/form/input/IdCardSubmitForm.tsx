import React, {Fragment} from 'react';
import {Formik, Form} from "formik";
import {Row} from "react-bootstrap";
import FileBase64 from 'react-file-base64';

export enum IdCardSide {
    FRONT = "FRONT",
    BACK = "BACK"
}

export interface IdCardFile {
    file: any,
    fileReady?: boolean
}

class IdCardSubmitForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {files: new Map()};
        this.getFiles = this.getFiles.bind(this);
    }

    getFiles(file: any, idCardSide: IdCardSide){
        this.setState((state) => {
            state.files.set(idCardSide, {file: file, fileReady: true} as IdCardFile);
            return state;
        })
    }

    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{ }}
                    onSubmit={(values) => this.props.onSubmit(this.state.files)}
                >
                    <Form>
                        <Row className='mt-2'>
                            <div><label htmlFor="file"><h4>IdCard Front - Upload</h4></label></div>
                        </Row>
                        <Row className='mt-1 mb-4'>
                            <FileBase64
                                multiple={ false }
                                onDone={ (f) => this.getFiles(f, IdCardSide.FRONT) } />
                        </Row>
                        <Row className='mt-2'>
                            <div><label htmlFor="file"><h4>IdCard Back - Upload</h4></label></div>
                        </Row>
                        <Row className='mt-1 mb-4'>
                            <FileBase64
                                multiple={ false }
                                onDone={ (f) => this.getFiles(f, IdCardSide.BACK) } />
                        </Row>
                        <Row className='mt-3 mb-2'>
                            <button type="submit" >{this.props.buttonText}</button>
                        </Row>
                    </Form>
                </Formik>
            </Fragment>
        )
    }
}

export default IdCardSubmitForm;
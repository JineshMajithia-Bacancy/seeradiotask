import React, { useState } from "react";
import { CardBody, Card, Row, Col, Button } from "reactstrap";
import Dropzone from "react-dropzone";

const RegistrationPage3 = (props) => {
  const [scriptFileDisabled, setScriptFileDisabled] = useState(false);
  const [voiceFileDisabled, setVoiceFileDisabled] = useState(false);
  const [assetsDropDisabled, setAssetsDropDisabled] = useState(false);

  const [acceptedScriptFiles, setAcceptedScriptFiles] = useState();

  const scriptFileDropHandler = (files) => {
    console.log(files);
    setAcceptedScriptFiles(files);
    setScriptFileDisabled(true);
  };

  const voiceFileDropHandler = (files) => {
    console.log(files);
    setVoiceFileDisabled(true);
  };

  const assetsDropHandler = (files) => {
    console.log(files);
    setAssetsDropDisabled(true);
  };
  return (
    <div>
      <Card style={{ margin: "1% 1% 1% 1%", borderRadius: "10px" }}>
        <h5 style={{ color: "blue" }}>Test</h5>
        <CardBody>
          <h6 style={{ background: "lightgrey" }}>Script File</h6>
          <Row xs="1" style={{ alignContent: "center" }}>
            <Col>
              <Dropzone
                disabled={scriptFileDisabled}
                onDrop={(acceptedFiles) => scriptFileDropHandler(acceptedFiles)}
              >
                {({ getRootProps, getInputProps }) => (
                  <div style={{ borderRadius: "10px" }} {...getRootProps()}>
                    <input {...getInputProps()} />
                    {scriptFileDisabled ? (
                      <p>{JSON.stringify(acceptedScriptFiles)}</p>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>
                )}
              </Dropzone>
            </Col>
          </Row>

          <br />
          <h6 style={{ background: "lightgrey" }}>Voice File</h6>
          <Dropzone
            disabled={voiceFileDisabled}
            style={{ margin: "0 5% 5% 5%" }}
            onDrop={(acceptedFiles) => voiceFileDropHandler(acceptedFiles)}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
          <br />
          <h6 style={{ background: "lightgrey" }}>Advertisement Assets</h6>
          <Dropzone
            disabled={assetsDropDisabled}
            onDrop={(acceptedFiles) => assetsDropHandler(acceptedFiles)}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
        </CardBody>
        <div style={{ display: "flex" }}>
          <Button
            color="primary"
            style={{ marginRight: "auto" }}
            onClick={() => props.page3PreviousHandler()}
          >
            Previous
          </Button>
          <Button
            color="secondary"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            onClick={() => props.page3CancelHandler()}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            style={{ marginLeft: "auto" }}
            onClick={() => props.page3SubmitHandler()}
          >
            Done
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RegistrationPage3;

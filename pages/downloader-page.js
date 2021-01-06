import os from 'os';
import Fs from 'fs';
import Path from 'path';
import Axios from 'axios';

import { Container, Form, Jumbotron, Button } from "react-bootstrap";

function DownloaderPage({result}) {
    var handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.currentTarget.urlInput.value);
        let inputText = event.currentTarget.urlInput.value;
        fetchData(inputText)
    }

    return(
        <div>
            <Container className="downloaderContainer">
                <Jumbotron>
                    <h3>Downlaod video on cloud</h3>
                    <Form onSubmit={(e)=>handleSubmit(e)}>
                        <Form.Group>
                        <Form.Label>Enter video download url</Form.Label>
                        <Form.Control name="urlInput" type="text"></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <p>{result}</p>
                </Jumbotron>
            </Container>
        </div>
    )
  }

    function fetchData(_url){
        fetch("/fetcher?url="+_url)
            .then((res)=>{
                console.log(res);
            }).catch(err=>console.log(err));
    }
    
    // function getProgress(){
    //     fs.readFile('my-file.txt', 'utf8', function(err, data) {
    //         if (err) throw err;
    //         console.log(data);
    //     });
    // }

    
    // DownloaderPage.getInitialProps = async(ctx) => {
    //     return fetchData()
    //     .then(()=>{
    //         return { result: "Video downloaded successfully" }
    //     })
    //     .catch(err=>{
    //         return { result: "Error downloading video" }
    //     })
    // }
    

  export default DownloaderPage;
import React, { useState, useEffect } from "react";
import { Container, Figure, Fade , Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import "../css/portfolio.css";

export default function Portfolio() {


    const [loaded, setLoading] = useState(true);

    const link = "https://api.github.com/users/lagonzalez1/repos";
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data: response } = await axios.get(link);
            try {
                if(response) {
                    setLoading(false)
                    console.log(response);
                    setData(response);
                }
            } catch( error) {
                console.log(error)
            } 
        }  
        getData()
        

    }, [])
    return ( 
        <>
            <div className="container-fluid padding main">

            


                <Row>
                    <Col>
                    
                    </Col>
                </Row>

            
                <Row>
                    <Col sm={4}>
                    <div className="container-fluid head">
                    <h3 className="font-loader">Portfolio</h3>

                    <Fade timeout={500} in={!loaded}>
                        <div id="example-fade-text">
                        
                        <p className="font-loader">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                        </div>
                    </Fade>
                </div>
                    
                    
                    </Col>

                        <Col sm={8}>
                        <div className="container-fluid padding">
                            <Table striped hover variant="dark" >
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>                       
                        </Col>
                </Row>
           
            </div>
        </>
    )
}



/*
    Diplay title: Basic information about project.
    1. Dropdown menu or anything facny can be a dropdown that will make an API call to show
    README.md
*/


/*
  Data variable: contains 'name'
  Use 'name' to load all README.md  
*/


/*
To get README.md:
    GET: https://api.github.com/repos/lagonzalez1/Sentiment/contents/README.md

    1. Need to convert response to JSON
    (Depending the response, might need to access the data using a react method)
    2. responce will contain 'content' in dic. 
    3. Get value in ccontent
    4. contents will be encoded base64 
    5. Decode and this will represent HTML code.
*/
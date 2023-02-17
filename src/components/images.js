import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import axios from "axios"


const Images = (props) => {
    const [datas, setdatas] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_BASEURL}/photos`
        }).then((hasil) => setdatas(hasil.data))
    }, [])

    console.log(datas[0]);

    return (
        <React.Fragment>
            <Container className="mt-3">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </Container>
        </React.Fragment>
    )
}

export default Images
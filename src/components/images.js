import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"

const Images = (props) => {
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
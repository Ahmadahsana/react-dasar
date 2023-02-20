import axios from "axios"
import React, { useEffect, useState } from "react"
import { Carousel, Button } from "react-bootstrap";
import Loaders from "../utilities/loaders";

const Collection = () => {
    const [datas, setdatas] = useState([])
    const [limit, setlimit] = useState(400)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let getApi = false
        if (getApi === false) {

            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((hasil) => setdatas(hasil.data)).catch((err) => console.log(err)).finally(() =>
                setLoading(false))

            return () => getApi = true
        }
    }, [limit])



    const handleLimit = (option) => {
        if (option === '+') {
            setlimit((prev) => prev + 1)
            console.log(limit);
        } else if (option === '-') {
            setlimit((prev) => prev - 1)
            console.log(limit);
        }
    }

    if (loading === true) return <Loaders />

    return (
        <React.Fragment>
            <h3>{limit} Collection</h3>
            <Carousel>
                {/* carousel item */}
                {datas.map((data, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={data.url}
                                alt="First slide"
                                height={450}
                            />
                            <Carousel.Caption>
                                <h3>{data.title}</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
                {/* carousel item end */}
            </Carousel>
            <Button variant="outline-primary" onClick={() => handleLimit("+")}>+</Button>{' '}
            {limit > 1 &&
                <Button variant="outline-primary" onClick={() => handleLimit("-")}>-</Button>
            }
        </React.Fragment>
    )
}

export default Collection
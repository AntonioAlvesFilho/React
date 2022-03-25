import React from "react"
import { H1 } from "./styles"

const Title = (children) => {
    console.log(children.children)
    return <H1>{children.children}</H1>

}

export default Title
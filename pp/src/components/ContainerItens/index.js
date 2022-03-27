import React from "react";
import { ContainerItens as Container} from "./styles";

const ContainerItens = (props, blur) => {

    
    return <Container blur={blur}>{props.children}</Container>
}

export default ContainerItens
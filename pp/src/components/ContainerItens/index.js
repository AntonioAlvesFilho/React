import React from "react";
import { ContainerItens as ContainerIten} from "./styles";

const ContainerItens = (props, blur) => {

    
    return <ContainerIten blur={blur}>{props.children}</ContainerIten>
}

export default ContainerItens
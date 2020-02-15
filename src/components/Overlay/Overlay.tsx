import React, { ReactNode } from 'react'
import * as S from './Overlay.style';
interface IOverlay {
    children: ReactNode
}

const Overlay = (props: IOverlay) => {
    return (
        <S.container>
            {props.children}
        </S.container>
    )
}

export default Overlay 

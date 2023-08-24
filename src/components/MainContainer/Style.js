import { css } from "@emotion/react";

export const SContainer = (isMainSidebarShow, isRightSidebarShow) =>  {
    
    let width = 944;
    //양쪽의 사이드바가 열릴때 main의 너비를 줄임
    if(isMainSidebarShow){
        width -= 210;
    }
    if(isRightSidebarShow){
        width -= 310;
    }
    
    return css`
        position: absolute;
        transition: all 0.8s ease;
        z-index: -1;
        left: ${isMainSidebarShow ? "270px" : "60px"};
        border-radius: 10px;
        padding: 20px;
        width: ${width}px;
        height: 560px;
        background-color: #fafafa;
    `;
}; 
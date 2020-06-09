import styled from 'styled-components';

export const LoadingContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(255,255,255,0.8);
`;

export const LoadingBar = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    z-index: 9999;
`;
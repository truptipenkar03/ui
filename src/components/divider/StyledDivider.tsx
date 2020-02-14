import {Component, Orientation} from "./Divider";
import styled, {css} from "styled-components";

interface CustomProps {
    component?: Component;
    orientation?: Orientation;
    margin?: string;
    thickness?: string;
    text?: string;
    textAlign?: string;
    bgColor?: string;
    fontSize?: string;
}

interface StyledDividerProps {
    customProps: CustomProps;
    className?: string;
    height?: string;
}

export const StyledLi = styled.li<{orientation: Orientation}>`
    ${() => css`
        display: inline-block;
        vertical-align: middle;
    `};
`;

export const StyledDivider = styled.hr<StyledDividerProps>`
    ${({customProps, theme, height}) => css`
        width: 100%;
        
        ${(customProps.orientation === 'vertical') && css`
            margin: 2px 5px 0 5px;
            width: auto;
            color: ${theme.dividerBorder};
            height: inherit;

            ${(customProps.margin) && css`
              margin: 2px ${customProps.margin} 0 ${customProps.margin};
            `}
        `};
        
        ${(customProps.orientation === 'horizontal' || !customProps.orientation) && css`
            ${(customProps.margin) && css`
              margin: ${customProps.margin} 0;
              color: ${theme.dividerBorder};
            `}
        `};  
        
        ${(customProps.thickness) && css`
          border-top: ${customProps.thickness} solid ${theme.dividerBorder};
        `};   
        
        ${(customProps.thickness && customProps.orientation === 'vertical') && css`
          border-left: ${customProps.thickness} solid;
        `}; 
        
        ${(customProps.text) && css`
            position: relative;
            line-height: 2rem;
            outline: 0;
            border: 0;
            height: 2.2rem;
            text-align: center;
            border-left: 0;
            
            ${(customProps.fontSize) && css`
                line-height: ${customProps.fontSize};
                height: ${height};
            `};
            
            &:before{
                content: '';
                position: absolute;
                width: 100%;
                top: 50%;
                left: 0;
                height: 1px;
                background: linear-gradient(to right, ${theme.dividerBackground}, ${theme.dividerBackground}, ${theme.dividerBackground});
            }
            
            &:after{
                content: attr(data-content);
                position: relative;
                background: ${theme.dividerTextPrimaryBackground};
                padding: 0 .5em;
                vertical-align: middle;
            }
        `}; 
        
        ${(customProps.thickness !== '1px') && css`
            &:before{
              height: ${customProps.thickness};
            }
        `}; 
        
        ${(customProps.textAlign === 'left') && css`
            text-align: left;
            padding-left: 30px;
        `};    
        
        ${(customProps.textAlign === 'right') && css`
            text-align: right;
            padding-right: 30px;
        `};  
        
        ${(customProps.bgColor) && css`
            &:after{
                background: ${customProps.bgColor};
            }
        `}; 
        
        ${(customProps.fontSize) && css`
            &:after{
                font-size: ${customProps.fontSize};
            }
        `};        
    `};
`;
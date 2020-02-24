import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
  className?: string;
  level?: Level;
}

const StyledTitle = styled.span<TitleProps>`
  ${props => css`
    display: block;
    font-family: ${props.theme.typographyTitleFontFamily};
  
    ${props.level === 1 &&
      css`
        color: ${props.theme.typographyTitle1Color};
        font-size: ${props.theme.typographyTitle1FontSize};
        font-weight: ${props.theme.typographyTitle1FontWeight};
        letter-spacing: ${props.theme.typographyTitle1LetterSpacing};
        line-height: ${props.theme.typographyTitle1LineHeight};
      `}

    ${props.level === 2 &&
      css`
        color: ${props.theme.typographyTitle2Color};
        font-size: ${props.theme.typographyTitle2FontSize};
        font-weight: ${props.theme.typographyTitle2FontWeight};
        letter-spacing: ${props.theme.typographyTitle2LetterSpacing};
        line-height: ${props.theme.typographyTitle2LineHeight};
      `}

    ${props.level === 3 &&
      css`
        color: ${props.theme.typographyTitle3Color};
        font-size: ${props.theme.typographyTitle3FontSize};
        font-weight: ${props.theme.typographyTitle3FontWeight};
        letter-spacing: ${props.theme.typographyTitle3LetterSpacing};
        line-height: ${props.theme.typographyTitle3LineHeight};
      `}

    ${props.level === 4 &&
      css`
        color: ${props.theme.typographyTitle4Color};
        font-size: ${props.theme.typographyTitle4FontSize};
        font-weight: ${props.theme.typographyTitle4FontWeight};
        letter-spacing: ${props.theme.typographyTitle4LetterSpacing};
        line-height: ${props.theme.typographyTitle4LineHeight};
      `}

    ${props.level === 5 &&
      css`
        color: ${props.theme.typographyTitle5Color};
        font-size: ${props.theme.typographyTitle5FontSize};
        font-weight: ${props.theme.typographyTitle5FontWeight};
        letter-spacing: ${props.theme.typographyTitle5LetterSpacing};
        line-height: ${props.theme.typographyTitle5LineHeight};
      `}

    ${props.level === 6 &&
      css`
        color: ${props.theme.typographyTitle6Color};
        font-size: ${props.theme.typographyTitle6FontSize};
        font-weight: ${props.theme.typographyTitle6FontWeight};
        letter-spacing: ${props.theme.typographyTitle6LetterSpacing};
        line-height: ${props.theme.typographyTitle6LineHeight};
      `}
  `}
`;

export const Title: React.FunctionComponent<TitleProps> = ({
  children,
  className,
  level,
}) => {
  const theme = useTheme();

  return (
    <StyledTitle
      className={`${className} rtk-type-title-h${level}`}
      theme={theme}
      level={level}
    >
      {children}
    </StyledTitle>
  );
};

Title.defaultProps = {
  level: 1,
};

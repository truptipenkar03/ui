import * as React from "react";
import { MouseEventHandler } from "react";
import { ButtonType } from "./Button";
interface StyledButtonProps {
    buttonType?: ButtonType;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    ref?: React.Ref<HTMLButtonElement>;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export {};

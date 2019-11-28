import * as React from 'react';
import { MotionProps } from "framer-motion";
import { MouseEventHandler } from "react";
export declare type ButtonType = 'primary' | 'ghost' | 'link';
export interface ButtonProps {
    /** Type of the button */
    type?: ButtonType;
    /** Content to show in the button */
    children?: React.ReactNode;
    /** classname for the button */
    className?: string;
    /** Disabled state of the button */
    disabled?: boolean;
    /** HTML Type of the button */
    htmlType?: string;
    /** Loading state of the button */
    loading?: boolean;
    /** Loading icon of the button */
    loadingIcon?: React.ReactNode;
    /** Motion configuration for loading icon */
    motionConfig?: MotionProps;
    /** Function to handle click event */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /** Ref to be passed to the button */
    ref?: React.Ref<HTMLButtonElement>;
}
export declare const Button: React.FunctionComponent<ButtonProps>;

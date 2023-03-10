import React from 'react';
import { HsvaColor } from '@uiw/color-convert';
export declare type SwatchPresetColor = {
    color: string;
    title?: string;
} | string;
export declare type SwatchRectRenderProps = {
    key: string | number;
    title: string;
    color: string;
    checked: boolean;
    disabled: boolean;
    style: React.CSSProperties;
    onClick: (evn: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export interface SwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
    prefixCls?: string;
    color?: string;
    colors?: SwatchPresetColor[];
    rectProps?: React.HTMLAttributes<HTMLDivElement>;
    rectRender?: (props: SwatchRectRenderProps) => JSX.Element;
    onChange?: (hsva: HsvaColor) => void;
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
}
declare const Swatch: React.ForwardRefExoticComponent<SwatchProps & React.RefAttributes<HTMLDivElement>>;
export default Swatch;

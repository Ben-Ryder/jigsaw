import React, { ComponentProps } from 'react';
import classNames from 'classnames';

export type ButtonVariant = 'solid' | 'outline';
export type ButtonStyling = 'primary' | 'secondary' | 'constructive' | 'destructive';
export type ButtonStatus = 'normal' | 'awaiting' | 'disabled';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  styling?: ButtonStyling;
  status?: ButtonStatus;
}

export function processButtonStyling(props: ButtonProps) {
  const variant = props.variant ?? 'solid';
  const styling = props.styling ?? 'primary';
  const status = props.status ?? 'normal';

  return classNames(
    props.className,
    "px-3 py-2 rounded-md border-2",
    "transition-colors",
    {
      // Status Styling
      'bg-br-whiteGrey-700 text-br-whiteGrey-700': status !== 'normal',

      // Border Colours
      'border-br-teal-600 hover:border-br-teal-700': status === 'normal' && styling === 'primary',
      'border-br-white-50 hover:border-br-white-500': status === 'normal' && styling === 'secondary',
      'border-br-green-700 hover:border-br-green-800': status === 'normal' && styling === 'constructive',
      'border-br-red-600 hover:border-br-red-700': status === 'normal' && styling === 'destructive',

      // Solid Styling
      'bg-br-teal-600 text-br-white-50 hover:bg-br-teal-700': status === 'normal' && variant === 'solid' && styling === 'primary',
      'bg-br-white-50 text-black hover:bg-br-white-500': status === 'normal' && variant === 'solid' && styling === 'secondary',
      'bg-br-green-700 text-white hover:bg-br-green-800': status === 'normal' && variant === 'solid' && styling === 'constructive',
      'bg-br-red-600 text-white hover:bg-br-red-700': status === 'normal' && variant === 'solid' && styling === 'destructive',

      // Outline Styling
      'text-br-teal-600 hover:text-br-teal-700': status === 'normal' && variant === 'outline' && styling === 'primary',
      'text-br-white-50 hover:text-br-white-500': status === 'normal' && variant === 'outline' && styling === 'secondary',
      'text-br-green-700 hover:text-br-green-800': status === 'normal' && variant === 'outline' && styling === 'constructive',
      'text-br-red-600 hover:text-br-red-700': status === 'normal' && variant === 'outline' && styling === 'destructive',
    },
  );
}


export function Button(props: ButtonProps) {
  const {className, ...passThroughProps} = props;
  const processedClassName = processButtonStyling(props);

  return (
    <button className={processedClassName} {...passThroughProps} />
  )
}
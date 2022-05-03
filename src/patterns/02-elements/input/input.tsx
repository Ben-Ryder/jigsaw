import React, { ComponentProps, forwardRef } from 'react';
import classNames from "classnames";

import { ErrorText } from "../error-text/error-text";
import { Label } from '../label/label';

export interface InputProps extends ComponentProps<'input'> {
  id: string,
  label: string,
  error?: string,
  hideLabel?: boolean,
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {hideLabel, error, label, ...passThroughProps} = props;

  return (
    <>
      {props.label && props.id &&
          <Label htmlFor={props.id} isHidden={props.hideLabel || false}>{ props.label }</Label>
      }
      <input
        {...passThroughProps}
        className={classNames(
          "mt-1 block w-full rounded-md outline-none py-1.5 bg-br-atom-700",
          "border-2 text-br-whiteGrey-200",
          "focus:ring-0 focus:border-br-teal-600",
          {
            "border-br-red-500 hover:border-br-red-600": props.error,
            "border-br-blueGrey-600 hover:border-br-blueGrey-500": !props.error
          },
          props.className,
        )}
      />
      {props.error &&
          <ErrorText>{props.error}</ErrorText>
      }
    </>
  )
});
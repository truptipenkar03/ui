import * as React from 'react';

import {
  useTheme
} from "../../hooks";

import {
  Affix,
  AffixContainer,
  Container,
  Label,
  Status,
  StyledInput
} from "./StyledInput";

import {
  Icon
} from '../icons';

import {AnimatePresence, motion} from "framer-motion";

export type BorderType = 'full' | 'bottom' | 'none';
export type InputSize = 'small' | 'default' | 'large';
export type ValidationStatus = 'success' | 'error' | 'default' | 'loading';

export interface InputProps {

  /** Type of border for the input */
  borderType?: BorderType;

  /** classname for the input */
  className?: string;

  /** Default value of the input */
  defaultValue?: string;

  /** Disabled state of the input */
  disabled?: boolean;

  /** HTML input type attribute */
  htmlType?: 'text' | 'number' | 'date' | 'password';

  /** id of the input to be used with Formik */
  id?: string;

  /** Content to show inside the input to the left */
  inputPrefix?: React.ReactNode;

  /** Content to show inside the input to the right */
  inputSuffix?: React.ReactNode;

  /** Label of the input */
  label?: React.ReactNode;

  /** Function to handle blur event */
  onBlur?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle click event */
  onClick?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle change event */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** Function to handle focus event */
  onFocus?: React.EventHandler<React.SyntheticEvent>;

  /** Placeholder for the input */
  placeholder?: string;

  /** name of the input to be used with Formik */
  name?: string;

  /** Size of input */
  size?: InputSize;

  /** Ref to be passed to the input */
  ref?: React.Ref<HTMLInputElement> | null;

  /** Disables typing in the input but keeps focus */
  readOnly?: boolean;

  /** value of the input */
  value?: string;

  /** Validation status to provide feedback to the user */
  validationStatus?: ValidationStatus;

  /** Message to show along with the `validationStatus` */
  validationMessage?: string;

  /** Custom component used to display the validation message */
  validationComponent?: (error: string) => React.ReactNode;
}


export const Input: React.FunctionComponent<InputProps> = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    defaultValue,
    htmlType,
    id,
    label,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    placeholder,
    size,
    inputPrefix,
    inputSuffix,
    borderType,
    readOnly,
    value,
    validationMessage,
    validationComponent,
    validationStatus
  } = props;

  const theme = useTheme();

  const getIconDims = React.useCallback(() => {
    switch(size) {
      case 'small': {
        return theme.inputSmallFontSize;
      }
      case 'large': {
        return theme.inputLargeFontSize;
      }
      case 'default': {
        return theme.inputDefaultFontSize;
      }
    }
  }, [size, theme]);

  const renderSuffix = React.useCallback(() => {
    let suffixContent;
    switch (validationStatus) {
      case 'error': {
        suffixContent = <div>E</div>;
        break;
      }
      case 'success': {
        suffixContent = <div>S</div>;
        break;
      }
      case 'loading': {
        const iconDim = getIconDims();
        suffixContent = (
          <Icon.Loading
            height={`${iconDim}px`}
            width={`${iconDim}px`}
          />
        );
        break;
      }
      case 'default': {
        suffixContent = inputSuffix;
        break;
      }
    }

    if (!inputSuffix && validationStatus === 'default') {
      return null;
    }

    return (
      <Affix
        theme={theme}
        inputSize={size}
      >
        {suffixContent}
      </Affix>
    )
  }, [validationStatus, inputSuffix, theme, size, getIconDims]);

  return (
    <Container className={`${className} rtk-input`}>
      {label && (
        <Label
          theme={theme}
        >
          {label}
        </Label>
      )}
        <AffixContainer>
          {inputPrefix && (
            <Affix
              inputSize={size}
              theme={theme}
              isPrefix
            >
              {inputPrefix}
            </Affix>
          )}
          {renderSuffix()}
        </AffixContainer>
        <StyledInput
          label={null}
          disabled={disabled}
          defaultValue={defaultValue}
          type={htmlType}
          id={id}
          name={name}
          onBlur={onBlur}
          onClick={onClick}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          borderType={borderType}
          inputSize={size}
          inputSuffix={inputSuffix}
          inputPrefix={inputPrefix}
          ref={ref}
          readOnly={readOnly}
          theme={theme}
          value={value}
          validationStatus={validationStatus}
        />
        <div style={{ height: '15px' }}>
          <AnimatePresence>
            {validationMessage &&
              <motion.div
                style={{ position: 'relative' }}
                initial={{ opacity: 0, top: -5 }}
                animate={{ opacity: 1, top: 0 }}
                exit={{ opacity: 0, top: -5 }}
                transition={{ duration: 0.1 }}
              >
                {validationComponent ?
                  validationComponent(validationMessage) :
                  <Status
                    validationStatus={validationStatus}
                    theme={theme}
                  >
                    {validationMessage}
                  </Status>
                }
              </motion.div>
            }
          </AnimatePresence>
        </div>
    </Container>
  );
});

Input.defaultProps = {
  borderType: 'full',
  className: '',
  disabled: false,
  defaultValue: undefined,
  htmlType: undefined,
  id: undefined,
  name: undefined,
  label: '',
  onBlur: undefined,
  onClick: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: '',
  size: 'default',
  readOnly: false,
  value: undefined,
  validationStatus: 'default'
};

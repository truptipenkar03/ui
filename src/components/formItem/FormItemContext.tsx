import * as React from 'react';

export interface FormItemContextProps {
  message?: React.ReactNode;
  status?: 'error' | 'warning' | 'success' | 'loading';
}

export const FormItemContext = React.createContext<FormItemContextProps>({});

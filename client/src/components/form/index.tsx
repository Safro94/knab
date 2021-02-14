import { FC } from 'react';

const Form: FC<React.HTMLProps<HTMLFormElement>>
  & { Submit: React.FunctionComponent<React.HTMLProps<HTMLButtonElement>> }
  & { TextInput: React.FunctionComponent<React.HTMLProps<HTMLInputElement>> }
= ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>;
};

const TextInput: FC<React.HTMLProps<HTMLInputElement>> = ({ ...rest }) => {
  return (
    <input type='text' {...rest} />
  );
};

const Submit: FC<React.HTMLProps<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button {...rest} type='submit'>
      {children}
    </button>
  );
};

Form.TextInput = TextInput;
Form.Submit = Submit;

export default Form

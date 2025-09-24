import { InputContainer, IconContainer, StyledInput } from "./styles";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <InputContainer>
       {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <StyledInput {...rest} />
    </InputContainer>
  );
};

export { Input };
import { ButtonContainer, ButtonVariant } from "./Button.styles"

interface ButtonsProps {
    variant?: ButtonVariant
}

export function Button({variant= 'primary'}: ButtonsProps) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
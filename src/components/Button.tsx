interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({ color = 'primary' }: ButtonProps) {
  return <button className={color}>Send!</button>
}

import { BtnContainer, ButtonBege, ButtonOrange } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <BtnContainer>
        <ButtonBege type="button" title={title} onClick={onClick}>
          {children}
        </ButtonBege>
      </BtnContainer>
    )
  }

  return (
    <ButtonOrange to={to as string} title={title}>
      {children}
    </ButtonOrange>
  )
}

export default Button

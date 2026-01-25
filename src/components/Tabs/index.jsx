import Section from '../Section'

const TabButtons = ({children, buttons, buttonsContainer}) => {
  const ButtonsContainer = buttonsContainer;
  return (
    <Section id="examples" title="Examples">
        <ButtonsContainer>
          {buttons}
        </ButtonsContainer>
        {children}
      </Section>
  )
}

export default TabButtons;
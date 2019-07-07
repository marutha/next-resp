import {
  ThemeProvider,
  default as styled,
} from 'styled-components';

import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system'

import theme, { globalCSS as Style } from '../components/Theme';

const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0,
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Style />
          <Box px={[3, 4]} py={[5, 6]} color="white" bg={["blue.1", "blue.2", "blue.3", "blue.4"]}>
            <Heading fontSize={[5, 6, 7, 8]}>Styled-system</Heading>
            <Text fontWeight="bold">Basic demo</Text>
          </Box>
        </Root>
      </ThemeProvider>
    )
  }
}

export default App

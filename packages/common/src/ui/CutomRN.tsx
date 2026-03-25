import * as ReactNative from 'react-native'

// standard default       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,                    Helvetica, Arial, sans-serif'
const defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Liberation Sans", Helvetica, Arial, sans-serif'

const hasFontFamily = (style: ReactNative.TextProps['style']): boolean =>  {

  if (!style) {
    return false
  } else if (Array.isArray(style)) {
    return style.filter((item) => item && 'fontFamily' in item).length > 0
  } else {
    return !!style.fontFamily
  }
}

export const Text: React.FC<ReactNative.TextProps> = ({ children, ...props }) => {

  const isHasFontFamily = hasFontFamily(props?.style)

  if (isHasFontFamily) {
    return (
      <ReactNative.Text {...props}>{children}</ReactNative.Text>
    )
  } else {
    const { style, ...restProps } = props
    let newStyle

    if (Array.isArray(style)) {
      newStyle = [ ...style, { fontFamily: defaultFontFamily } ]
    } else if (style) {
      newStyle = [ style, { fontFamily: defaultFontFamily } ]
    } else {
      newStyle = { fontFamily: defaultFontFamily }
    }

    return (
      <ReactNative.Text {...restProps} style={newStyle}>{children}</ReactNative.Text>
    )
  }
};

// Button doesn't have property style
export const Button: React.FC<ReactNative.ButtonProps> = (props) => {
    const { title, ...restProps } = props

    return (
      <ReactNative.View>
        <ReactNative.TouchableOpacity {...restProps}>
          <Text>{title}</Text>
        </ReactNative.TouchableOpacity>
      </ReactNative.View>
    )
};

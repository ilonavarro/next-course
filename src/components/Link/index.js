import NextLink from 'next/link'
import { Text } from '../../theme/components'
function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Text as='a' {...props}>
        {children}
      </Text>
    </NextLink>
  )
}

export default Link

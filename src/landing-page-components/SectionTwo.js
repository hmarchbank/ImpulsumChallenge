import { Box, Text, Flex, Image } from '@cmpsr/components'

const SectionTwo = (() => {
    return(
    <Box background="background-page" color="#fff" pb="spacer-32">
        <Text textStyle="text-header-2XL" pt="spacer-24">We have got what you need</Text>
        <Text textStyle="text-body-regular" pt="spacer-4" pr={['spacer-8', 'spacer-0']} pl={['spacer-8', 'spacer-0']}>Learn more about the amazing features our team is developing.</Text>
        <Flex justifyContent="spaceEvenly" flexDirection={['column', 'row']} textAlign="start" pt="spacer-32">
            <Box ml={['spacer-4', "spacer-32"]} mr={['spacer-4', "spacer-8"]} width={['spacer-0', "40%"]}>
                <Image src="../images/DesignSystemTool.svg"/>
                <Text pl={['spacer-4', "spacer-8"]} pr={['spacer-4', "spacer-16"]} pt="spacer-4" textStyle="text-header-XL">Apply your Brand Identity into our <Text as="span" color="text-link-primary-default">Design System Tool</Text></Text>
                <Text pl={['spacer-4', "spacer-8"]} pr={['spacer-4', "spacer-16"]} pt="spacer-4" textStyle='text-body-regular'>We have created the most flexible Design System tool to enable you to 
                    easily deploy your brand colour scheme, fonts, images, and style into it to create your
                    personalized Theme, or if you need it multi-brand themes!
                </Text>
            </Box>
            <Box mr={['spacer-4', "spacer-32"]} ml={['spacer-4', "spacer-8"]} width={['spacer-0', "40%"]} pt={['spacer-28', 'spacer-0']}>
                <Image src="../images/ComponentCatalog.svg" />
                <Text pl={['spacer-4', "spacer-8"]} pr={['spacer-4', "spacer-16"]} pt="spacer-4" textStyle="text-header-XL">Get our perfect branded and coded <Text as="span" color="text-link-primary-default">Component Catalog</Text></Text>
                <Text pl={['spacer-4', "spacer-8"]} pr={['spacer-4', "spacer-16"]} pt="spacer-4" textStyle='text-body-regular'>
                    Once your brand themeing is applied you can rapidly launch modern experiences with a space
                    grade React component catalog based on the ubiquitous open-source Chakra-UI library.
                </Text>
            </Box>
        </Flex>
    </Box>
    )
})

export default SectionTwo


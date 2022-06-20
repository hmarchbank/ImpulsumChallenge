import { Flex, Box, Image, Text, Button, IconArrowRight, Link } from '@cmpsr/components'

const Footer = () => {
    return(
    <Box>
    <Flex justifyContent="space-evenly" flexDirection={['column', 'row']} mr={['spacer-0', "spacer-28"]} textAlign='start'>
        <Box width={['null', "20%"]} ml={['spacer-8', 'spacer-0']}>
            <Image src="../images/Github.svg" />
            <Text textStyle="text-header-L" pt="spacer-4">
                Composer is open-sourced on GitHub. You're welcome to contribute.
            </Text>
            <Button borderRadius='radii-6'color="accent-default" mt="spacer-4" background='text-button-accent'>
                Contribute on GitHub<IconArrowRight/>
            </Button>
        </Box>
        <Box width={['null', "20%"]} ml={['spacer-8', 'spacer-0']} mt={['spacer-8', 'spacer-0']}>
            <Image src="../images/Figma.svg" />
            <Text textStyle="text-header-L" pt="spacer-4">
                Composer is part of the Figma community. Visit us with handle @impulsum
            </Text>
            <Button borderRadius='radii-6' color="accent-default" background='text-button-accent' mt="spacer-4">
                Contribute on Figma<IconArrowRight/>
            </Button>
        </Box>
        <Box width={['null', "20%"]} ml={['spacer-8', 'null']} mt={['spacer-8', 'spacer-0']}>
            <Text textStyle="text-header-M" pt="spacer-12">Keep in touch</Text>
            <Text textStyle="text-link-body-small" pt="spacer-4"><Link>Share feedback on GitHub</Link></Text>
            <Text textStyle="text-link-body-small" pt="spacer-4"><Link>Find us on LinkedIn</Link></Text>
            <Text textStyle="text-link-body-small" pt="spacer-4"><Link>Meet the crew on Instagram</Link></Text>
        </Box>
    </Flex>
    <Flex pt="spacer-48" pb="spacer-12" justifyContent="space-between" alignItems="center" flexDirection={['column', 'row']}>
        <Text ml={['spacer-4', "spacer-32"]} mr={['spacer-4, spacer-0']} textStyle="text-body-regular">
            © 2022 Composer. Proudly powered by <Text as="span" color="text-link-primary-default">Impulsum Venture Colab.</Text> All Rights Reserved. <Link color="text-link-primary-default">Privacy Policy</Link></Text>
        <Image mt={['spacer-16', 'spacer-0']} mr={['spacer-0', "spacer-32"]} src="../images/ComposerLogo.svg"/>
    </Flex>
    </Box>
    )
}

export default Footer
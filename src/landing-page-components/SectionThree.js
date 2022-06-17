import { Box, Text, Button, IconArrowRight } from '@cmpsr/components'

const SectionThree = ( () =>{
    return(
        <Box pb="spacer-32">
            <Box background="text-button-accent" ml={['spacer-4', "spacer-32"]} mr={['spacer-4', "spacer-32"]} mt="spacer-32" p={['spacer-8', "spacer-20"]} textAlign={['center', "start"]}>
                <Text textStyle="text-header-3XL">
                    Ready to depoy more and better products?
                </Text>
                <Button mt="spacer-8" borderRadius='radii-6'color="text-button-accent" mr={['spacer-0', 'spacer-16']} background='accent-default'>
                    Request your free demo <IconArrowRight/>
                </Button>
            </Box>
        </Box>
    )
})

export default SectionThree
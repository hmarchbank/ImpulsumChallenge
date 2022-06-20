import { Text, IconArrowRight, Flex, Image } from '@cmpsr/components'
import {Button} from "@chakra-ui/react"
import './Header.css'

const Header = (() => {
    return(
        <main className='body'>
        <Flex pt='spacer-8' justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
                <Image background='background-dark'  ml={['spacer-4', "spacer-16"]} src='../images/ComposerLogo.svg'/>
                <Text  textStyle='text-header-L' display={['none', 'block']} color='accent-default'>Composer</Text>
            </Flex>
            <Button mr={['spacer-4', 'spacer-16']} borderRadius='radii-6'color="accent-default" background='text-button-accent' >Request your free demo <IconArrowRight/></Button>
        </Flex>
            <Text pt='spacer-24' ml={['spacer-4', 'spacer-52']} mr={['spacer-4', 'spacer-52']} textStyle='text-header-4XL' color='accent-default'>
                Deploy modern web experiences with the smartest web buider
            </Text>
            <Text ml={['spacer-4', 'spacer-86']} mr={['spacer-4', 'spacer-86']} mt='spacer-8'textStyle='text-body-regular'>
                Introducing Composer - the most advanced web and landing page builder for non-programmers that helps 
                you to speed up your digital production processes.
            </Text>
            <Button mt='spacer-8'borderRadius='radii-6'color="accent-default" background='text-button-accent'>Request your free demo <IconArrowRight/></Button>
        </main>
)})

export default Header
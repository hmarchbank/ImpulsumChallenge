import { Flex, Box, Image, Text, IconArrowRight, TextPairing } from '@cmpsr/components'

const SectionOne = () => {

    console.log(TextPairing)
    console.log(Text)
    return (
        <>
            <Flex ml={['spacer-4', 'spacer-32']} mt="spacer-28" mr={['spacer-4', 'spacer-16']} alignItems="center" flexDirection={["column-reverse", "row"]}>
                <Image src='../images/Business.svg'/>
                <Box mr="spacer-32rem" textAlign={['center', 'start']}>
                    <Text mt='spacer-4' textStyle="text-body-bold" color="text-link-primary-default">For Startups & Business Owners</Text>
                    <Text mt='spacer-4' textStyle="text-header-2XL" color="accent-default">We support the way you run your business</Text>
                    <Text mt='spacer-4' textStyle="text-body-regular">
                        With our drag-and-drop web editor and customizable professional templates that fit 
                        your brand, you'll be online in no time. 
                    </Text>
                    <TextPairing variant='textpairing-body-display-2XL'
                    label="Hello"
                    >
                        <Text part='label'>
                            Hello
                        </Text>
                    </TextPairing>
                </Box>
            </Flex>

            <Flex ml={['spacer-4', 'spacer-48']} mr={['spacer-4', 'spacer-32']} pb='spacer-32' alignItems="center" flexDirection={['column', 'row']}>
                <Box  textAlign={['center', "start"]}>
                    <Text mt='spacer-4' textStyle="text-body-bold" color="text-link-primary-default">For Marketing Experts</Text>
                    <Text mt='spacer-4' textStyle="text-header-2XL" color="accent-default">Get better conversion rates</Text>
                    <Text mt='spacer-4' textStyle="text-body-regular">
                        We help you create high-converting landing pages, engaging popups, integrated SEO, and social media
                        integrations to reach a wider audience and optimize conversion rates using precise and customized A/B testing,
                        and analytical insights.
                    </Text>
                    <TextPairing variant='textpairing-body-display-2XL'
                    label="Hello"
                    >
                        <Text part='label'>
                            Hello
                        </Text>
                    </TextPairing>
                </Box>
                <Image src='../images/Marketing.svg'/>
            </Flex>
        </>
    )
}

export default SectionOne
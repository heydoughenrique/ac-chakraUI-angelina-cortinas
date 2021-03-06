import { Box, Container, SimpleGrid, Stack, Text, IconButton, Input, Button, Image } from "@chakra-ui/react"

import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Footer() {
    return (
        <Box bg="secondary.100"
            color="neutral.900">
            <Container as={Stack} maxW={1280} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>

                    <Stack spacing={0}>
                        <Box>
                            <Image src="/images/logo.png" alt="Logo Angelina Cortinas" boxSize="150px" objectFit="contain" />
                        </Box>
                        <Text size="b_small">
                            Somos uma herança de gerações apaixonadas por cortinas e persianas sob medidas.
                        </Text>

                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text as="h4">Atendimento</Text>
                        <Text size="b_small">Segunda à Sexta das 9h às 18h.</Text>
                        <Text size="b_small">Sábados das 9h às 14h.</Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text as="h4">Contato</Text>
                        <Text size="b_small">contato@angelinacortinas.com.br</Text>
                        <Text size="b_small">R. Padre Chico, 362 - Perdizes, São Paulo</Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text as="h4">Increva-se em nossa newsletter</Text>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg="white"
                                border={0}
                                _focus={{
                                    bg: 'primary.500',
                                }}
                            />
                            <IconButton
                                bg="primary.500"
                                color="white"
                                _hover={{
                                    bg: 'primary.600',
                                }}
                                aria-label="Subscribe"
                                icon={<FaFacebook />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box >
    )
}
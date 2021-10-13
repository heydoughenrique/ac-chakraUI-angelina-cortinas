import { Flex, Box, Text, Image } from "@chakra-ui/react"

export function Testimonials() {
    return (
        <Flex align="flex-start" mx="auto" py={["5", "20"]} flexDirection={["column", "row"]} maxW={["80%", "1080"]}>
            <Flex py={["10", "0"]}>
                <Image
                    borderRadius="full"
                    boxSize="100px"
                    src="/images/customer-1.png"
                    alt="Foto de cliente da Angelina Cortinas"
                />
                <Box ml={4}>
                    <Text as="h4">Samuel Santos</Text>
                    <Text size="b_small">
                        “Excelente! Desde o atendimento até o início da negociação. Recebi muitas sugestões, desde cores a valores. Entrega no prazo fornecido.
                    </Text>
                </Box>
            </Flex>
            <Flex py={["10", "0"]}>
                <Image
                    borderRadius="full"
                    boxSize="100px"
                    src="/images/customer-2.png"
                    alt="Foto de cliente da Angelina Cortinas"
                />
                <Box ml={4}>
                    <Text as="h4">Marcelo Schwartz</Text>
                    <Text size="b_small">
                        “Fiquei impressionado com a atenção no atendimento e pontualidade na entrega e instalação. Muito satisfeito. Estão de parabéns.
                    </Text>
                </Box>
            </Flex >
            <Flex py={["10", "0"]}>
                <Image
                    borderRadius="full"
                    boxSize="100px"
                    src="/images/customer-3.png"
                    alt="Foto de cliente da Angelina Cortinas"
                />
                <Box ml={4}>
                    <Text as="h4">Nathalia Guedes</Text>
                    <Text size="b_small">
                        Ótimo atendimento, entrega no prazo, pessoas simpáticas e trabalho bem feito. Ficamos super contentes e repetiriamos a escolha. Parabéns :)
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}
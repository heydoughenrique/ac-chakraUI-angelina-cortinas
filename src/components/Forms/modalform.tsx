import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

import React, { useState } from 'react'

export function ModalForm() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')


    const [adgroupid, setAdgroupid] = useState('')
    const [campaignid, setCampaignid] = useState('')

    const [isSent, setIsSent] = useState(false)

    const submit = e => {
        e.preventDefault()
        fetch(`https://hooks.zapier.com/hooks/catch/3660927/bte5w7a/`, {
            method: 'POST',
            body: JSON.stringify({ name, mail, phone, adgroupid, campaignid }),
        }).then(() => setIsSent(true)).catch(() => alert("There was an error, please try again"))
    }

    return (
        <Flex
            as="form"
            action="https://hooks.zapier.com/hooks/catch/8297333/btlja79/"
            method="post"
            onSubmit={submit}

            flexDirection="column"
            w="100%"
            minH="40vh"
            maxWidth={["100%", "980px"]}
            bg="white"
            p="8"
            borderRadius={8}
            color="neutral.500"

        >
            <FormControl id="email" pb={["0", "2rem"]}>
                <FormLabel>Nome</FormLabel>
                <Input
                    name="name"
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome"
                    onChange={e => setName(e.target.value)}

                    variant="flushed"
                    fontFamily="DM Sans"
                    fontSize="large"
                />

            </FormControl >
            <FormControl id="email" pb={["0", "2rem"]}>
                <FormLabel>Seu melhor email</FormLabel>
                <Input
                    name="email"
                    type="mail"
                    placeholder="exemplo@email.com.br"
                    label="E-mail"
                    onChange={e => setMail(e.target.value)}

                    variant="flushed"
                    fontFamily="DM Sans"
                    fontSize="large"
                />
            </FormControl>
            <FormControl id="email">
                <FormLabel>Telefone</FormLabel>
                <Input
                    name="phone"
                    type="number"
                    placeholder="(11) 9 9900-9000"
                    label="Telefone"
                    onChange={e => setPhone(e.target.value)}

                    variant="flushed"
                    fontFamily="DM Sans"
                    fontSize="large"
                />
            </FormControl>
            <Button id="submited" type="submit" size="md" variant={isSent ? "successful" : "solid"} mt={["6", "8"]} mb={["0", "2rem"]}>{isSent ? 'Atendimento solicitado!' : 'Iniciar Atendimento'}</Button>
        </Flex>

    )
}
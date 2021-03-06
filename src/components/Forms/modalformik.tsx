import * as React from "react";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";

export default function ModalFormik() {
  const { query } = useRouter();

  function validateName(value) {
    let error;
    if (!value) {
      error = "Como devemos te chamar?";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email inválido. ";
    }
    return error;
  }

  function validatePhone(value) {
    let error;
    if (!value) {
      error = "Verifique o número.";
    }
    return error;
  }

  return (
    <>
      <Formik
        initialValues={{
          // name: "",
          campaignId: query.campaignid,
          adgroupId: query.adgroupid,
        }}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            fetch(`https://hooks.zapier.com/hooks/catch/3660927/bte5w7a/`, {
              method: "POST",
              body: JSON.stringify(values, null, 2),
            }),
              3000,
              // alert(JSON.stringify(values, null, 2))
              // actions.setSubmitting(false),
              (window.location.href = "https://bit.ly/3GkyZzH");
            // window.open(
            //     'https://bit.ly/32BJlNx',
            //     '_blank'
            // )
          });
        }}
      >
        {(props) => (
          <Flex
            flexDirection="column"
            w="100%"
            minH="40vh"
            maxWidth={["100%", "980px"]}
            bg="white"
            p="6"
            borderRadius={8}
            color="neutral.500"
          >
            <Form id="modal">
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    py="3"
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nome</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Digite seu nome"
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    py="3"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Seu melhor email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="exemplo@email.com.br"
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="phone" validate={validatePhone}>
                {({ field, form }) => (
                  <FormControl
                    py="3"
                    isInvalid={form.errors.phonel && form.touched.phone}
                  >
                    <FormLabel htmlFor="phone">Telefone</FormLabel>
                    <Input
                      {...field}
                      id="phone"
                      placeholder="(11) 9 9900-9000"
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="needs" validate={validatePhone}>
                {({ field, form }) => (
                  <FormControl
                    py="3"
                    isInvalid={form.errors.phonel && form.touched.needs}
                  >
                    <FormLabel htmlFor="needs">O que você deseja?</FormLabel>
                    <Input
                      {...field}
                      h={100}
                      as="textarea"
                      id="needs"
                      placeholder="Digite o que você procura..."
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.needs}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="campaignid">
                {({ field, form }) => (
                  <FormControl display="none">
                    <Input
                      {...field}
                      type="hidden"
                      id="campaignid"
                      value={props.values.campaignId}
                      readOnly
                      placeholder="CampaignId"
                      variant="flushed"
                      fontSize="large"
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="adgroupid">
                {({ field, form }) => (
                  <FormControl display="none">
                    <Input
                      {...field}
                      type="hidden"
                      id="adgroupid"
                      value={props.values.adgroupId}
                      readOnly
                      placeholder="adgroupId"
                      variant="flushed"
                      fontSize="large"
                    />
                  </FormControl>
                )}
              </Field>

              <Button
                id="submited"
                isLoading={props.isSubmitting}
                type="submit"
                leftIcon={<BsWhatsapp />}
                mt={["6", "6"]}
                mb={["6", "6"]}
                minW="auto"
                p="2rem"
              >
                Iniciar atendimento
              </Button>
            </Form>
          </Flex>
        )}
      </Formik>
    </>
  );
}

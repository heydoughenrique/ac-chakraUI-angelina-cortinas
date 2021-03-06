import { Container, Flex, forwardRef } from "@chakra-ui/react";

export const layout = {
  // Used for sections
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem", // 224px
    "2xs": "16rem", // 256px
    xs: "20rem", // 320px
    sm: "24rem", // 384px
    md: "28rem", // 448px
    lg: "32rem", // 512px
    xl: "36rem", // 576px
    "2xl": "42rem", // 672px
    "3xl": "48rem", // 768px
    "4xl": "56rem", // 896px
    "5xl": "64rem", // 1024px
    "6xl": "72rem", // 1152px
    "7xl": "80rem", // 1280px
    "8xl": "90rem", // 1440px
    // Used for Container
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
};

export const Section = forwardRef((props, ref) => (
  <Flex as="section" w="full" {...props}>
    <Container
      as={Flex}
      flexDir={["column", "row"]}
      align={["stretch", "center"]}
      justifyContent="space-between"
      maxW={["full", "container.xl"]}
      px={["8", "16"]}
      {...props}
    />
  </Flex>
));

export const HalfSection = forwardRef((props, ref) => (
  <Flex as="section" w="full" {...props}>
    <Container
      as={Flex}
      flexDir="row"
      justifyContent="flex-start"
      maxW={["full", "container.xl"]}
      px={["8", "12"]}
      {...props}
    />
  </Flex>
));

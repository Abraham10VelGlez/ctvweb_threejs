import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    VStack,
    Text,
    Link,
} from '@chakra-ui/react';

export default function Login() {



    return (
        <>
            <Box w="100%" maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="md" boxShadow="md">
                <Heading mb={6} textAlign="center">
                    Iniciar Sesión
                </Heading>
                <form>
                    <VStack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Correo Electrónico</FormLabel>
                            <Input type="email" placeholder="tuemail@ejemplo.com" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" placeholder="Contraseña" />
                        </FormControl>
                        <Button colorScheme="teal" type="submit" width="full">
                            Iniciar Sesión
                        </Button>
                    </VStack>
                </form>
                <Text mt={4} textAlign="center">
                    ¿No tienes una cuenta?{' '}
                    <Link color="teal.500" href="#">
                        Regístrate aquí
                    </Link>
                </Text>
            </Box>
        </>



    );
}

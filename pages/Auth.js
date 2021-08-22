import React from 'react'
import { Button, Input } from 'reactstrap';
// import { Input } from '@chakra-ui/input';
import { Container, Heading, Stack, Center } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box, 
  CloseButton,
  Text
} from "@chakra-ui/react"

	const Login  = () => {
	  const { login } = useMoralis();
	  const [email, setEmail] = useState();
	  const [password, setPassword] = useState();

	  return(
      <div bg-gray-800>
      <Center flex mt="">
	    <Stack spacing={6} padding={1}>
	      <Input placeholder="Email" value={email} onChange={(event)=> setEmail(event.currentTarget.value)}/>
	      <Input placeholder="Password" type="password" value={password} onChange={(event)=> setPassword(event.currentTarget.value)}/>
	      <Button onClick={() => login(email, password)}>Login</Button>
	    </Stack>
      </Center>
      </div>
	  )
	}


const SignUp = () => {
const { signup } = useMoralis();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

return(
  <Center >
    
  <Stack spacing={6} >
    <Input placeholder="Email" value={email} onChange={(event)=> setEmail(event.currentTarget.value)}/>
    <Input placeholder="Password" type="password" value={password} onChange={(event)=> setPassword(event.currentTarget.value)}/>
    <Button onClick={() => signup(email, password, email)}>Sign Up</Button>
  </Stack >
  </Center>
)
}

function Auth() {

	const {authenticate, isAuthenticated, isAuthenticating, authError, logout} = useMoralis();
  if(isAuthenticated) {
   return(
    <Container>
      <Center><Heading textAlign="center">Welcome to the Twitter Clone</Heading></Center>
      <Button onClick={logout}>Logout</Button>
    </Container>
    )  
  }

	return (
		<Stack spacing={6} mt="100">
			<Button isLoading={isAuthenticating} onClick={authenticate}>
          Authenticate With Metamask
      </Button>
      <Text textAlign="center">Login</Text>
      <Login />
      <Text textAlign="center">Or Create an Account</Text>
      <SignUp />
		</Stack>
	)
}

export default Auth
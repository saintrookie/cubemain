import React from 'react'
import { 
    Container, 
    FormWrap, 
    Icon, 
    FormContent, 
    Form, 
    FormButton, 
    FormTitle, 
    FormLabel, 
    FormInput,
    Text 
} from './signinElements';



const SignIn = () => {
    return (
      <>
        <Container>
          <FormWrap>
            <Icon to="/">CubeMind</Icon>
            <FormContent>
              <Form action="#">
                <FormTitle>Sign In to Your Account</FormTitle>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot Password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
}

export default SignIn

import React from 'react';
import { TouchableOpacityProps,  Text, StyleSheet}  from 'react-native';
import { UserCard, Name, Email, Telephone } from './styles/ComponentsStyles';

interface UserCardProps extends TouchableOpacityProps{
  name: string;
  email: string;
  telephone: string;
}

export function UserCardComponent({ name, email, telephone, ...rest }: UserCardProps){
    return(
        <>
        <UserCard {...rest}>
          <Name>Nome: {name}</Name>
          <Email>Email: {email}</Email>
          <Telephone>Telefone: {telephone}</Telephone>
        </ UserCard>
        </>
    )
}

import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native'; 
import { Button } from '../components/Button';
import { UserCardComponent } from '../components/UserCard';
import { Container, Title, Input } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string
}

type ButtonProps = TouchableOpacityProps;

export function Home() {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newTelephone, setNewTelephone] = useState('');
  const [ Users, setUsers ] = useState<IUser[]>([]);


  function handleAddNewRegister(){
    const data = {
      id: String(new Date().getTime()),
      name: newName,
      email: newEmail,
      telephone: newTelephone,
    }

    setUsers([...Users, data]);
    setNewName('');
    setNewTelephone('');
    setNewEmail('');

  }

  function handleRemoveUser( id: string) {
    setUsers(Users => Users.filter(user => user.id !== id))
  }

  useEffect(() => {
    async function loadData() {
      const storagedData = await AsyncStorage.getItem('@Users:user');
      if(storagedData) {
        setUsers(JSON.parse(storagedData));
      }
    }
    loadData();
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@Users:user', JSON.stringify(Users));
    }
    saveData();    
  }, [Users])

  useEffect(() => {
    async function removeAll() {
      await AsyncStorage.removeItem('@Users:user');
    }
  }, [])

  function userTitle() {
    if(Users.length > 0) {
      return <Title>Usuários</Title>
    } else {
      return <Title></Title>
    }
  }
  
  return (
    <>
    <Container> 
      <Title>Hello! </Title>

      <Input 
      placeholder='Nome'
      placeholderTextColor='#555'
      value={newName}
      onChangeText={value => setNewName(value)}
      />

<Input 
      placeholder='Email'
      placeholderTextColor='#555'
      value={newEmail}
      onChangeText={value => setNewEmail(value)}
      />

<Input 
      placeholder='Telefone'
      placeholderTextColor='#555'
      value={newTelephone}
      onChangeText={value => setNewTelephone(value)}
      />

      <Button 
        title="Add"
      onPress={handleAddNewRegister}/>

      {userTitle()}
        <FlatList showsVerticalScrollIndicator={false}
        data={Users}
        keyExtractor={item => item.id}
        renderItem={({ item })=> (
          <UserCardComponent
            name={item.name}
            email={item.email}
            telephone={item.telephone}
            onPress={() => handleRemoveUser(item.id)}
          />
        )}
      />
      
    </Container> 
      
    </>
  );
}

//este arquivo home é um componente

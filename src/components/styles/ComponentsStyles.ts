import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';

export const AddUserButton = styled(TouchableOpacity)`
  background-color: #66ff66;
  padding: 12px;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px; 
  border-color: #8A2BE2;
  align-items: center;
  margin-top: 30px;

  /* Text {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  } */
`;

export const ButtonText = styled(Text)`
  color: #8A2BE2;
  font-size: 15px;
  font-weight: bold;
`;

// UserCard

export const UserCard = styled(TouchableOpacity)`
  background-color: #1a001a;
  padding: 15px;
  border-radius: 20px;
  align-items: flex-start;
  margin: 10px;
`;

export const Name = styled(Text)`
  color: #e6ffee;
  font-size: 25px;
  font-weight: bold;
`;

export const Email = styled(Text)`
  color: #e6ffee;
  font-size: 16px;
  font-weight: 400;
`;

export const Telephone = styled(Text)`
  color: #e6ffee;
  font-size: 14px;
  font-weight: 100;
`;
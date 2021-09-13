import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #4B0082;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 70px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #e6ffee;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #1f1e2589;
  color: #e6ffee;
  font-size: 18px;
  padding: ${Platform.OS === 'ios' ? '15px' : '11px'};
  margin-top: 30px;
  border-radius: 10px;
`;
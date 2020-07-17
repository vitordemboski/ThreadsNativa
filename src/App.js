/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Bridge from './utils';

const App = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    Bridge.statusChange(({status}) => {
      setContador(status);
    });
  }, []);

  const contar = () => {
    Bridge.start(); // Bridge.show(contador + 1, 0, 2);
  };

  const remover = () => {
    Bridge.remove();
  };

  const pausar = () => {
    Bridge.pause();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contador</Text>
      <Text>{contador}</Text>
      <Button onPress={contar} title={'Iniciar Thread'} />
      <Button color="green" onPress={pausar} title={'Pause Thread'} />
      <Button color="red" onPress={remover} title={'Remover Thread'} />
    </View>
  );
};

export default App;

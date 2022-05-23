import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import { EntityInterface, items } from '../constants/Entities';


const Item = ({ name }: EntityInterface) => (
  <View>
    <Text>{name}</Text>
  </View>
);

const renderItem = ({ item }: { item: EntityInterface }) => (
  <Item id={item.id} name={item.name} />
);

export default function TabSearchScreen({ navigation }: RootTabScreenProps<'TabSearch'>) {
  const [text, onChangeText] = useState('');
  const data: EntityInterface[] = items.map(datum => Object.values(datum)[0]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

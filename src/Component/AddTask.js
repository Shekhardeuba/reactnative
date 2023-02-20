import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTask} from './Actions';

const AddTask = ({dispatch}) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({id: Date.now(), title: text}));
    setText('');
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default connect()(AddTask);

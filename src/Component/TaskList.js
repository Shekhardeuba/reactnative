import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {deleteTask} from './Actions';

const TaskList = ({tasks, dispatch}) => {
  const renderItem = ({item}) => (
    <View>
      <Text>{item.title}</Text>
      <Text onPress={() => dispatch(deleteTask(item.id))}>Delete</Text>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);

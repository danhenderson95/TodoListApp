import Edit from '@/assets/edit.png';
import TickMark from '@/assets/tickMark.png';
import TickMarkComplete from '@/assets/tickMarkComplete.png';
import Trash from '@/assets/trash.png';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ITodo } from '../interfaces';

const TodoItem = ({
  todo,
  doneOnPress,
  todoOnPress,
  deleteOnPress,
}: {
  todo: ITodo;
  doneOnPress: (todoId: number) => void;
  todoOnPress: (todoId: number) => void;
  deleteOnPress: (todoId: number) => void;
}): JSX.Element => {
  ////////////////////
  //////////////////// RENDER
  ////////////////////

  return (
    <View key={todo.id} style={styles.container}>
      <Pressable
        hitSlop={30}
        onPress={() => doneOnPress(todo.id)}
        accessibilityRole="button"
        accessibilityLabel="checkBox"
      >
        {todo.isComplete ? (
          <Image source={TickMarkComplete} style={styles.checkboxImage} />
        ) : (
          <Image source={TickMark} style={styles.checkboxImage} />
        )}
      </Pressable>

      <Pressable
        style={styles.contentContainer}
        onPress={() => todoOnPress(todo.id)}
        disabled={todo.isComplete}
      >
        <View style={styles.lineOneContainer}>
          <Text style={styles.contentText} numberOfLines={2}>
            {todo.content}
          </Text>
          {!todo.isComplete && <Image source={Edit} style={styles.editImage} />}
        </View>
        <Text style={styles.createdAtText}>
          {new Date(todo.createdTs).toLocaleTimeString()}
        </Text>
      </Pressable>

      <Pressable onPress={() => deleteOnPress(todo.id)}>
        <Image source={Trash} style={styles.trashImage} />
      </Pressable>
    </View>
  );
};

////////////////////
//////////////////// STYLES
////////////////////

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  checkboxImage: { width: 25, height: 25 },
  contentContainer: { flex: 1, gap: 5 },
  lineOneContainer: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  contentText: { fontWeight: 'bold' },
  editImage: { width: 13, height: 13 },
  createdAtText: { fontSize: 13 },
  trashImage: { width: 23, height: 23 },
});

export default TodoItem;

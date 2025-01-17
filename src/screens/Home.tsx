import ListEmpty from '@/components/ListEmpty';
import ScreenHeader from '@/components/ScreenHeader';
import SectionHeader from '@/components/SectionHeader';
import TodoItem from '@/components/TodoItem';
import { generateRandomNumber } from '@/helpers';
import { ITodo } from '@/interfaces';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Alert, SectionList, StyleSheet, View } from 'react-native';

const Home = ({
  setIsAuthenticated,
}: {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  ////////////////////
  //////////////////// STATE
  ////////////////////

  const [todos, setTodos] = useState<ITodo[]>([]);

  ////////////////////
  //////////////////// METHODS
  ////////////////////

  const addNewTodo = (content: string): void => {
    if (!content) {
      Alert.alert('Error', 'Please enter some content.');
      return;
    }

    // NOTE: using a random number as an ID, in practice would
    // use a UUID or database record ID
    const newId = generateRandomNumber();

    setTodos((prev) =>
      prev.concat({
        id: newId,
        isComplete: false,
        content,
        createdTs: Date.now(),
      }),
    );
  };

  const addOnPress = (): void => {
    Alert.prompt(
      'Enter your todo',
      '',
      (text) => addNewTodo(text),
      'plain-text',
    );
  };

  const doneOnPress = (todoId: number): void => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoId) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
    });
  };

  const deleteOnPress = (todoId: number): void => {
    Alert.alert('Confirm', 'Are you sure you want to delete this todo?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () =>
          setTodos((prev) => prev.filter((todo) => todo.id !== todoId)),
      },
    ]);
  };

  const updateTodoContent = (todoId: number, newContent: string): void => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoId) {
          todo.content = newContent;
        }
        return todo;
      });
    });
  };

  const todoOnPress = (todoId: number): void => {
    const matchingTodo = todos.find((todo) => todo.id === todoId);

    if (!matchingTodo) {
      Alert.alert('Error', "We couldn't find this todo, please try another.");
      return;
    }

    Alert.prompt(
      'Edit todo',
      '',
      (text) => updateTodoContent(todoId, text),
      'plain-text',
      matchingTodo.content,
    );
  };

  const lockOnPress = (): void => {
    setIsAuthenticated(false);
  };

  const sortTodos = (todosToSort: ITodo[]): ITodo[] => {
    return todosToSort.sort((a, b) => {
      if (a.isComplete !== b.isComplete) {
        return a.isComplete < b.isComplete ? -1 : 1;
      }

      return b.createdTs - a.createdTs;
    });
  };

  const sectionTodos = useCallback(() => {
    const sortedTodos = sortTodos(todos);
    const inProgressTodos = sortedTodos.filter((todo) => !todo.isComplete);
    const completeTodos = sortedTodos.filter((todo) => todo.isComplete);

    return [
      {
        title: 'In progress',
        data: inProgressTodos,
      },
      {
        title: 'Completed',
        data: completeTodos,
      },
    ];
  }, [todos]);

  ////////////////////
  //////////////////// RENDER
  ////////////////////

  return (
    <View style={styles.mainContainer}>
      <ScreenHeader addOnPress={addOnPress} lockOnPress={lockOnPress} />

      {/* NOTE: if there are no todos, show a placeholder component */}
      {todos.length === 0 ? (
        <ListEmpty />
      ) : (
        <SectionList
          sections={sectionTodos()}
          renderSectionHeader={({ section: { title, data } }) => (
            <SectionHeader title={title} isVisible={data.length > 0} />
          )}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              doneOnPress={doneOnPress}
              deleteOnPress={deleteOnPress}
              todoOnPress={todoOnPress}
            />
          )}
          style={styles.sectionList}
        />
      )}
    </View>
  );
};

////////////////////
//////////////////// STYLES
////////////////////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  sectionList: {
    flex: 1,
  },
});

export default Home;

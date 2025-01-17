import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TodoItem from '../../src/components/TodoItem';
import { ITodo } from '../../src/interfaces';

describe('TodoItem component', () => {
  const todoItem: ITodo = {
    id: 9,
    content: 'This is test content',
    isComplete: false,
    createdTs: Date.now(),
  };

  const mockDoneOnPress = jest.fn();
  const mockTodoOnPress = jest.fn();
  const mockDeleteOnPress = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <TodoItem
        todo={todoItem}
        doneOnPress={mockDoneOnPress}
        deleteOnPress={mockDeleteOnPress}
        todoOnPress={mockTodoOnPress}
      />,
    );

    expect(getByText('This is test content')).toBeTruthy();
    expect(
      getByText(new Date(todoItem.createdTs).toLocaleTimeString()),
    ).toBeTruthy();
  });

  it('calls doneOnPress when checkbox is pressed', () => {
    const { getByRole } = render(
      <TodoItem
        todo={todoItem}
        doneOnPress={mockDoneOnPress}
        todoOnPress={mockTodoOnPress}
        deleteOnPress={mockDeleteOnPress}
      />,
    );

    const checkbox = getByRole('button', { name: /checkBox/i });
    fireEvent.press(checkbox);

    expect(mockDoneOnPress).toHaveBeenCalledWith(9);
  });
});

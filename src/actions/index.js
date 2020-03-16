let nxtTodoid = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nxtTodoid++,
    text
});

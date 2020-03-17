let nxtTodoid = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nxtTodoid++,
    text
});

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(task => !task.completed);
        default:
            throw new Error('unknown filter ' + filter);
    } 
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(mapStateToProps)(TodoList)
import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions/index';

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form className="add-form" onSubmit={
                e => {
                    e.preventDefault();
                    if(!input.value.trim()) {
                        return
                    }

                    dispatch(addTodo(input.value));
                    input.value = '';
                }
            }>
                <input className="form-input" type="text" ref= {el => (input = el)} />
                <button className="add-btn" type="submit">add todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)

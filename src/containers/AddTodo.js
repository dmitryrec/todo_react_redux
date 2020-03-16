import React from 'react';
import { connect } from 'react-redux';

const AddTodo = () => {
    let input;

    return (
        <div>
            <form>
                <input type="text" ref= {el => (input = el)} />
                <button type="submit">add todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)

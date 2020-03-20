import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

export default function FilterBlock() {
    return (
        <div>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>all</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>completed</FilterLink>
        </div>
    )
}

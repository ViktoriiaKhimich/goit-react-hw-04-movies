import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import Button from '../../../../shared/components/Button'
import FormInput from '../../../../shared/components/FormInput'
import { fields } from './fields'

import styles from './MovieSearchForm.module.css';

class MovieSearchForm extends Component {

    state = {
        query: '',
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
        this.reset()
    }

    reset() {
        this.setState({
            query: ''
        })
    }

    render() {
        const { query } = this.state;
        const { handleSubmit, handleChange } = this;

        return (
            <form onSubmit={handleSubmit} className={styles.searchFrom}>
                <FormInput onChange={handleChange} {...fields.query} value={query} />
                <Button type='submit'>Search</Button>
            </form>
        );
    }
}

export default MovieSearchForm;
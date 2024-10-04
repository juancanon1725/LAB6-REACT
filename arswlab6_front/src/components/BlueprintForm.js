// src/components/BlueprintForm.js

import React, { useState } from 'react';
import Blueprint from '../api/Blueprint';

const BlueprintForm = () => {
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Blueprint.actualizarPlanos(author);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="AuthorInput">Author</label>
                <input
                    id="AuthorInput"
                    className="form-control"
                    name="Author"
                    type="text"
                    placeholder="Enter author name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Get Blueprints
            </button>
        </form>
    );
};

export default BlueprintForm;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PIECE } from '../../utils/mutations'; 

const PieceForm = () => {
    const [formState, setFormState] = useState({
      name: '',
      image: '',
      bio: '',
      price: '',
    });
    const [characterCount, setCharacterCount] = useState(0);
  
    // Set up our mutation with an option to handle errors
    const [addPiece, { error }] = useMutation(ADD_PIECE);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const { data } = addPiece({
          variables: { ...formState },
        });
  
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    const handleChange = (event) => {
        const { art, value } = event.target;
    
        if (art === 'name' && value.length <= 280) {
          setFormState({ ...formState, [art]: value });
          setCharacterCount(value.length);
        } else if (art !== 'name') {
          setFormState({ ...formState, [art]: value });
        }
      };

      return (
        <div>
          <h3>Add your art</h3>
    
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12">
              <textarea
                art="name"
                placeholder="title"
                value={formState.name}
                className="form-input w-100"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <input
                art="image"
                placeholder="upload an image"
                value={formState.image}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-9">
              <input
                art="bio"
                placeholder="describe"
                value={formState.image}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Art
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                Something went wrong...
              </div>
            )}
          </form>
        </div>
      );
    };
    
    export default PieceForm;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PIECE } from '../../utils/mutations';
import { QUERY_PIECE } from '../../utils/queries';
import FileUploader from '../FileUploader';

const PieceForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    bio: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", selectedFile);
    
    axios
    .post(UPLOAD_URL, formData)
    .then((res) => {
      alert("File Upload success");
    })
    .catch((err) => alert("File Upload Error"));
  };  

  const [characterCount, setCharacterCount] = useState(0);

  const [addPiece, { error }] = useMutation(ADD_PIECE, {
    update(cache, { data: { addPiece } }) {
      try {
        const { pieces } = cache.readQuery({ query: QUERY_PIECE });

        cache.writeQuery({
          query: QUERY_PIECE,
          data: { pieces: [addPiece, ...pieces] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPiece({
        variables: { ...formState },
      });

      setFormState({
        name: '',
        image: '',
        bio: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'name') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Add your art!</h3>

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
            name="name"
            placeholder="title"
            value={formState.name}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <input
            name="image"
            placeholder="artist"
            value={formState.image}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <input
            name="bio"
            placeholder="description"
            value={formState.bio}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <input 
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <FileUploader
          />
          <button onClick={submitForm}>Submit</button>
        </div>
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add to feed
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
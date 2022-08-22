// import React, { useRef } from "react";

// const ImageUploader = ({ onImageSelect }) => {
//   const imageInput = useRef(null);

//   const handleImageInput = (e) => {
//     // handle validations
//     onImageSelect(e.target.files[0]);

//     const image = e.target.files[0];
//     if (image.size > 1024)
//       onImageSelectError({ error: "File size cannot exceed more than 1MB" });
//     else onImageSelectSuccess(image);
//   };

//   return (
//     <div className="image-uploader">
//       <input type="image" onChange={handleImageInput}>
//         <button
//           onClick={(e) => imageInput.current && imageInput.current.click()}
//           className="btn btn-primary"
//         ></button>
//       </input>
//     </div>
//   );
// };
// export default ImageUploader;

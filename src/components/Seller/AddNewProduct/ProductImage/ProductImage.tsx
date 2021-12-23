import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ProductImage.scss';

export const ProductImage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState('');
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    const readerCoverImage = new FileReader();
    readerCoverImage.readAsDataURL(selectedFile);
    readerCoverImage.onloadend = () => {
      //setCoverImage(String(readerCoverImage.result));
    };

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="product-image">
      <div className="product-image__input">
        <div className="product-image__input__image product-image__input__image--100">
          {selectedFile && <img src={preview} />}
        </div>
        <div className="product-image__input__upload">
          <label className="product-image__input__upload__label" htmlFor="image">
            <input
              type="file"
              onChange={onSelectFile}
              id="image_one"
              name="image_one"
              accept=".jpg,.png"
            />
            <span>
              <Button variant="outline-secondary" style={{ fontSize: '12px' }}>
                Upload ảnh 1
              </Button>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

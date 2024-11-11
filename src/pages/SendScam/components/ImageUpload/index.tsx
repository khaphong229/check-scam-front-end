import React, { useState, useRef } from 'react'
import close_icon from '../../../../assets/images/close.svg'
import upload_icon from '../../../../assets/images/upload-icon.svg'

interface ImageUploadProps {
  onImagesChange: (files: File[]) => void
}

interface PreviewImage {
  url: string
  file: File
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesChange }) => {
  const [previews, setPreviews] = useState<PreviewImage[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      const newPreviews = files.map((file) => ({
        url: URL.createObjectURL(file),
        file
      }))

      setPreviews((prev) => [...prev, ...newPreviews])
      onImagesChange(files)
    }
  }

  const removeImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className='form__upload-wrap'>
      {previews.map((preview, index) => (
        <div key={index} className='form__image-preview'>
          <div className='form__preview-close' onClick={() => removeImage(index)}>
            <img src={close_icon} alt='close-icon' />
          </div>
          <img src={preview.url} alt='' className='form__preview-img' />
        </div>
      ))}
      <div className='form__upload-group'>
        <label className='form__upload'>
          <input
            ref={fileInputRef}
            type='file'
            className='form__upload-input'
            accept='image/*'
            multiple
            hidden
            onChange={handleFileChange}
          />
          <img src={upload_icon} alt='icon-upload' className='form__upload-icon' />
          <span className='form__upload-text'>Chọn ảnh</span>
        </label>
      </div>
    </div>
  )
}

export default ImageUpload

import React, { useState } from 'react'

import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css'
import './styles.scss'

export default ({ images_path }) => {

  const [ isLightboxOpened, setIsLightboxOpened ] = useState(false)
  const [ selectedImage, setSelectedImage ] = useState(0)

  let images = null
  if (images_path === '2018-05-05') 
    images = importAllImages(require.context(`./../../assets/images/2018-05-05`, false, /\.(png|jpe?g)$/))

  /**
   * Open/close lightbox with carousel images
   */
  function toggleLightbox(index = null) {
    setIsLightboxOpened(!isLightboxOpened)
    if (index) setSelectedImage(index)
  }
  
  /**
   * Return the index of the previous image to be rendered 
   */
  function calcPrevSrc() {
    return (selectedImage + images.length - 1) % images.length
  }

  /**
   * Return the index of the next image to be rendered 
   */
  function calcNextSrc() {
    return (selectedImage + 1) % images.length
  }

  /**
   * Import all images by path
   */
  function importAllImages(r) {
    return r.keys().map(r)
  }

  return (
    <>
      <div className="grid-photos">
        { images.map((image, index) => {
            return (
              <div 
                key={ index }
                onClick={ () => toggleLightbox(index) }
                className="card-photo">
                  
                <img 
                  alt=""
                  src={ image }
                  className="photo"
                />
              </div>
            )
          })
        }
      </div>

      { isLightboxOpened && (
        <Lightbox
          mainSrc={ images[selectedImage] }
          nextSrc={ images[calcNextSrc()] }
          prevSrc={ images[calcPrevSrc()] }
          onCloseRequest={ () => toggleLightbox() }
          onMovePrevRequest={ () => {
            setSelectedImage(calcPrevSrc()) 
          }}
          onMoveNextRequest={ () => {
            setSelectedImage(calcNextSrc()) 
          }}
        />
      )}
    </>
  )

}
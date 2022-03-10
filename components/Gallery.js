import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Gallery = () => {
  const album = [
    '/img/foto 1.jpg',
    '/img/foto 2.jpg',
    '/img/foto 3.jpg',
    '/img/foto 4.jpg',
    '/img/foto 5.jpg',
    '/img/foto 6.jpg',
    '/img/foto 7.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654005/tattoo-artist/foto_7_xtazzz.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654005/tattoo-artist/bg-2_plvton.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_3_bol73t.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_1_nmz4zr.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_5_qktnk3.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_4_nxaeq8.jpg',
    'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_6_blqyvk.jpg'
    // 'https://www.instagram.com/p/CULgbBILJM0/',
    // 'https://www.instagram.com/p/CT5aufALWzR/',
    // 'https://www.instagram.com/p/CQM-Ka0jDTd/',
    // 'https://www.instagram.com/p/CMUVoqzjb0L/'
  ]

  const pictureClass = [
    'selected',
    'prev',
    'prevLeftSecond',
    'next',
    'nextRightSecond',
    'hideLeft',
    'hideRight'
  ]

  const [albumClass, setAlbumClass] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [modalImage, setModalImage] = useState('/img/')

  const actualizarSelected = clase => {
    let oldArray = []
    switch (clase) {
      case 'prev':
        oldArray = [...albumClass]
        oldArray[oldArray.indexOf('nextRightSecond')] = 'hideRight'
        oldArray[oldArray.indexOf('next')] = 'nextRightSecond'
        oldArray[oldArray.indexOf('selected')] = 'next'
        oldArray[oldArray.indexOf('prev')] = 'selected'
        oldArray[oldArray.indexOf('prevLeftSecond')] = 'prev'
        oldArray[oldArray.indexOf('hideLeft')] = 'prevLeftSecond'

        return oldArray

      case 'next':
        oldArray = [...albumClass]
        oldArray[oldArray.indexOf('prevLeftSecond')] = 'hideLeft'
        oldArray[oldArray.indexOf('prev')] = 'prevLeftSecond'
        oldArray[oldArray.indexOf('selected')] = 'prev'
        oldArray[oldArray.indexOf('next')] = 'selected'
        oldArray[oldArray.indexOf('nextRightSecond')] = 'next'
        oldArray[oldArray.indexOf('hideRight')] = 'nextRightSecond'

        return oldArray

      case 'prevLeftSecond':
        oldArray = [...albumClass]
        oldArray[oldArray.indexOf('nextRightSecond')] = 'hideRight'
        oldArray[oldArray.indexOf('next')] = 'hideRight'
        oldArray[oldArray.indexOf('selected')] = 'nextRightSecond'
        oldArray[oldArray.indexOf('prev')] = 'next'
        oldArray[oldArray.indexOf('prevLeftSecond')] = 'selected'
        oldArray[oldArray.indexOf('hideLeft')] = 'prev'
        oldArray[oldArray.indexOf('hideLeft')] = 'prevLeftSecond'

        return oldArray

      case 'nextRightSecond':
        oldArray = [...albumClass]
        oldArray[oldArray.indexOf('prevLeftSecond')] = 'hideLeft'
        oldArray[oldArray.indexOf('prev')] = 'hideLeft'
        oldArray[oldArray.indexOf('selected')] = 'prevLeftSecond'
        oldArray[oldArray.indexOf('next')] = 'prev'
        oldArray[oldArray.indexOf('nextRightSecond')] = 'selected'
        oldArray[oldArray.indexOf('hideRight')] = 'next'
        oldArray[oldArray.indexOf('hideRight')] = 'nextRightSecond'

        return oldArray

      default:
        return albumClass
    }
  }

  useEffect(() => {
    setAlbumClass(
      album.map((pic, i) =>
        pictureClass.length > i
          ? pictureClass[i]
          : i % 2 === 0
          ? 'hideRight'
          : 'hideLeft'
      )
    )
  }, [])

  return (
    <>
      <div className='flex justify-center items-center gap-5 flex-wrap py-20 relative border shadow-xl mt-5 rounded-lg container mx-auto overflow-hidden sm:overflow-visible'>
        <div className='ribbon-wrapper-2 text-white text-xl'>
          <div className='ribbon-2'>Galería</div>
        </div>
        {/* {album.map((picture, i) => (
        <iframe
          key={i}
          height='440px'
          src={`${picture}embed`}
          frameBorder='0'
          className='rounded-xl shadow-xl border hover:scale-110 transition-transform'
        ></iframe>
      ))} */}
        {album.map((picture, i) => (
          <div
            key={i}
            className='rounded-xl shadow-xl border h-96 w-80 overflow-hidden hover:scale-110 transition-transform relative bg-white p-2'
          >
            <Image
              src={picture}
              width={250}
              height={250}
              layout='responsive'
              className='z-30 rounded-t-md'
            />

            <footer className='flex w-full h-16 justify-center items-center text-3xl font-semibold'>
              <h2 className='especial-font'>Foto {i + 1}</h2>
            </footer>
          </div>
        ))}
      </div>

      <div
        id='carousel'
        className='mt-20 container mx-auto flex items-center justify-center bg-white shadow-xl rounded-xl border overflow-hidden'
      >
        <div className='ribbon-wrapper-2 text-white text-xl'>
          <div className='ribbon-2'>Galería V2</div>
        </div>
        {album.map((picture, i) => (
          <div
            key={i}
            className={`${albumClass[i]}`}
            onClick={e =>
              setAlbumClass(actualizarSelected(e.currentTarget.classList.value))
            }
          >
            <article className='img'>
              <Image
                src={picture}
                width={500}
                height={500}
                layout='responsive'
                className=''
              />
            </article>
          </div>
        ))}
      </div>

      {/* <!-- The Modal --> */}
      <div
        id='myModal'
        className={`modal ${
          openModal ? '' : 'hidden'
        } flex items-center justify-center py-5`}
      >
        {/* <!-- The Close Button --> */}
        <span className='close' onClick={() => setOpenModal(!openModal)}>
          &times;
        </span>
        {/* <!-- Modal Content (The Image) --> */}
        <span className='modal-content'>
          <Image
            src={modalImage}
            width={1000}
            height={1000}
            className='rounded-md'
          />
        </span>
      </div>

      <div
        id='carousel'
        className='mt-20 container mx-auto flex items-center justify-center bg-white shadow-xl rounded-xl border overflow-hidden'
      >
        <div className='ribbon-wrapper-2 text-white text-xl '>
          <div className='ribbon-2'>Galería V3</div>
        </div>
        {album.map((picture, i) => (
          <div
            key={i}
            className={`${albumClass[i]} rounded-xl shadow-xl border pb-16 overflow-hidden bg-white p-2`}
            onClick={e =>
              setAlbumClass(
                actualizarSelected(
                  e.currentTarget.classList.value.split(' ')[0]
                )
              )
            }
          >
            <article className='img relative'>
              {albumClass[i] === 'selected' ? (
                <button
                  className='open text-xl w-12 bg-white rounded-md m-2 transition opacity-70'
                  onClick={() => {
                    setModalImage(picture)
                    setOpenModal(!openModal)
                  }}
                >
                  <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
                    <g fill='none' fillRule='evenodd'>
                      <path d='M0 0h16v16H0z' />
                      <g stroke='#67717A' strokeLinecap='round'>
                        <path d='M14.5 14.5l-4-4M11.5 6.5a5 5 0 1 1-10.001-.001A5 5 0 0 1 11.5 6.5z' />
                      </g>
                    </g>
                  </svg>
                </button>
              ) : null}
              <Image
                src={picture}
                width={500}
                height={500}
                layout='responsive'
                className='rounded-t-md'
              />
              <footer className='flex w-full h-16 justify-center items-center text-3xl font-semibold'>
                <h2 className='especial-font'>Foto {i + 1}</h2>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery

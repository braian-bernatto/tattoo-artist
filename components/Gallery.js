import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  const album = [
    '/img/foto 1.jpg',
    '/img/foto 2.jpg',
    '/img/foto 3.jpg',
    '/img/foto 4.jpg',
    '/img/foto 5.jpg',
    '/img/foto 6.jpg',
    '/img/foto 7.jpg'
    // 'https://www.instagram.com/p/CULgbBILJM0/',
    // 'https://www.instagram.com/p/CT5aufALWzR/',
    // 'https://www.instagram.com/p/CQM-Ka0jDTd/',
    // 'https://www.instagram.com/p/CMUVoqzjb0L/'
  ]

  return (
    <>
      <div className='flex justify-center items-center gap-5 flex-wrap pt-20 mx-10 relative'>
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
            className='rounded-xl shadow-xl p-2 border h-96 w-80 overflow-hidden hover:scale-110 transition-transform relative'
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
      <div id='carousel' className='mt-20'>
        <div className='hideLeft'>
          <Image
            src={'/img/foto 1.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='prevLeftSecond'>
          <Image
            src={'/img/foto 2.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='prev'>
          <Image
            src={'/img/foto 3.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='selected'>
          <Image
            src={'/img/foto 4.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='next'>
          <Image
            src={'/img/foto 5.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='nextRightSecond'>
          <Image
            src={'/img/foto 6.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='hideRight'>
          <Image
            src={'/img/foto 7.jpg'}
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>
      </div>
    </>
  )
}

export default Gallery

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

  const next = picture => picture.classList.toggle('selected')
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

  const actualizarSelected = clase => {
    let oldArray = ''
    let indexSel = ''
    let indexPrev = ''
    let selected = ''
    let previo = ''
    let arrayPrev = ''
    let newArray = ''
    switch (clase) {
      case 'prev':
        oldArray = albumClass
        indexSel = oldArray.indexOf('selected')
        indexPrev = oldArray.indexOf('prev')
        selected = oldArray.splice(indexSel, 1)
        previo = oldArray.splice(indexSel, 1)
        arrayPrev = oldArray.splice(indexSel, 0, 'next')
        newArray = oldArray.splice(indexPrev, 0, 'selected')
        console.log(oldArray)
        return oldArray
        break
      case 'next':
        oldArray = albumClass
        indexSel = oldArray.indexOf('selected')
        indexPrev = oldArray.indexOf('next')
        selected = oldArray.splice(indexSel, 1)
        previo = oldArray.splice(indexSel, 1)
        arrayPrev = oldArray.splice(indexSel, 0, 'prev')
        newArray = oldArray.splice(indexPrev, 0, 'selected')
        console.log(oldArray)
        return oldArray
        break

      default:
        break
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
      <div className='flex justify-center items-center gap-5 flex-wrap py-20 relative border shadow-xl mt-5 rounded-lg container mx-auto overflow-clip sm:overflow-visible'>
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
      <div id='carousel' className='mt-20 container mx-auto'>
        {album.map((picture, i) => (
          <div
            key={i}
            className={albumClass[i]}
            onClick={e =>
              console.log(actualizarSelected(e.currentTarget.classList.value))
            }
          >
            <Image
              src={picture}
              width={500}
              height={500}
              layout='responsive'
              className='rounded-md -z-10'
            />
          </div>
        ))}
      </div>
      <div id='carousel' className='mt-20 container mx-auto'>
        <div className='hideLeft'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654005/tattoo-artist/foto_7_xtazzz.jpg'
            }
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='prevLeftSecond'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654005/tattoo-artist/bg-2_plvton.jpg'
            }
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='prev'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_3_bol73t.jpg'
            }
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='selected'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_1_nmz4zr.jpg'
            }
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='next'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_5_qktnk3.jpg'
            }
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='nextRightSecond'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_5_qktnk3.jpg'
            }
            width={500}
            height={500}
            layout='responsive'
            className='z-30 rounded-md'
          />
        </div>

        <div className='hideRight'>
          <Image
            src={
              'https://res.cloudinary.com/dzlmwg5tk/image/upload/v1646654004/tattoo-artist/foto_4_nxaeq8.jpg'
            }
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

import Head from 'next/head'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='text-sm text-gray-700'>
      <Head>
        <title>Piter | Tattoo</title>
        <meta
          name='description'
          content='Piter Pintos Tattoo artist homepage'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className=''>
        <Hero />
        <Gallery />
      </main>

      <footer className='flex flex-wrap justify-center items-center my-10'>
        <span className='text-md text-gray-500 font-bold'>
          &copy; {new Date().getFullYear()} - Peter Pintos Tattoo Artist
        </span>
      </footer>
    </div>
  )
}

// export async function getServerSideProps() {
//   const user = new Instagram({
//     username: process.env.INSTA_USERNAME,
//     password: process.env.INSTA_PASSWORD
//   })
//   await user.login()

//   const response = await user.getPhotosByUsername({
//     username: 'peterptattoo',
//     first: 20
//   })

//   return {
//     props: {
//       fotos: response.user.edge_owner_to_timeline_media.edges
//     }
//   }
// }

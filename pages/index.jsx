import Layout from '../layouts'

const Home = ({ posts }) => {
  return (
    <>
      <Layout container>
        <section className="h-screen v-align">
          <div>
            <h1 className="text-xl text-oxford-blue-gray">
              Halo 👋, Saya Muliada
            </h1>
            <span className="block mb-8 text-gray">@pandemuliada</span>
            <p className="mb-3">
              Biasa dipanggil Mul, tinggal di Bali, keseharian berkutat di depan
              layar untuk mempercantik tampilan website lewat kode aka seorang{' '}
              <i>Front End Developer</i>. Di sini saya akan membagikan hal-hal
              seputar programming, sudut pandang dan mungkin curhatan serta
              pengalaman pribadi saya
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home

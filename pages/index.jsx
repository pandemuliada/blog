import Heading from '../components/Heading'
import Text from '../components/Text'
import Layout from '../layouts'

const Home = ({ posts }) => {
  return (
    <>
      <Layout container>
        <section className="h-screen v-align">
          <div>
            <Heading className="text-xl">Halo 👋, Saya Muliada</Heading>
            <Text as="span" className="block mb-8">
              @pandemuliada
            </Text>
            <Text className="mb-3">
              Biasa dipanggil Mul, tinggal di Bali, keseharian berkutat di depan
              layar untuk mempercantik tampilan website lewat kode aka{' '}
              <i>Front End Developer</i>. Di sini saya akan membagikan hal-hal
              seputar programming, sudut pandang dan mungkin curhatan serta
              pengalaman pribadi saya
            </Text>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home

import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"

export default function Eventee({evt}) {
  return (
    <Layout title={evt.slug}>
      <h3>{evt.slug}</h3>
    </Layout>
  )
}
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  const paths = events.map(evt => ({
    params: { slug: evt.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  }
}

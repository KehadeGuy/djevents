import Layout from "@/components/Layout"
import { API_URL } from "../config/index"
import EventItem from "@/components/EventItem";
import Link from 'next/link'

export default function Home(props) {
  const { events } = props;
  return (
    <Layout title="DJ Events | Find the hottest parties">
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      
      {events && events.map((evt) => (
        <EventItem key={evt.id} evt={evt.attributes} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events/?[populate]=*`)
  const data = await res.json()
  const events = data.data
  return {
    props: {
      events: events.slice(0, 3)
    },
    revalidate: 1
  }
}
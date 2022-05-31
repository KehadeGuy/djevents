import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import EventItem from "@/components/EventItem";

export default function EventsPager(props) {
  const { events } = props;
  return (
    <Layout title="DJ Events | Find the hottest parties">
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      
      {events && events.map((evt) => (
        <EventItem key={evt.id} evt={evt.attributes} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events/?[populate]=*`)
  const data = await res.json()
  const events = data.data
  return {
    props: {
      events: events
    },
    revalidate: 1
  }
}
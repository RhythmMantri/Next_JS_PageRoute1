import { getAllEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { Fragment } from "react/jsx-runtime";
import EventSearch from "../../components/events/event-search";
import Head from "next/head";

function AllEventsPage(props) {

    const router = useRouter();
    const { events } = props;


    function findEventHandler(year, month) {

        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);

    }

    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta
                name='description'
                content={event.description} 
                />
            </Head>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events: events
        },
        revalidate: 60,
    }
}

export default AllEventsPage;

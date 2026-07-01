import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";
function HomePage(props) {


    return (
        <Fragment>
            <Head>
                <title>Next JS Events</title>
                <meta
                    name='description'
                    content="Find a lot o fgreat events that allow u to evolve...."
                />
            </Head>
            <EventList items={props.events} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800,
    }
}

export default HomePage;

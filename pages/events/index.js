import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { Fragment } from "react/jsx-runtime";
import EventSearch from "../../components/events/event-search";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();
    function findEventHandler(year, month) {

        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);

    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export default AllEventsPage;

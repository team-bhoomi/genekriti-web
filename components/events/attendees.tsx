export const Attendees = () => {
    return (
        <div className="flex flex-col gap-5 p-4 w-full">
            <div className="text-2xl font-semibold">Event Attendees</div>
            <div className="flex flex-wrap gap-6">
                <AttendeeCard />
                <AttendeeCard />
                <AttendeeCard />
                <AttendeeCard />
            </div>
        </div>
    );
};

const AttendeeCard = () => {
    return (
        <div className="w-[200px] h-[150px] rounded-xl bg-yellow-400 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-red-400 mb-1"></div>
            <div className="text-xl font-semibold">John Doe</div>
            <div className="mb-2 text-sm font-medium">@johndoe</div>
            <div>Attended this event</div>
        </div>
    );
};

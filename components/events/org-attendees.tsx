export const OrgAttendees = () => {
    var eventOver = false;
    return (
        <div className="flex flex-col gap-5 p-4 w-full">
            <div className="text-2xl font-semibold">
                {eventOver ? "Attendees" : "Registrants"}
            </div>
            <div className="flex flex-wrap gap-6">
                <OrgAttendeesCard />
                <OrgAttendeesCard />
                <OrgAttendeesCard />
                <OrgAttendeesCard />
            </div>
        </div>
    );
};

const OrgAttendeesCard = () => {
    return (
        <div className="w-[200px] h-[200px] rounded-xl bg-[#87ceeb] flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-red-400 mb-1"></div>
            <div className="text-xl font-semibold">John Doe</div>
            <div className="mb-2 text-sm font-medium">@johndoe</div>
            <div className="flex flex-col items-center">
                Registered on: <span>00/00/0000</span>
            </div>
        </div>
    );
};

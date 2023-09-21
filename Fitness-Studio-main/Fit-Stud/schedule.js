document.addEventListener("DOMContentLoaded", function () {
    // Sample class schedule data (you can replace this with your actual data)
    const classScheduleData = [
        {
            className: "Yoga Class",
            schedule: [
                "Monday: 7:00 AM - 8:30 AM",
                "Wednesday: 7:00 AM - 8:30 AM",
            ],
        },
        {
            className: "Zumba Class",
            schedule: [
                "Tuesday: 6:30 PM - 8:00 PM",
                "Thursday: 6:30 PM - 8:00 PM",
            ],
        },
        {
            className: "Pilates Class",
            schedule: [
                "Monday: 5:30 PM - 7:00 PM",
                "Wednesday: 5:30 PM - 7:00 PM",
            ],
        },
        {
            className: "Spin Class",
            schedule: [
                "Tuesday: 7:00 AM - 8:30 AM",
                "Friday: 7:00 AM - 8:30 AM",
            ],
        },
        {
            className: "Strength Training",
            schedule: [
                "Monday: 9:00 AM - 10:30 AM",
                "Wednesday: 9:00 AM - 10:30 AM",
                "Friday: 9:00 AM - 10:30 AM",
            ],
        },
        // Add more class schedule data here
    ];

    // Get the container where class schedule will be displayed
    const classScheduleContainer = document.getElementById("class-schedule");

    // Function to generate class schedule content
    function generateClassSchedule() {
        classScheduleData.forEach((classInfo) => {
            const classDiv = document.createElement("div");
            classDiv.classList.add("class");

            const className = document.createElement("h3");
            className.textContent = classInfo.className;

            const scheduleList = document.createElement("ul");
            classInfo.schedule.forEach((scheduleItem) => {
                const scheduleItemLi = document.createElement("li");
                scheduleItemLi.textContent = scheduleItem;
                scheduleList.appendChild(scheduleItemLi);
            });

            classDiv.appendChild(className);
            classDiv.appendChild(scheduleList);

            classScheduleContainer.appendChild(classDiv);
        });
    }

    // Call the function to generate class schedule
    generateClassSchedule();
});

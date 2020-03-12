let meetup = { name: 'JS', isActive: true, members: 39 }

const jadwalMeetup = (date, place) => {
    meetup.date = date
    meetup.place = place

    if (meetup.members < 50)
        meetup.isActive = false
}

const publikMeetup = () => {
    if (meetup.isActive) {
        meetup.publish = true
    }
}

jadwalMeetup('Hari Ini', 'Yogyakarta')
publikMeetup()
console.table(meetup)
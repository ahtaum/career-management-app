export function convertDate(data: any) {
    let formatter = new Intl.DateTimeFormat(['ban', 'id'], {
        year: "numeric",
        month: "long",
        day: "2-digit"
    })

    return formatter.format(Date.parse(data))
}

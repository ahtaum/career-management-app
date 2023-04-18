import React from 'react'
import DOMPurify from "dompurify"

export function convertDate(data: any) {
    let formatter = new Intl.DateTimeFormat(['ban', 'id'], {
        year: "numeric",
        month: "long",
        day: "2-digit"
    })

    return formatter.format(Date.parse(data))
}

export function sanitizeHtml(data: any) {
    let cleanReq = DOMPurify.sanitize(data)

    return (
      <div dangerouslySetInnerHTML={{ __html: cleanReq }}></div>
    )
}

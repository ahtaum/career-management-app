import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'

type DownloadFilesProps = {
  filename: string
}

const DownloadFiles = ({ filename }: DownloadFilesProps) => {
  const handleDownloadClick = () => {
    Inertia.get(route("downloadFile", filename.replace("public/files/", "")))
  }

  return (
    <div className="badge badge-success cursor-pointer p-3" onClick={handleDownloadClick}>
      Download
    </div>
  )
}

export default DownloadFiles

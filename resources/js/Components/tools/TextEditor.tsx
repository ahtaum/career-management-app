import React from 'react'
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'

interface QuillProps {
    value: string;
    onChange: (value: string) => void;
}

const TextEditor: React.FC<QuillProps> = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <ReactQuill theme="snow" value={value} onChange={onChange} />
        </div>
    )
}

export default TextEditor

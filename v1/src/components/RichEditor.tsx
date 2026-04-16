'use client'

import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import type { Editor as TinyEditor } from 'tinymce'

interface RichEditorProps {
  value: string
  onChange: (html: string) => void
}

export default function RichEditor({ value, onChange }: RichEditorProps) {
  const editorRef = useRef<TinyEditor | null>(null)

  return (
    <Editor
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      onInit={(_evt, editor) => {
        editorRef.current = editor
      }}
      value={value}
      onEditorChange={(content) => onChange(content)}
      init={{
        height: 400,
        menubar: true,
        skin: 'oxide-dark',
        content_css: 'dark',
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
          'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
          'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount',
        ],
        toolbar:
          'undo redo | blocks | bold italic forecolor | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | link image media | ' +
          'removeformat | code fullscreen | help',
        content_style: `
          body {
            font-family: Inter, -apple-system, sans-serif;
            font-size: 15px;
            color: #cbd5e1;
            background: #0f172a;
            padding: 8px;
          }
          a { color: #60a5fa; }
          h1, h2, h3, h4 { color: #f1f5f9; }
        `,
        branding: false,
        promotion: false,
        license_key: 'gpl',
      }}
    />
  )
}

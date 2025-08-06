'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export default function CodeEditor({ language = 'cpp', value, onChange }: CodeEditorProps) {
  const [code, setCode] = useState(value || '');

  function handleEditorChange(value: string | undefined) {
    setCode(value || '');
    if (onChange) onChange(value);
  }

  return (
    <div className="border border-gray-700 rounded-md overflow-hidden">
      <Editor
        height="400px"
        defaultLanguage={language}
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          tabSize: 2,
          wordWrap: 'on',
        }}
      />
    </div>
  );
}

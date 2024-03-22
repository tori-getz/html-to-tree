import React, { useState } from "react";
import XMLViewer from 'react-xml-viewer'

export const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <main className="flex w-ful flex-col p-4 gap-4">
      <textarea
        className="border border-sky-500 outline-none"
        onChange={e => setText(e.target.value)}
      />
      <div className="border border-sky-500">
        <XMLViewer
          xml={text}
          collapsible
        />
      </div>
    </main>
  );
};

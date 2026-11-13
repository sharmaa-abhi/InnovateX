import React, { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { WorkspacePage } from './components/WorkspacePage';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!toastMessage) return undefined;
    const timeout = window.setTimeout(() => setToastMessage(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  return (
    <>
      <WorkspacePage
        onRegisterClick={() =>
          setToastMessage('The Luma registration page is opening in a new tab.')
        }
      />
      {toastMessage && (
        <div className="workspace-toast" role="status">
          <Sparkles size={16} />
          <span>{toastMessage}</span>
          <button type="button" onClick={() => setToastMessage(null)} aria-label="Dismiss notification">
            <X size={15} />
          </button>
        </div>
      )}
    </>
  );
}

export default App;

import React from 'react';

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">F</span>
          <span>FrameFlow</span>
        </div>
        <nav className="toolbar" aria-label="Main navigation">
          <button type="button">Project</button>
          <button type="button">Timeline</button>
          <button type="button">Assets</button>
        </nav>
      </header>

      <main className="editor-layout">
        <aside className="sidebar-left">
          <div className="panel">
            <h3>Media</h3>
            <ul>
              <li>Videos</li>
              <li>Images</li>
              <li>Audio</li>
            </ul>
          </div>
        </aside>

        <section className="canvas-panel">
          <div className="canvas-header">
            <span>Composition</span>
            <div className="canvas-actions">
              <button type="button">Play</button>
              <button type="button">Export</button>
            </div>
          </div>
          <div className="preview-area">
            <div className="video-placeholder">
              <span>Preview</span>
            </div>
          </div>
        </section>

        <aside className="sidebar-right">
          <div className="panel">
            <h3>Properties</h3>
            <div className="property-row">
              <label>Scale</label>
              <input type="range" defaultValue={75} />
            </div>
            <div className="property-row">
              <label>Opacity</label>
              <input type="range" defaultValue={100} />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

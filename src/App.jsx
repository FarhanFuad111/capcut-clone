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
          <button type="button">Transitions</button>
        </nav>
      </header>

      <main className="editor-layout">
        <aside className="sidebar-left panel">
          <div className="panel-header">
            <span>Media</span>
            <button type="button">+</button>
          </div>

          <ul className="media-list">
            <li className="media-item">
              <span className="thumb violet" />
              <div>
                <strong>Night Drive</strong>
                <small>00:18</small>
              </div>
            </li>
            <li className="media-item">
              <span className="thumb orange" />
              <div>
                <strong>City Lights</strong>
                <small>00:14</small>
              </div>
            </li>
            <li className="media-item">
              <span className="thumb green" />
              <div>
                <strong>Cosmos</strong>
                <small>00:22</small>
              </div>
            </li>
          </ul>
        </aside>

        <section className="canvas-panel panel">
          <div className="canvas-header">
            <span>Composition</span>
            <div className="canvas-actions">
              <button type="button">Play</button>
              <button type="button">Export</button>
            </div>
          </div>

          <div className="preview-area">
            <div className="preview-stage">
              <div className="preview-glow" />
              <div className="play-button">▶</div>
            </div>
          </div>
        </section>

        <aside className="sidebar-right panel">
          <div className="panel-header">
            <span>Inspector</span>
            <button type="button">⚙</button>
          </div>

          <div className="property-group">
            <label>Brightness</label>
            <input type="range" defaultValue={80} />
          </div>

          <div className="property-group">
            <label>Saturation</label>
            <input type="range" defaultValue={60} />
          </div>

          <div className="property-group">
            <label>Contrast</label>
            <input type="range" defaultValue={75} />
          </div>
        </aside>
      </main>
    </div>
  );
}

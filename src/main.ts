import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <aside class="sidebar">
    <div class="brand">
      <span>💙</span> VitalSync
    </div>
    <ul class="nav-links">
      <li class="nav-item">
        <a href="#" class="nav-link active">Dashboard</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Patients</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Alerts</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Analytics</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Settings</a>
      </li>
    </ul>
  </aside>

  <main class="main-content">
    <header class="header">
      <div class="page-title">Dashboard Overview</div>
      <button class="btn">+ Add Patient</button>
    </header>

    <div class="dashboard-grid">
      <!-- Heart Rate Card -->
      <div class="card">
        <div class="card-title">
          Heart Rate (Avg)
          <span>❤️</span>
        </div>
        <div class="stat-value">78 <span style="font-size: 1rem; color: var(--secondary)">BPM</span></div>
        <div style="height: 100px; margin-top: 1rem; background: #e0f2fe; border-radius: 4px; display: flex; align-items: flex-end; padding: 0 5px; gap: 3px;">
           <!-- Fake Chart Bars -->
           ${Array.from({ length: 20 }, () => `<div style="flex: 1; background: var(--primary); height: ${Math.floor(Math.random() * 60 + 20)}%; border-radius: 2px;"></div>`).join('')}
        </div>
      </div>

      <!-- Blood Pressure Card -->
      <div class="card">
        <div class="card-title">
          Blood Pressure
          <span>🩺</span>
        </div>
        <div class="stat-value">122/78</div>
        <div style="margin-top: 0.5rem; color: var(--success); font-size: 0.9rem;">
          Stable within range
        </div>
        <div style="height: 60px; margin-top: 2rem; border-bottom: 2px solid #cbd5e1; position: relative;">
          <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: #cbd5e1;"></div>
           <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,80 Q25,30 50,70 T100,20" fill="none" stroke="var(--primary)" stroke-width="3"/>
           </svg>
        </div>
      </div>

       <!-- Active Alerts Card -->
      <div class="card" style="grid-row: span 2">
        <div class="card-title">
          Active Alerts
          <span>⚠️</span>
        </div>
        <div class="alert-list">
          <div class="alert-item">
            <span class="alert-icon">!</span>
            <div>
              <strong>High Blood Pressure</strong><br>
              Patient ID: #452
            </div>
          </div>
          <div class="alert-item">
            <span class="alert-icon">!</span>
            <div>
              <strong>Arrhythmia Detected</strong><br>
              Patient ID: #883
            </div>
          </div>
           <div class="alert-item">
            <span class="alert-icon">!</span>
            <div>
              <strong>Sensor Disconnected</strong><br>
              Patient ID: #129
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Patients List -->
      <div class="card" style="grid-column: span 2">
        <div class="card-title">
          Recent Patients
          <span>👥</span>
        </div>
        <div class="patient-list">
          <div class="patient-row">
            <div style="display: flex; gap: 1rem; align-items: center;">
              <div style="width: 32px; height: 32px; background: #cbd5e1; border-radius: 50%;"></div>
              <span>Maria Rodriguez</span>
            </div>
            <span class="status-badge status-stable">Stable</span>
          </div>
          <div class="patient-row">
            <div style="display: flex; gap: 1rem; align-items: center;">
              <div style="width: 32px; height: 32px; background: #cbd5e1; border-radius: 50%;"></div>
              <span>John Smith</span>
            </div>
            <span class="status-badge status-critical">Attention</span>
          </div>
           <div class="patient-row">
            <div style="display: flex; gap: 1rem; align-items: center;">
              <div style="width: 32px; height: 32px; background: #cbd5e1; border-radius: 50%;"></div>
              <span>Sarah Johnson</span>
            </div>
            <span class="status-badge status-stable">Stable</span>
          </div>
        </div>
      </div>

    </div>
  </main>
`

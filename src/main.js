import './style.css'

document.querySelector('#app').innerHTML = `
<div class="app">

  <header class="header">
    <h1>🎬 CutNai</h1>
    <p>AI Video Clipping Platform</p>
  </header>

  <main class="hero">
    <h2>Ubah Video Panjang Menjadi Konten Viral</h2>

    <p>
      Upload video, biarkan AI menemukan momen terbaik,
      lalu ekspor otomatis ke TikTok, Reels, dan Shorts.
    </p>

    <input
      type="file"
      id="videoInput"
      accept="video/*"
      hidden
    >

    <div class="buttons">
      <button class="primary" id="uploadBtn">
        Upload Video
      </button>

      <button class="secondary">
        Coba Demo
      </button>
    </div>

    <div class="card">
      <h3>Status</h3>
      <p id="status">
        Belum ada video dipilih.
      </p>
    </div>

  </main>

</div>
`

const uploadBtn = document.getElementById("uploadBtn")
const videoInput = document.getElementById("videoInput")
const status = document.getElementById("status")

uploadBtn.onclick = () => {
  videoInput.click()
}

videoInput.onchange = () => {
  if (videoInput.files.length > 0) {
    status.innerHTML =
      "🎥 Video dipilih:<br><b>" +
      videoInput.files[0].name +
      "</b>"
  }
}

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

  <button class="secondary" id="analyzeBtn">
    Analisis AI
  </button>
</div>

   <div class="card">
  <h3>Status</h3>

  <p id="status">
    Belum ada video dipilih.
  </p>

  <video
    id="preview"
    <div id="progressBox" style="display:none;margin-top:20px;">
  <p id="progressText">🤖 AI sedang menganalisis...</p>

  <progress
    id="progressBar"
    value="0"
    max="100"
    style="width:100%;">
  </progress>
</div>
    controls
    style="display:none;width:100%;margin-top:20px;border-radius:12px;">
  </video>
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

const preview = document.getElementById("preview")

videoInput.onchange = () => {
  if (videoInput.files.length > 0) {

    const file = videoInput.files[0]

    status.innerHTML =
      "🎥 Video dipilih:<br><b>" +
      file.name +
      "</b>"

    preview.src = URL.createObjectURL(file)
    preview.style.display = "block"
  }
}
const analyzeBtn = document.getElementById("analyzeBtn")
const progressBox = document.getElementById("progressBox")
const progressBar = document.getElementById("progressBar")
const progressText = document.getElementById("progressText")

analyzeBtn.onclick = () => {

  if (videoInput.files.length === 0) {
    alert("Pilih video terlebih dahulu.")
    return
  }

  progressBox.style.display = "block"

  let value = 0

  const timer = setInterval(() => {

    value += 5

    progressBar.value = value

    progressText.innerHTML =
      "🤖 AI Menganalisis... " + value + "%"

    if (value >= 100) {

      clearInterval(timer)

      progressText.innerHTML =
        "✅ Analisis selesai."

    }

  }, 150)

}

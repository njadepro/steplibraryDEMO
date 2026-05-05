function renderBottomBar(active){
  return `
    <div class="bottom-bar">

      <div class="tab ${active==='home'?'active':''}" onclick="goHome()">
        <i data-lucide="home"></i>
        HOME
      </div>

      <div class="tab ${active==='play'?'active':''}" onclick="goPlay()">
        <i data-lucide="activity"></i>
        PLAY
      </div>

      <div class="tab ${active==='library'?'active':''}" onclick="goLibrary()">
        <i data-lucide="box"></i>
        LIBRARY
      </div>

    </div>
  `;
}

function goHome(){
  window.location='dashboard.html';
}

function goPlay(){
  window.location='playground.html';
}

function goLibrary(){
  window.location='steplibrary.html';
}

function renderChallengeBanner(){
  return `
    <div class="challenge-banner" onclick="openChallenge()">
      <div class="scroll-text">
        🚨 DÉFI QUOTIDIEN — DÉFI QUOTIDIEN — DÉFI QUOTIDIEN —
      </div>
    </div>
  `;
}

function openChallenge(){
  document.getElementById("challengePopup").style.display="flex";
}

function renderChallengePopup(){
  return `
    <div id="challengePopup" class="popup">
      <div class="popup-content">

        <div class="close" onclick="closeChallenge()">✕</div>

        <h3>DÉFI QUOTIDIEN</h3>
        <p>Reste sur le tempo pendant 2 minutes</p>

        <button onclick="acceptChallenge()">
          ACCEPTER
        </button>

      </div>
    </div>
  `;
}

function renderToast(){
  return `<div id="toast" class="toast"></div>`;
}
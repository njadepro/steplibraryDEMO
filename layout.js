// ===== CHALLENGE SYSTEM GLOBAL =====

let challengeActive = false;

/* OPEN POPUP CHALLENGE */
function openChallenge(){
  const popup = document.getElementById("challengePopup");
  if(popup) popup.style.display = "flex";
}

/* CLOSE POPUP */
function closeChallenge(){
  const popup = document.getElementById("challengePopup");
  if(popup) popup.style.display = "none";
}

/* WARNING CLOSE BANNER */
function openWarning(){
  const warn = document.getElementById("warningPopup");
  if(warn) warn.style.display = "flex";
}

function closeWarning(confirm){
  document.getElementById("warningPopup").style.display = "none";

  if(confirm){
    showToast("Défi ignoré");
  }
}

/* ACCEPT CHALLENGE */
function acceptChallenge(){
  challengeActive = true;
  closeChallenge();
  showToast("Défi ajouté + progression activée");
}

/* TOAST SYSTEM */
function showToast(msg){
  const t = document.getElementById("toast");
  if(!t) return;

  t.innerText = msg;
  t.style.display = "block";

  setTimeout(()=>{
    t.style.display = "none";
  },2000);
}
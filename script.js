const tg = window.Telegram.WebApp;
tg.expand();

// Hozircha oddiy test
console.log("SkinOz ishga tushdi!");

function openCase(caseId) {
    tg.sendData('open_case:' + caseId);
}

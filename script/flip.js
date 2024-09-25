function showFlipById(id) {
    
    document.getElementById('btn-donation').classList.remove("bg-[#B4F461]");
    document.getElementById('btn-history').classList.remove("bg-[#B4F461]");
    document.getElementById('btn-donation').classList.remove("hover:bg-[#B4F461]");
    document.getElementById('btn-history').classList.remove("hover:bg-slate-100");
    document.getElementById(id).classList.add("bg-[#B4F461]");
}

function showFlipSectionById(id) {
    document.getElementById('donateSection').classList.add("hidden");
    document.getElementById('historySection').classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}
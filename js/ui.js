export function switchTab(tabId) {
    ['tab-sheet','tab-story','tab-support'].forEach(id => {
        document.getElementById(id).style.display = id === tabId ? '' : 'none';
    });
    ['btn-tab-sheet','btn-tab-story','btn-tab-support'].forEach(id => {
        const active = id === 'btn-' + tabId;
        document.getElementById(id).className = `tab-btn text-[10px] font-bold uppercase px-5 py-2 rounded-full font-[Cinzel] ${active ? 'btn-action text-white' : 'bg-[#2a2418] text-[#6b5d4d] border border-[#3d362a]'}`;
    });
}

export function toggleSection(id) {
    const el = document.getElementById(id);
    const tog = document.getElementById(id + '-tog');
    const hidden = el.style.display === 'none';
    el.style.display = hidden ? '' : 'none';
    tog.classList.toggle('collapsed', !hidden);
}

export function toggleCard(id) {
    const body = document.getElementById(id + '-body');
    const tog = document.getElementById(id + '-tog');
    const hidden = body.style.display === 'none';
    body.style.display = hidden ? '' : 'none';
    tog.classList.toggle('collapsed', !hidden);
}

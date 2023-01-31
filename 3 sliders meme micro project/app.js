const switches = document.querySelector('.checkboxes');
const max = 2;

for (let i = 0; i < switches.length; i++) {
    switches[i].onclick = selectiveCheck;
    function selectiveCheck(ev) {
        const checked = document.querySelectorAll('.checkboxes:checked');
        if (checked.length >= max + 1) {
            return false;
        }
        selectiveCheck();
    }
}


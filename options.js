dir_input = document.querySelector('#dir_input');
set_dir = document.querySelector('#set_dir');

chrome.storage.local.get('dir', (result) => {
    dir_input.value = (result.dir ?? "");
});

function dir_set() {
    const dir_input_value = dir_input.value;
    chrome.storage.local.set({dir: dir_input_value}, () => {
        console.log('Tracking directory is ' + dir_input_value);
    });
}

set_dir.addEventListener("click", dir_set);

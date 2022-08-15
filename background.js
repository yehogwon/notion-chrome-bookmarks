chrome.bookmarks.onChanged.addListener((id, changeInfo) => {
    // TODO: handle bookmark changes
});

chrome.bookmarks.onCreated.addListener((id, bookmark) => {
    // TODO: handle bookmark creation
});

chrome.bookmarks.onRemoved.addListener((id, removeInfo) => {
    // TODO: handle bookmark removal
});

chrome.bookmarks.onMoved.addListener((id, moveInfo) => {
    // TODO: handle bookmark move
});

chrome.bookmarks.onChildrenReordered.addListener((id, reorderInfo) => {
    // TODO: handle bookmark reorder
});

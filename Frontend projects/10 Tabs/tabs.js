
function showTab(tabIndex) {
    const allTabPanels = document.querySelectorAll('.tab-item');
    allTabPanels.forEach(item => item.classList.remove('active'));

    const selectedTabItem = allTabPanels[tabIndex];
    selectedTabItem.classList.add('active');
}
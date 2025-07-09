document.addEventListener('DOMContentLoaded', function() {
    // 選取所有導覽列中的連結
    const navLinks = document.querySelectorAll('nav ul li a');

    // 為每個連結添加點擊事件監聽器
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 預設行為是跳轉，我們先阻止它
            e.preventDefault();
        });
    });
});
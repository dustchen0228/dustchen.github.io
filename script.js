document.addEventListener('DOMContentLoaded', function() {
    // 選取所有導覽列中的連結
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    // 為每個連結添加點擊事件監聽器
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 1. 阻止預設的錨點跳轉行為
            e.preventDefault();

            // 2. 獲取目標區塊的 ID (例如 "#about")
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 3. 獲取固定導覽列的高度
                const headerOffset = header.offsetHeight;
                
                // 4. 計算目標位置 (目標區塊頂部位置 + 當前滾動距離 - 導覽列高度)
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // 5. 平滑滾動到計算後的位置
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
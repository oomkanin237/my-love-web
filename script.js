document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next-btn');
    const scenes = document.querySelectorAll('.scene');
    let currentSceneIndex = 0;

    // ✨ ฟังก์ชันสร้างเอฟเฟกต์หัวใจ (เพิ่มใหม่)
    function showHeartEffect() {
        const heartCount = 15; // จำนวนหัวใจที่จะสร้าง
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerText = '❤️';

            // สุ่มตำแหน่งเริ่มต้นและทิศทางการลอย
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // สุ่มเวลาลอย 4-7 วินาที
            heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem'; // สุ่มขนาด 1-2.5 rem

            // สุ่มการเคลื่อนที่แนวนอน
            const xDrift = (Math.random() - 0.5) * 200; //-100px to +100px
            heart.style.setProperty('--x-drift', `${xDrift}px`);

            document.body.appendChild(heart);

            // ลบหัวใจออกจากหน้าเว็บเมื่ออนิเมชันจบ
            setTimeout(() => {
                heart.remove();
            }, 7000); // ตั้งเวลาให้มากกว่า animation-duration ที่นานที่สุด
        }
    }

    nextBtn.addEventListener('click', () => {
        scenes[currentSceneIndex].classList.add('hidden');
        currentSceneIndex++;

        if (currentSceneIndex < scenes.length) {
            scenes[currentSceneIndex].classList.remove('hidden');
            showHeartEffect(); // ✨ เรียกใช้เอฟเฟกต์หัวใจทุกครั้งที่เปลี่ยนหน้า
        }

        // --- Change button text ---
        if (currentSceneIndex === 1) { // เมื่อเริ่มกดครั้งแรก
            showHeartEffect(); // ✨ เรียกใช้เอฟเฟกต์หัวใจสำหรับหน้าแรกด้วย
        }

        if (currentSceneIndex === scenes.length - 1) {
            nextBtn.textContent = 'สุดท้ายนี้...';
        } else if (currentSceneIndex >= scenes.length) {
            nextBtn.style.display = 'none'; // Hide button at the end
        } else if (currentSceneIndex === 0) {
             nextBtn.textContent = 'เริ่มต้น';
        } else {
             nextBtn.textContent = 'ต่อไป';
        }
    });
});

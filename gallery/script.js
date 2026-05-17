const stickers = ['stickers/gallery-sticker-fish.png',
                  'stickers/gallery-sticker-starfish.png',
                  'stickers/gallery-sticker-seashell.png'];

document.querySelectorAll(".gallery-item").forEach(item => {
    const sticker_positions = [item.querySelector(".top-left-sticker"),
                               item.querySelector(".top-right-sticker"),
                               item.querySelector(".bottom-left-sticker"),
                               item.querySelector(".bottom-right-sticker")
    ]
    sticker_positions.forEach(pos => {
        const random = stickers[Math.floor(Math.random() * stickers.length)];
        pos.src = random;
    })
});
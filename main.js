const mario = document.getElementById('mario'),
    cub = document.getElementById('cub');

document.addEventListener('keydown', function(e) {
    jump();
});

function jump() {
    if(mario.classList != 'jump') {
        mario.classList.add('jump');
    }
    setTimeout( function() {
        mario.classList.remove('jump');
    }, 300);
}

let isAlive = setInterval(function() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'));
    let cubLeft = parseInt(window.getComputedStyle(cub).getPropertyValue('left'));

    if(cubLeft < 40 && cubLeft > 0 && marioTop >= 140) {
        alert('Game Over!!!');
    }
}, 10);
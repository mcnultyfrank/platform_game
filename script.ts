    let platformLength: Number[];
    let playerIcon: HTMLElement = document.querySelector(".player");
    let platform: HTMLElement[] =  [
        document.querySelector(".platform1"), 
        document.querySelector(".platform2"),
        document.querySelector(".platform3"), 
        document.querySelector(".platform4"), 
        document.querySelector(".platform5")
    ];
    let keys: object;
    keys = {
        right: false,
        left: false,
        up: false,
        };
                const movePlayer = (event:KeyboardEvent) => {
                    if (event.keyCode == 37) {
                        keys['left']= true;
                        keys['right'] = false;
                    }
                    else if (event.keyCode == 39) {
                        keys['right'] = true;
                        keys['left'] = false;
                    }
                    else if (event.keyCode == 38) {
                        keys['right'] = false;
                        keys['left']= false;
                        keys['up'] = true;
                    }
                }
                const StopmovePlayer = (event:KeyboardEvent) => {
                        keys['left'] = false;
                        keys['right'] = false;
                        keys['up'] = false;
                }
                const keyDownPlayerMove = () => {
                    if(keys['left']) {
                        playerIcon.style.transform += `translateX(-${1}vw)`;
                    }
                    else if(keys['right']) {
                        playerIcon.style.transform += `translateX(${0.1}vw)`;
                    }
                    else if(keys['up']) {
                        playerIcon.style.transform += `translateY(-${10}px)`;
                    }
                }
                const randomPlatformLengthsOnRender = () => {
                     platformLength = [Math.floor(Math.random() * 10) + 9, Math.floor(Math.random() * 10) + 9, Math.floor(Math.random() * 10) + 9, Math.floor(Math.random() * 10) + 9,Math.floor(Math.random() * 10) + 7 ];
                    platform[0].style.width = `${platformLength[0]}` + 'vw';
                    platform[1].style.width = `${platformLength[1]}` + 'vw';
                    platform[2].style.width = `${platformLength[2]}` + 'vw';
                    platform[3].style.width = `${platformLength[3]}` + 'vw';
                    platform[4].style.width = `${platformLength[4]}` + 'vw';
                }
                const checkIfOffScreen = () => {
                    if (playerIcon.getBoundingClientRect().width > 25 && playerIcon.getBoundingClientRect().x > 1275) {
                        playerIcon.style.transform += `translateX(-${100}vw)`;
                        return randomPlatformLengthsOnRender();
                    }
                }
                const checkIfDead = () => {
                    if (playerIcon.getBoundingClientRect().right - 20 < platform[0].getBoundingClientRect().left || playerIcon.getBoundingClientRect().left - 15 > platform[0].getBoundingClientRect().right
                        // || playerIcon.getBoundingClientRect().right - 10 < platform[2].getBoundingClientRect().left || playerIcon.getBoundingClientRect().left - 15 > platform[2].getBoundingClientRect().right
                        // || playerIcon.getBoundingClientRect().right - 10 < platform[3].getBoundingClientRect().left || playerIcon.getBoundingClientRect().left - 15 > platform[3].getBoundingClientRect().right
                        // || playerIcon.getBoundingClientRect().right - 10 < platform[4].getBoundingClientRect().left || playerIcon.getBoundingClientRect().left - 15 > platform[4].getBoundingClientRect().right
                        // || playerIcon.getBoundingClientRect().right - 10 < platform[0].getBoundingClientRect().left || playerIcon.getBoundingClientRect().left - 15 > platform[0].getBoundingClientRect().right
                        ) 
                        {
                                alert('')
                                keys['right'] = false;

                        }
                }

                randomPlatformLengthsOnRender();
                
                document.addEventListener("keydown",movePlayer);
                document.addEventListener("keydown",checkIfDead);
                document.addEventListener("keyup",StopmovePlayer);
                setInterval(keyDownPlayerMove,22);
                setInterval(checkIfOffScreen,22);
                // setInterval(checkIfDead,22);






export = {};
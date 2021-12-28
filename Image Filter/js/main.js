const can = document.getElementById("can"),
      fileInput = document.getElementById("fileinput"),
      ctx = can.getContext("2d");
let img = null,
    grayImg = null,
    redImg = null,
    rainbowImg = null,
    blurImg = null,
    windowImg = null,
    mirrorImg = null;       


function loadImage() {
    img = new SimpleImage(fileInput);
    grayImg = new SimpleImage(fileInput);
    redImg = new SimpleImage(fileInput);
    rainbowImg = new SimpleImage(fileInput);
    blurImg = new SimpleImage(fileInput);
    windowImg = new SimpleImage(fileInput);
    mirrorImg = new SimpleImage(fileInput);
    img.drawTo(can);
}

function imageIsLoaded(img) {
    return img != null && img.complete();
}

function filterGray() {
    for ( let px of grayImg.values() ) {
        let avg = ( px.getBlue() + px.getRed() + px.getGreen() ) / 3;
        px.setBlue(avg);
        px.setGreen(avg);
        px.setRed(avg);    
    }
}

function doGray() {
    if ( imageIsLoaded(grayImg) ) {
        filterGray();    
    } else alert("Image is not loaded!")
    grayImg.drawTo(can);
}

function filterRed() {
    for ( let px of redImg.values() ) {
        let avg = ( px.getRed() + px.getBlue() + px.getGreen() ) / 3;
        if (avg < 128) {
            px.setRed(avg * 2);
            px.setGreen(0);
            px.setBlue(0);
        } else {
            px.setRed(255);
            px.setGreen( (avg * 2) - 255 );
            px.setBlue( (avg * 2) - 255 );
        }
    }
}

function doRed() {
    if ( imageIsLoaded(redImg) ) {
        filterRed(redImg);    
    } else alert("Image is not loaded!")
    redImg.drawTo(can);
}

function filterRainbow() {
    for ( let px of rainbowImg.values() ) {
        let avg = ( px.getRed() + px.getBlue() + px.getGreen() ) / 3,
            imgPart = rainbowImg.getHeight() / 7;
        if (px.getY() <= imgPart) {
            if (avg < 128) {
                px.setRed(avg * 2);
                px.setGreen(0);
                px.setBlue(0);
            } else {
                px.setRed(255);
                px.setGreen( (avg * 2) - 255 );
                px.setBlue( (avg * 2) - 255 );
            }
        }
        if (px.getY() <= imgPart * 2 && px.getY() > imgPart) {
            if (avg < 128) {
                px.setRed(avg * 2);
                px.setGreen(0.8 * avg);
                px.setBlue(0);
            } else {
                px.setRed(255);
                px.setGreen( (avg * 1.2) - 51 );
                px.setBlue( (avg * 2) - 255 );
            }
        }  
        if (px.getY() <= imgPart * 3 && px.getY() > imgPart * 2) {
            if (avg < 128) {
                px.setRed(avg * 2);
                px.setGreen(2 * avg);
                px.setBlue(0);
            } else {
                px.setRed(255);
                px.setGreen(255);
                px.setBlue( (avg * 2) - 255 );
            }
        } 
        if (px.getY() <= imgPart * 4 && px.getY() > imgPart * 3) {
            if (avg < 128) {
                px.setRed(0);
                px.setGreen(2 * avg);
                px.setBlue(0);
            } else {
                px.setRed( (avg * 2) - 255 );
                px.setGreen(255);
                px.setBlue( (avg * 2) - 255 );
            }
        } 
        if (px.getY() <= imgPart * 5 && px.getY() > imgPart * 4) {
            if (avg < 128) {
                px.setRed(0);
                px.setGreen(0);
                px.setBlue(2 * avg);
            } else {
                px.setRed( (avg * 2) - 255 );
                px.setGreen( (avg * 2) - 255 );
                px.setBlue(255);
            }
        }
        if (px.getY() <= imgPart * 6 && px.getY() > imgPart * 5) {
            if (avg < 128) {
                px.setRed(0.8 * avg);
                px.setGreen(0);
                px.setBlue(2 * avg);
            } else {
                px.setRed( (avg * 1.2) - 51 );
                px.setGreen( (avg * 2) - 255 );
                px.setBlue(255);
            }
        }
        if (px.getY() > imgPart * 6) {
            if (avg < 128) {
                px.setRed(1.6 * avg);
                px.setGreen(0);
                px.setBlue(1.6 * avg);
            } else {
                px.setRed( (avg * 0.4) - 153 );
                px.setGreen( (avg * 2) - 255 );
                px.setBlue( (0.4 * avg) + 153);
            }
        }               
    }
}

function doRainbow() {
    if ( imageIsLoaded(rainbowImg) ) {
        filterRainbow();    
    } else alert("Image is not loaded!")
    rainbowImg.drawTo(can);
}

function filterBlur() {
    const w = blurImg.getWidth(),
          h = blurImg.getHeight();

    for ( let px of blurImg.values() ) {
        let x = px.getX(),
            y = px.getY(),
            nearByX = x + Math.ceil(Math.random() * 25),
            nearByY = y + Math.ceil(Math.random() * 25);
            if (nearByX >= w) {
                nearByX = w - Math.ceil(25 * Math.random()) - 1;
            }
            if (nearByY >= h) {
                nearByY = h - Math.ceil(25 * Math.random()) - 1;
            }
            let newPx = blurImg.getPixel(nearByX, nearByY);

        if (Math.random() < 0.5) {
            blurImg.setPixel(x, y, px);
        } else {
            blurImg.setPixel(x, y, newPx);
        }
    }
}

function doBlur() {
    if ( imageIsLoaded(blurImg) ) {
        filterBlur();    
    } else alert("Image is not loaded!")
    blurImg.drawTo(can);
}

function filterWindow() {
    const w = windowImg.getWidth(),
          h = windowImg.getHeight();
    for ( let px of windowImg.values() ) {
        let x = px.getX(),
            y = px.getY();
        if (x <= w / 20 ||
            x > w - w / 20 ||
            y <= h / 20 ||
            y > h - h / 20 ||
            y >= h / 2 - h / 20 && y <= h / 2 + h / 20 ||
            x >= w / 4 - w / 30 && x <= w / 4 + w / 30 ||
            x >= w / 2 - w / 30 && x <= w / 2 + w / 30 ||
            x >= w - w / 4 - w / 30 && x <= w - w / 4 + w / 30) {
            px.setRed(0);
            px.setGreen(0);
            px.setBlue(0);
        }  
    }
}

function doWindow() {
    if ( imageIsLoaded(windowImg) ) {
        filterWindow();    
    } else alert("Image is not loaded!")
    windowImg.drawTo(can);
}

// function filterMirror() {
//     ctx.scale(-1, 1);
//     ctx.drawImage(mirrorImg, 0, 0);
// }

// function doMirror() {
//     if ( imageIsLoaded(mirrorImg) ) {
//         filterMirror();    
//     } else alert("Image is not loaded!")

// }

function resetImg() {
    if ( imageIsLoaded(img) ) {
        img.drawTo(can);    
    } else alert("Image is not loaded!")
}

function clearImg() {
    if ( imageIsLoaded(img) ) {
        ctx.clearRect(0, 0, can.width, can.height);
        fileInput.value = null;
        img = null; 
        grayImg = null,
        redImg = null;
        rainbowImg = null;  
        blurImg = null;
        windowImg = null;  
        mirrorImg = null;   
    } else alert("Image is not loaded!")
}
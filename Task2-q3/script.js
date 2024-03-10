let QRCode=require('qrcode');
let userdetails = document.querySelector('#userinp');
function qrgen() {
    QRCode.toFile('./qr.png','here only', {
        color: {
            dark: '#000000',  // Specify colors in hexadecimal format
            light: '#ffffff'
        }
    }, function (err, url) {
        if (err) throw err;
        console.log('done');
        // You can handle the generated QR code URL here
        console.log(url);
    });
}

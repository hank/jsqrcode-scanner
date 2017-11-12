function read(a)
{
    console.log("QR: "+a);
    $("#out-value").text(a);
}

qrcode.callback = read;

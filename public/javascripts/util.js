/* calculate a length=12 id */
function make_12_id() {
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cl = chars.length;
    var r = "";

    for (var i=0; i<12; i++) {
        r += chars[Math.floor(Math.random()*cl)]
    }

    return r;
}

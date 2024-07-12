function startTime() {
    const today = new Date();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let THH = today.getHours();
    let TH = AmPm(THH);

    m = checkTime(m);
    s = checkTime(s);

    TH = checkTime(TH);

    let t = arrange(TH, m, s);

    t = MeridianSet(THH, t);

    document.getElementById('PT').innerHTML = t;
    setTimeout(startTime, 1000);
    }

    function checkTime(i) {
    if (i < 10) {
    i = "0" + i
    };
    return i;
    }

    function AmPm(q) {

    if (q > 12) {
    q = q - 12
    } else if (q < 1) {
    q = q + 12;
    }
    return q;
    }

    function arrange(h, m, s) {
    let v = h + "&nbsp:&nbsp" + m + "&nbsp:&nbsp" + s;
    return v;
    }

    function MeridianSet(q, v) {
    q >= 12 || q <= 0 ? v += "&nbsp PM" : v += "&nbsp AM";
    return v;
    }
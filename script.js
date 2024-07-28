const display = document.querySelector('.submit');
const row1 = document.querySelectorAll('.top-pins td');
const row2 = document.querySelectorAll('.control-pins td');
const row3 = document.querySelectorAll('.master-pins td');
const row4 = document.querySelectorAll('.bottom-pins td');
const rows = document.querySelectorAll('td');
const vals = [[10, 23, 10], [7, 24, 15], [6, 23, 15]];

display.addEventListener('click', function (evt){
    evt.preventDefault();
    let mk = document.querySelector('#Mk').value;

    let ck = document.querySelector('#Ck').value;

    let uk = document.querySelector('#Uk').value;
    if(uk.length < 2) {
        return;
    }

    let tpp = [];
    let ctp = [];
    let mtp = [];
    let btp = [];

    for (let i = 0; i < ck.length; i++) {
        // bottom Pins
        btp.push(Math.min(mk[i], uk[i]));
        // master Pins
        mtp.push(Math.abs((parseInt(mk[i]) - parseInt(uk[i]))));
    }

    let aVal = document.querySelector('input[name="IC"]:checked').value;

    for (let i = 0; i < ck.length; i++) {
        // control Pins
        ctp.push((parseInt(ck[i]) + vals[aVal][0]) - (parseInt(mtp[i]) + parseInt(btp[i])));
        // top Pins
        tpp.push(vals[aVal][1] - (parseInt(ck[i]) + vals[aVal][2]));
    }

    for (let i = 0; i < ck.length; i++) {
        row1[i].innerHTML = tpp[i];
        row2[i].innerHTML = ctp[i];
        row3[i].innerHTML = mtp[i];
        row4[i].innerHTML = btp[i];
    }
    rows.forEach(row =>{
        if(row.innerHTML === '1') {
            row.style.color = 'red';
        } else if(row.innerHTML === '0') {
            row.innerHTML = '-';
        }
    })
})
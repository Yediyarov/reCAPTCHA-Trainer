var images_list = ['3G97XE.png', 'JFWFN4.png', 'A6Y5UU.png', 'QA4ATT.png', 'XK72D7.png', 'TU2D45.png', 'BG96K8.png', 'XPD2D7.png', '6KQUNM.png', 'U6PUY9.png', 'TUNKFE.png', 'MT7LE4.png', 'WXPJ8X.png', 'TU848M.png', '3STWTY.png', 'MXX8XU.png', '3JEJCU.png', 'E3DWW2.png', 'LXMS6S.png', '73QQXW.png', 'C3S7XF.png', 'BXK9HX.png', 'PNT9RX.png', '3RA8BV.png', '7LXBE2.png', '9NHQP2.png', 'GTDB6K.png', '2T4T3L.png', 'FAT9QD.png', 'K376VB.png', 'KSX6NP.png', 'JRQPXA.png', 'QN6NL2.png', 'WKEJTS.png', '2CX8JH.png', 'FRPM8A.png', 'BUCU64.png', '8984RA.png', 'X2G9C9.png', 'H6UTAK.png', 'EK9BEW.png', 'D3TE7S.png', 'XYXYXD.png', '5N3WKS.png', 'YUG78C.png', 'UKYBQM.png', '77SMV7.png', 'FURBGM.png', '2G8LWD.png', 'U7ADRH.png', 'BKBSSK.png', 'GQG98V.png', 'NDJBUN.png', 'FGGUQ9.png', 'UJC4CC.png', 'EKP2VR.png', 'UKJSGV.png', '8RCNAE.png', 'PERRK4.png', '9QN55F.png', 'AM5QDX.png', 'D99JRR.png', 'CWV53Q.png', '7DMJQD.png', '23GMX9.png', 'QR8VCX.png', 'MKLMTW.png', 'UUP6GF.png', '2RLG4L.png', '4FLXK6.png', '6RFL6S.png', 'XRE66B.png', 'FYTB4N.png', 'HRKDJ7.png', 'J93RP2.png', '2XUGXM.png', '49QAM4.png', 'QD6X37.png', 'V9PTML.png', 'T9X26R.png', 'R3GPCF.png', '8CSVX8.png', '4UNJ38.png', 'XRTND3.png', 'M32V88.png', 'WF66FW.png', 'WU4SJK.png', 'ARWEAY.png', 'QRRX78.png', 'J3A8BY.png', '5F8LFE.png', 'DUWL5P.png', '9XJS3H.png', 'RKK4MF.png', 'T7CUR8.png', 'UX2CVF.png', 'NXFB9N.png', '8X72ES.png', '5XRSBL.png', 'U3NE2Y.png', '56XNUD.png', 'R42YUL.png', 'NUET9D.png', '83CDT8.png', 'J4TQ39.png', 'CNPGDK.png', 'XGTXU9.png', '5KYACF.png', '26JB7L.png', 'X6544F.png', '5NLFC3.png', 'BCG6N7.png', 'AW5FWS.png', 'G3LG8X.png', '9KF4GN.png', '6CDNU3.png', 'QB3A6D.png', 'WY9SMU.png', 'SNK29S.png', 'GC9PLG.png', '7TU32V.png', 'MNXHF3.png', '5X4YWB.png', 'KKBREE.png', 'EXL93Y.png', 'DD37MS.png', 'YAJRNE.png', 'X6GUQ6.png', 'VK3VRN.png', '23AWTQ.png', 'XKEVLQ.png', '6CE2NP.png', 'J3LN53.png', '93KPYR.png', 'BMG772.png', 'TXARFY.png', 'GK5DKH.png', 'EX5KR6.png', 'Q6BMWS.png', 'D9YBPJ.png', 'JGV4TE.png', '7GSCE2.png', 'MNE2PS.png', '66JBQM.png', 'T34P2D.png', 'VNEYAL.png', 'CUC4DF.png', '23W672.png', '7NN2D4.png', 'WGSDT8.png', 'HJQ2ES.png', '6GFVLX.png', 'K62BP2.png', 'CKUBKT.png', 'C9MJ4T.png', '6DLQS8.png', 'DQ5W9N.png', 'FMWYC8.png', 'C7KUTG.png', 'FYD2HJ.png', 'HNHPBT.png', '33XQ92.png', 'ANUJCQ.png', 'WGCUKF.png', '9FNEKM.png', 'LCPHRN.png', '3R9VG9.png', 'GX7Y2L.png', 'GG3DHH.png', 'PG6EJ2.png', 'RGJMM7.png', 'Q9JS3L.png', '5D393Y.png']

var captcha_input =  `
            <img class="capthca-img" src="captcha-images/A6Y5UU.png" alt="">
            <input type="text" class="form-control" id="captcha-answer" placeholder="captcha answer">
`;
var captcha_inputs_block = $('#captcha-inputs');
images_list.forEach(appendCaptchaInputs);


function appendCaptchaInputs(captchaImgName){
    captcha_inputs_block.append(`
        <img class="capthca-img" src="captcha-images/${captchaImgName}" alt="">
        <input type="text" data-answer="${captchaImgName.slice(0, 6)}" class="form-control captcha-answer-input" placeholder="captcha answer">
`);
}

// $('.captcha-answer-inputs').change(function(){
//     console.log($(this).data('answer'));
//     console.log($(this).value);

//     if($(this).data('answer') == $(this).value){
//         console.log('Duzdu')
//     }
// })

$(document).on('change', '.captcha-answer-input', function() {
    var correct_answer = $(this).data('answer');
    var user_answer = $(this).val().toUpperCase();
    if(correct_answer == user_answer){
        $(this).addClass('is-valid')
        $(this).removeClass('is-invalid')
    }else{
        $(this).addClass('is-invalid')
        $(this).removeClass('is-valid')
    }
});

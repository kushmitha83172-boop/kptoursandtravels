// =========Chikmaglur
const autoChangeac = document.querySelector('.auto-changeac');
const autoChangeImagesac = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664569/mullayanagiri_1_ghkn6b.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664569/mullayanagiri_2_dcdq2j.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664571/mullayanagiri_4_dnqude.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664571/mullayanagiri_4_yjtzx2.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664572/mullayanagiri_5_h8bz6j.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664572/mullayanagiri_6_pn5ulq.jpg'
];
let autoChangeIndexac = 0;
// Set first image immediately
autoChangeac.src = autoChangeImagesac[0];
// Start interval
setInterval(() => {
    autoChangeIndexac = (autoChangeIndexac + 1) % autoChangeImagesac.length;
    autoChangeac.setAttribute("src", autoChangeImagesac[autoChangeIndexac]);
}, 2000);



const autoChangekb = document.querySelector('.auto-changekb');
const autoChangeImageskb = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664505/Baba_Budangiri_2_vsdguk.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664505/Baba_Budangiri_3_kmuwjg.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664506/Baba_Budangiri_4_a1yeuj.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664507/Baba_Budangiri_5_ee8lbu.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664507/baba_bundangiri_hills_och72n.jpg'
];
let autoChangeIndexkb = 0;
// Set first image immediately
autoChangekb.src = autoChangeImageskb[0];
// Start interval
setInterval(() => {
    autoChangeIndexkb = (autoChangeIndexkb + 1) % autoChangeImageskb.length;
    autoChangekb.setAttribute("src", autoChangeImageskb[autoChangeIndexkb]);
}, 2000);


const autoChangepp = document.querySelector('.auto-changepp');
const autoChangeImagespp = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664537/hebbe_falls2_fxhxao.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664537/hebbe_falls_ucydlm.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664538/hebbe_falls3_yg9akx.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664539/hebbe_falls5_pb62li.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664539/hebbe_falls6_gu4cys.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664541/hebbe_falls4_qetitc.jpg'
];
let autoChangeIndexpp = 0;
// Set first image immediately
autoChangepp.src = autoChangeImagespp[0];
// Start interval
setInterval(() => {
    autoChangeIndexpp = (autoChangeIndexpp + 1) % autoChangeImagespp.length;
    autoChangepp.setAttribute("src", autoChangeImagespp[autoChangeIndexpp]);
}, 2000);



const autoChangesf = document.querySelector('.auto-changesf');
const autoChangeImagessf = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664546/jhari_falls_remhrr.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664546/jhari_falls2_axywaq.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664547/jhari_falls3_jsj3zg.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664547/jhari_falls4_btt5au.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664548/jhari_falls5_dsl1nw.jpg'
];
let autoChangeIndexsf = 0;
// Set first image immediately
autoChangesf.src = autoChangeImagessf[0];
// Start interval
setInterval(() => {
    autoChangeIndexsf = (autoChangeIndexsf + 1) % autoChangeImagessf.length;
    autoChangesf.setAttribute("src", autoChangeImagessf[autoChangeIndexsf]);
}, 2000);



const autoChangert = document.querySelector('.auto-changert');
const autoChangeImagesrt = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664552/kal_jbc6zm.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664552/kalhatti_falls_1_pzwalk.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664553/kalhatti_falls_2_jv0oey.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664554/kalhatti_falls_3_ahjn9v.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664555/kalhatti_falls_4_au492p.jpg'
];
let autoChangeIndexrt = 0;
// Set first image immediately
autoChangert.src = autoChangeImagesrt[0];
// Start interval
setInterval(() => {
    autoChangeIndexrt = (autoChangeIndexrt + 1) % autoChangeImagesrt.length;
    autoChangert.setAttribute("src", autoChangeImagesrt[autoChangeIndexrt]);
}, 2000);



const autoChangerm = document.querySelector('.auto-changerm');
const autoChangeImagesrm = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664557/kemmannugundi2_ildu8t.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664557/kemmannugundi_tv0jw6.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664557/kemmannugundi3_olidig.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664557/kemmannugundi3_olidig.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664557/kemmanagundi6-hills_x0nqp0.jpg'
];
let autoChangeIndexrm = 0;
// Set first image immediately
autoChangerm.src = autoChangeImagesrm[0];
// Start interval
setInterval(() => {
    autoChangeIndexrm = (autoChangeIndexrm + 1) % autoChangeImagesrm.length;
    autoChangerm.setAttribute("src", autoChangeImagesrm[autoChangeIndexrm]);
}, 2000);



const autoChangekl = document.querySelector('.auto-changekl');
const autoChangeImageskl = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664583/z_point_5_tycxtl.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664582/z_point_4_qrzndd.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664582/z_point_3_e90nvb.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664581/z_point_2_bqasiy.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664580/z_point_1_r515ha.jpg'
];
let autoChangeIndexkl = 0;
// Set first image immediately
autoChangekl.src = autoChangeImageskl[0];
// Start interval
setInterval(() => {
    autoChangeIndexkl = (autoChangeIndexkl + 1) % autoChangeImageskl.length;
    autoChangekl.setAttribute("src", autoChangeImageskl[autoChangeIndexkl]);
}, 2000);




const autoChangerb = document.querySelector('.auto-changerb');
const autoChangeImagesrb = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664540/hirekolale_lake1_sc0xg1.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664540/hirekolale_lake2_pxr7zb.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664541/hirekolale_lake3_ryiu36.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664542/hirekolale_lake4_y54yks.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664543/hirekolale_lake5_ibwg31.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664543/Hirekolale_viewpoint_1_sxzmxj.jpg'
];
let autoChangeIndexrb = 0;
// Set first image immediately
autoChangerb.src = autoChangeImagesrb[0];
// Start interval
setInterval(() => {
    autoChangeIndexrb = (autoChangeIndexrb + 1) % autoChangeImagesrb.length;
    autoChangerb.setAttribute("src", autoChangeImagesrb[autoChangeIndexrb]);
}, 2000);




const autoChangegrs = document.querySelector('.auto-changegrs');
const autoChangeImagesgrs = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664502/ayyanakere_lake1_e01zt9.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664502/ayyanakere-lake-2_i7ghcc.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664503/ayyanakere-lake-3_yicxqa.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664503/ayyanakere-lake-4_kfcma5.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664504/ayyanakere-lake-5_a2beio.jpg'
];
let autoChangeIndexgrs = 0;
// Set first image immediately
autoChangegrs.src = autoChangeImagesgrs[0];
// Start interval
setInterval(() => {
    autoChangeIndexgrs = (autoChangeIndexgrs + 1) % autoChangeImagesgrs.length;
    autoChangegrs.setAttribute("src", autoChangeImagesgrs[autoChangeIndexgrs]);
}, 2000);




const autoChangekrs = document.querySelector('.auto-changekrs');
const autoChangeImageskrs = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664520/bhadra_wild_sanctuary1_zrzbdx.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664521/Bhadra-Wildlife-Sanctuary2_hnq1uf.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664522/Bhadra-Wildlife-Sanctuary4_hwrxpz.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664521/Bhadra-Wildlife-Sanctuary3_wly23w.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664523/Bhadra-Wildlife-Sanctuary5_jb9xpd.webp'
];
let autoChangeIndexkrs = 0;
// Set first image immediately
autoChangekrs.src = autoChangeImageskrs[0];
// Start interval
setInterval(() => {
    autoChangeIndexkrs = (autoChangeIndexkrs + 1) % autoChangeImageskrs.length;
    autoChangekrs.setAttribute("src", autoChangeImageskrs[autoChangeIndexkrs]);
}, 2000);





const autoChangebd = document.querySelector('.auto-changebd');
const autoChangeImagesbd = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664519/Bhadra_Dam5_hihwp6.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664519/Bhadra_Dam4_pcgui7.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664518/Bhadra_Dam3_lfwh1u.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664518/Bhadra_Dam2_fwbppl.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664517/Bhadra_Dam1_slalni.jpg'
];
let autoChangeIndexbd = 0;
// Set first image immediately
autoChangebd.src = autoChangeImagesbd[0];
// Start interval
setInterval(() => {
    autoChangeIndexbd = (autoChangeIndexbd + 1) % autoChangeImagesbd.length;
    autoChangebd.setAttribute("src", autoChangeImagesbd[autoChangeIndexbd]);
}, 2000);


const autoChangekn = document.querySelector('.auto-changekn');
const autoChangeImageskn = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664562/kudremukh_national_park5_iqwqlg.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664562/kudremukh_national_park4_yzenrn.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664561/kudremukh_national_park3_hatntd.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664561/kudremukh_national_park2_g9jlyx.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664560/Kudremukh_National_Park1_jen6sz.avif'
];
let autoChangeIndexkn = 0;
// Set first image immediately
autoChangekn.src = autoChangeImageskn[0];
// Start interval
setInterval(() => {
    autoChangeIndexkn = (autoChangeIndexkn + 1) % autoChangeImageskn.length;
    autoChangekn.setAttribute("src", autoChangeImageskn[autoChangeIndexkn]);
}, 2000);





const autoChangekp = document.querySelector('.auto-changekp');
const autoChangeImageskp = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664565/kudremukh_peak5_hckni2.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664564/kudremukh_peak4_ftmrls.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664564/kudremukh_peak3_xvh6oa.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664563/kudremukh_peak2_zmbn34.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664563/kudremukh_peak1_nvsrb1.jpg'
];
let autoChangeIndexkp = 0;
// Set first image immediately
autoChangekp.src = autoChangeImageskp[0];
// Start interval
setInterval(() => {
    autoChangeIndexkp = (autoChangeIndexkp + 1) % autoChangeImageskp.length;
    autoChangekp.setAttribute("src", autoChangeImageskp[autoChangeIndexkp]);
}, 2000);



const autoChangeg = document.querySelector('.auto-changeg');
const autoChangeImagesg = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664532/gangamoola3_gblnrg.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664532/gangamoola2_h1p3kb.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664531/gangamoola1_kr3ig2.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664532/gangamoola3_gblnrg.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664532/gangamoola2_h1p3kb.jpg'
];
let autoChangeIndexg = 0;
// Set first image immediately
autoChangeg.src = autoChangeImagesg[0];
// Start interval
setInterval(() => {
    autoChangeIndexg = (autoChangeIndexg + 1) % autoChangeImagesg.length;
    autoChangeg.setAttribute("src", autoChangeImagesg[autoChangeIndexg]);
}, 2000);




const autoChangebdf = document.querySelector('.auto-changebf');
const autoChangeImagesbdf = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664510/ballalarayana_durga_fort5_orz6rp.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664509/ballalarayana_durga_fort4_ljrnnj.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664509/ballalarayana_durga_fort3_l1iitw.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664508/ballalarayana_durga_fort2_znvafa.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664508/ballalarayana_durga_fort1_jjtfym.jpg'
];
let autoChangeIndexbdf = 0;
// Set first image immediately
autoChangebf.src = autoChangeImagesbf[0];
// Start interval
setInterval(() => {
    autoChangeIndexbdf = (autoChangeIndexbdf + 1) % autoChangeImagesbdf.length;
    autoChangebdf.setAttribute("src", autoChangeImagesbdf[autoChangeIndexbdf]);
}, 2000);



const autoChangebt = document.querySelector('.auto-changebt');
const autoChangeImagesbt = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664513/ballalarayana_durga_peak5_is3rqi.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664512/ballalarayana_durga_peak4_odxcvd.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664512/ballalarayana_durga_peak3_y3bwcl.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664511/ballalarayana_durga_peak2_evwlzx.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664511/ballalarayana_durga_peak1_cccrtw.jpg'
];
let autoChangeIndexbt = 0;
// Set first image immediately
autoChangebt.src = autoChangeImagesbt[0];
// Start interval
setInterval(() => {
    autoChangeIndexbt = (autoChangeIndexbt + 1) % autoChangeImagesbt.length;
    autoChangebt.setAttribute("src", autoChangeImagesbt[autoChangeIndexbt]);
}, 2000);


const autoChangehg = document.querySelector('.auto-changehg');
const autoChangeImageshg = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664536/hanuman_gundi_falls5_e54apr.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664535/hanuman_gundi_falls4_pkgolz.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664534/hanuman_gundi_falls3_pkgay6.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664534/hanuman_gundi_falls2_xbpiwg.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664533/hanuman_gundi_falls1_fxbgxg.png'
];
let autoChangeIndexhg = 0;
// Set first image immediately
autoChangehg.src = autoChangeImageshg[0];
// Start interval
setInterval(() => {
    autoChangeIndexhg = (autoChangeIndexhg + 1) % autoChangeImageshg.length;
    autoChangehg.setAttribute("src", autoChangeImageshg[autoChangeIndexhg]);
}, 2000);


const autoChangekf = document.querySelector('.auto-changekf');
const autoChangeImageskf = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664551/kadambi_falls5_lncitz.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664550/kadambi_falls4_snmex6.png',
    'https://res.cloudinary.com/svbs/image/upload/v1773664550/kadambi_falls3_sha79n.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664549/kadambi_falls2_frlr95.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664549/kadambi_falls1_subfmx.jpg'
];
let autoChangeIndexkf = 0;
// Set first image immediately
autoChangekf.src = autoChangeImageskf[0];
// Start interval
setInterval(() => {
    autoChangeIndexkf = (autoChangeIndexkf + 1) % autoChangeImageskf.length;
    autoChangekf.setAttribute("src", autoChangeImageskf[autoChangeIndexkf]);
}, 2000);

const autoChangess = document.querySelector('.auto-changess');
const autoChangeImagesss = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664580/sringeri_sharada_peetham5_ddvywm.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664579/sringeri_sharada_peetham4_ynjpdf.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664579/sringeri_sharada_peetham2_r4lmli.png',
    'https://res.cloudinary.com/svbs/image/upload/v1773664579/sringeri_sharada_peetham3_hbuesh.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664577/sringeri_sharada_peetham1_we3jyg.webp'
];
let autoChangeIndexss = 0;
// Set first image immediately
autoChangess.src = autoChangeImagesss[0];
// Start interval
setInterval(() => {
    autoChangeIndexss = (autoChangeIndexss + 1) % autoChangeImagesss.length;
    autoChangess.setAttribute("src", autoChangeImagesss[autoChangeIndexss]);
}, 2000);

const autoChangeha = document.querySelector('.auto-changeha');
const autoChangeImagesha = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664502/Annapoorneshwari_Temple_Horanadu5_hsd8ei.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664501/Annapoorneshwari_Temple_Horanadu4_mszkwq.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664500/Annapoorneshwari_Temple_Horanadu3_idwn8r.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664499/Annapoorneshwari_Temple_Horanadu2_km27ow.png',
    'https://res.cloudinary.com/svbs/image/upload/v1773664499/Annapoorneshwari_Temple_Horanadu1_nijxcy.jpg'
];
let autoChangeIndexha = 0;
// Set first image immediately
autoChangeha.src = autoChangeImagesha[0];
// Start interval
setInterval(() => {
    autoChangeIndexha = (autoChangeIndexha + 1) % autoChangeImagesha.length;
    autoChangeha.setAttribute("src", autoChangeImagesha[autoChangeIndexha]);
}, 2000);

const autoChangebv = document.querySelector('.auto-changebv');
const autoChangeImagesbv = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664515/Belavadi_veeranarayana_temple_4_flt7e0.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664515/Belavadi_veeranarayana_temple_3_jg0byc.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664514/Belavadi_veeranarayana_temple_2_tbldjt.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664514/Belavadi_veeranarayana_temple_1_ohkocg.jpg'
];
let autoChangeIndexbv = 0;
// Set first image immediately
autoChangebv.src = autoChangeImagesbv[0];
// Start interval
setInterval(() => {
    autoChangeIndexbv = (autoChangeIndexbv + 1) % autoChangeImagesbv.length;
    autoChangebv.setAttribute("src", autoChangeImagesbv[autoChangeIndexbv]);
}, 2000);

const autoChangeat = document.querySelector('.auto-changeat');
const autoChangeImagesat = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664498/Amrutheshwara_temple_3_vnc11e.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664498/Amrutheshwara_temple_4_q4sucq.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664498/Amrutheshwara_temple_2_gqntws.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664497/Amrutheshwara_temple_1_qzwlui.jpg'
];
let autoChangeIndexat = 0;
// Set first image immediately
autoChangeat.src = autoChangeImagesat[0];
// Start interval
setInterval(() => {
    autoChangeIndexat = (autoChangeIndexat + 1) % autoChangeImagesat.length;
    autoChangeat.setAttribute("src", autoChangeImagesat[autoChangeIndexat]);
}, 2000);

const autoChangedv = document.querySelector('.auto-changedv');
const autoChangeImagesdv = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664529/Devaramani_vewpoint_1_s9hrlm.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664530/Devaramani_vewpoint_2_mozrkz.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664530/Devaramani_vewpoint_3_wtfaus.jpg'
];
let autoChangeIndexdv = 0;
// Set first image immediately
autoChangedv.src = autoChangeImagesdv[0];
// Start interval
setInterval(() => {
    autoChangeIndexdv = (autoChangeIndexdv + 1) % autoChangeImagesdv.length;
    autoChangedv.setAttribute("src", autoChangeImagesdv[autoChangeIndexdv]);
}, 2000);


const autoChangemf = document.querySelector('.auto-changemf');
const autoChangeImagesmf = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664575/Muthodi_forest_1_topdbj.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664576/muthodi_Forest_3_jwkivh.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664576/Muthodi_forest_2_cilbx0.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664577/Muthodi_forest_4_f8gtdd.jpg'
];
let autoChangeIndexmf = 0;
// Set first image immediately
autoChangemf.src = autoChangeImagesmf[0];
// Start interval
setInterval(() => {
    autoChangeIndexmf = (autoChangeIndexmf + 1) % autoChangeImagesmf.length;
    autoChangemf.setAttribute("src", autoChangeImagesmf[autoChangeIndexmf]);
}, 2000);

const autoChangecm = document.querySelector('.auto-changecm');
const autoChangeImagescm = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664523/coffe_museum_3_nxuwoj.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664524/coffe_museum_4_egbvms.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664524/coffe_museum_5_e9za6v.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664525/coffe_musium_1_lrh9yz.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664526/Coffe_musium_2_brg0uo.jpg'
];
let autoChangeIndexcm = 0;
// Set first image immediately
autoChangecm.src = autoChangeImagescm[0];
// Start interval
setInterval(() => {
    autoChangeIndexcm = (autoChangeIndexcm + 1) % autoChangeImagescm.length;
    autoChangecm.setAttribute("src", autoChangeImagescm[autoChangeIndexcm]);
}, 2000);

const autoChangemf1 = document.querySelector('.auto-changemf1');
const autoChangeImagesmf1 = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664566/Manikyadhara_falls_1_txvybl.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664567/Manikyadhara_falls_2_cqeagx.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664568/Manikyadhara_falls_3_n35zlv.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664568/Manikyadhara_falls_4_mqgmdl.jpg'
];
let autoChangeIndexmf1 = 0;
// Set first image immediately
autoChangemf1.src = autoChangeImagesmf1[0];
// Start interval
setInterval(() => {
    autoChangeIndexmf1 = (autoChangeIndexmf1 + 1) % autoChangeImagesmf1.length;
    autoChangemf1.setAttribute("src", autoChangeImagesmf1[autoChangeIndexmf1]);
}, 2000);

const autoChangedp = document.querySelector('.auto-changedp');
const autoChangeImagesdp = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664526/Data_peeta_2_yb6snr.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664527/Datta_peeta_1_elrefe.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664528/Datta_peeta_3_xgvfqm.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664528/Datta_peeta_4_usuz0j.jpg'
];
let autoChangeIndexdp = 0;
// Set first image immediately
autoChangedp.src = autoChangeImagesdp[0];
// Start interval
setInterval(() => {
    autoChangeIndexdp = (autoChangeIndexdp + 1) % autoChangeImagesdp.length;
    autoChangedp.setAttribute("src", autoChangeImagesdp[autoChangeIndexdp]);
}, 2000);

const autoChangehv = document.querySelector('.auto-changehv');
const autoChangeImageshv = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664540/hirekolale_lake1_sc0xg1.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664541/hebbe_falls4_qetitc.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664540/hirekolale_lake2_pxr7zb.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664541/hirekolale_lake3_ryiu36.jpg'
];
let autoChangeIndexhv = 0;
// Set first image immediately
autoChangehv.src = autoChangeImageshv[0];
// Start interval
setInterval(() => {
    autoChangeIndexhv = (autoChangeIndexhv + 1) % autoChangeImageshv.length;
    autoChangehv.setAttribute("src", autoChangeImageshv[autoChangeIndexhv]);
}, 2000);

const autoChangemts = document.querySelector('.auto-changemts');
const autoChangeImagesmts = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664569/mullayanagiri_1_ghkn6b.webp',
    'https://res.cloudinary.com/svbs/image/upload/v1773664569/mullayanagiri_2_dcdq2j.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664571/mullayanagiri_4_dnqude.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664570/mullayanagiri_3_ngvnu7.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664572/mullayanagiri_5_h8bz6j.jpg'
];
let autoChangeIndexmts = 0;
// Set first image immediately
autoChangemts.src = autoChangeImagesmts[0];
// Start interval
setInterval(() => {
    autoChangeIndexmts = (autoChangeIndexmts + 1) % autoChangeImagesmts.length;
    autoChangemts.setAttribute("src", autoChangeImagesmts[autoChangeIndexmts]);
}, 2000);

const autoChangekt = document.querySelector('.auto-changekt');
const autoChangeImageskt = [
    'https://res.cloudinary.com/svbs/image/upload/v1773664558/kudremuk_treck_2_v1l2bs.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664558/kudremuk_treck_3_j2kg8l.jpg',
    'https://res.cloudinary.com/svbs/image/upload/v1773664559/kudremuk_treck_4_hhw5os.jpg'
];
let autoChangeIndexkt = 0;
// Set first image immediately
autoChangekt.src = autoChangeImageskt[0];
// Start interval
setInterval(() => {
    autoChangeIndexkt = (autoChangeIndexkt + 1) % autoChangeImageskt.length;
    autoChangekt.setAttribute("src", autoChangeImageskt[autoChangeIndexkt]);
}, 2000);
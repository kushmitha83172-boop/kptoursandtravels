const autoChangerbs = document.querySelector('.auto-changerbs');
            const autoChangeImagesrbs = [
              'https://www.mysoretourism.org.in/images//v2/tourist-places/ranganathittu-bird-sanctuary-mysore//ranganathittu-bird-sanctuary-3.jpg',
              'https://mysuruinfrahub.com/wp-content/uploads/2023/07/paintedstork.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbasYtnAlY2PPd3me3LrRUj7-QyTcEVi5zwg&s',
              'https://www.mysoretourism.org.in/images//v2/tourist-places/ranganathittu-bird-sanctuary-mysore//ranganathittu-bird-sanctuary-5.jpg',
              'https://www.mysoretourism.org.in/images//v2/tourist-places/ranganathittu-bird-sanctuary-mysore//ranganathittu-bird-sanctuary-2.jpg'
            ];
            let autoChangeIndexrbs = 0;
            // Set first image immediately
            autoChangerbs.src = autoChangeImagesrbs[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexrbs = (autoChangeIndexrbs + 1) % autoChangeImagesrbs.length;
              autoChangerbs.setAttribute("src", autoChangeImagesrbs[autoChangeIndexrbs]);
            }, 2000);



            const autoChangebg = document.querySelector('.auto-changebg');
            const autoChangeImagesbg = [
              'https://res.cloudinary.com/svbs/image/upload/v1773401981/brindavan_garden5_hyefbj.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773401977/brindavan_garden4_xaqqs9.avif',
              'https://res.cloudinary.com/svbs/image/upload/v1773401976/brindavan_garden3_hhatl8.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773401974/brindavan_garden1_t1nkvs.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773401973/brindavan_garden2_w5suog.jpg'
            ];
            let autoChangeIndexbg = 0;
            // Set first image immediately
            autoChangebg.src = autoChangeImagesbg[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexbg = (autoChangeIndexbg + 1) % autoChangeImagesbg.length;
              autoChangebg.setAttribute("src", autoChangeImagesbg[autoChangeIndexbg]);
            }, 2000);


            const autoChangekrs = document.querySelector('.auto-changekrs');
            const autoChangeImageskrs = [
              'https://res.cloudinary.com/svbs/image/upload/v1773402024/mysore-krs-dam_cwq4xh.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773402021/image_5_f4fut5.png',
              'https://res.cloudinary.com/svbs/image/upload/v1773402018/image_4_zgdcki.png',
              'https://res.cloudinary.com/svbs/image/upload/v1773402017/image_2_kbklzv.png',
              'https://res.cloudinary.com/svbs/image/upload/v1773402014/image_3_kdp698.png'
            ];
            let autoChangeIndexkrs = 0;
            // Set first image immediately
            autoChangekrs.src = autoChangeImageskrs[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexkrs = (autoChangeIndexkrs + 1) % autoChangeImageskrs.length;
              autoChangekrs.setAttribute("src", autoChangeImageskrs[autoChangeIndexkrs]);
            }, 2000);


            const autoChangegrs = document.querySelector('.auto-changegrs');
            const autoChangeImagesgrs = [
              'https://res.cloudinary.com/svbs/image/upload/v1773402029/theme_3_hajvne.png',
              'https://res.cloudinary.com/svbs/image/upload/v1773402008/theme_4_qngra1.png',
              'https://res.cloudinary.com/svbs/image/upload/v1773401983/maxresdefault_rs8ac2.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402004/theme_1_uuy4um.png',
              'https://res.cloudinary.com/svbs/image/upload/v1773401982/GRS_Fantasy_Park_6_c8fcxy.jpg'
            ];
            let autoChangeIndexgrs = 0;
            // Set first image immediately
            autoChangegrs.src = autoChangeImagesgrs[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexgrs = (autoChangeIndexgrs + 1) % autoChangeImagesgrs.length;
              autoChangegrs.setAttribute("src", autoChangeImagesgrs[autoChangeIndexgrs]);
            }, 2000);


            const autoChangerm = document.querySelector('.auto-changerm');
            const autoChangeImagesrm = [
              'https://res.cloudinary.com/svbs/image/upload/v1773402046/railway_museum3_rskor5.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402046/railway_museum1_xxikg4.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402058/railway_museum5_gpzmby.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402055/railway_museum4_vxrcdt.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402045/railway_museum2_tube00.jpg'
            ];
            let autoChangeIndexrm = 0;
            // Set first image immediately
            autoChangerm.src = autoChangeImagesrm[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexrm = (autoChangeIndexrm + 1) % autoChangeImagesrm.length;
              autoChangerm.setAttribute("src", autoChangeImagesrm[autoChangeIndexrm]);
            }, 2000);


            const autoChangepc = document.querySelector('.auto-changepc');
            const autoChangeImagespc = [
              'https://roamingruta.wordpress.com/wp-content/uploads/2015/11/mysore-church.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/St._Philomena%27s_Church%2C_Mysore_03.jpg/250px-St._Philomena%27s_Church%2C_Mysore_03.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/St._Philomena%27s_Church_-_The_Altair%2C_Mysore.jpg/960px-St._Philomena%27s_Church_-_The_Altair%2C_Mysore.jpg?_=20160924192826',
              'https://thumbs.dreamstime.com/b/st-philomena-s-church-catholic-built-honour-mysore-india-253243678.jpg',
              'https://www.explorebees.com/uploads/St%20Philomenas%20Cathedral.jpg'
            ];
            let autoChangeIndexpc = 0;
            // Set first image immediately
            autoChangepc.src = autoChangeImagespc[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexpc = (autoChangeIndexpc + 1) % autoChangeImagespc.length;
              autoChangepc.setAttribute("src", autoChangeImagespc[autoChangeIndexpc]);
            }, 2000);


            const autoChangejp = document.querySelector('.auto-changejp');
            const autoChangeImagesjp = [
              'https://res.cloudinary.com/svbs/image/upload/v1773401984/download_1_rbkll7.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773401985/download_mjpuqg.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773401985/OIP_1_z3osrz.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773401987/OIP_lhcjbf.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773402026/jaganmohana_palace_cj4mrl.jpg'
            ];
            let autoChangeIndexjp = 0;
            // Set first image immediately
            autoChangejp.src = autoChangeImagesjp[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexjp = (autoChangeIndexjp + 1) % autoChangeImagesjp.length;
              autoChangejp.setAttribute("src", autoChangeImagesjp[autoChangeIndexjp]);
            }, 2000);


            const autoChangewm = document.querySelector('.auto-changewm');
            const autoChangeImageswm = [
              'https://www.mysoretourism.org.in/images/v2/places-to-visit/melody-world-wax-museum-header-mysore-tourism.jpg',
              'https://www.trawell.in/admin/images/upload/21111630Melody_World_Wax_Museum.jpg',
              'https://www.explorebees.com/uploads/Melody%20World%20Wax%20Museum%20(6).jpg',
              'https://upload.wikimedia.org/wikipedia/commons/5/52/Melody_World_Wax_Museum_-_Mysore.jpg'
            ];
            let autoChangeIndexwm = 0;
            // Set first image immediately
            autoChangewm.src = autoChangeImageswm[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexwm = (autoChangeIndexwm + 1) % autoChangeImageswm.length;
              autoChangewm.setAttribute("src", autoChangeImageswm[autoChangeIndexwm]);
            }, 2000);


            const autoChangekl = document.querySelector('.auto-changekl');
            const autoChangeImageskl = [
              'https://res.cloudinary.com/svbs/image/upload/v1773402000/kl4_p4ympi.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773401995/kl5_dpqxgx.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773401994/kl3_jzc0kd.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773401991/kl2_puduuf.avif'
            ];
            let autoChangeIndexkl = 0;
            // Set first image immediately
            autoChangekl.src = autoChangeImageskl[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexkl = (autoChangeIndexkl + 1) % autoChangeImageskl.length;
              autoChangekl.setAttribute("src", autoChangeImageskl[autoChangeIndexkl]);
            }, 2000);


            const autoChangelm = document.querySelector('.auto-changelm');
            const autoChangeImageslm = [
              'https://res.cloudinary.com/svbs/image/upload/v1773402046/lalitha_mahal_1_jjwhcr.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402045/lalith_mahal6_uczvjv.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402041/Lalitha_Mahal_Palace_3_xoeejh.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402036/lalith_mahal5_rn3oq7.jpg',
              'https://res.cloudinary.com/svbs/image/upload/v1773402039/lalith_mahal7_bxocph.jpg'
            ];
            let autoChangeIndexlm = 0;
            // Set first image immediately
            autoChangelm.src = autoChangeImageslm[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexlm = (autoChangeIndexlm + 1) % autoChangeImageslm.length;
              autoChangelm.setAttribute("src", autoChangeImageslm[autoChangeIndexlm]);
            }, 2000);


            const autoChangesm = document.querySelector('.auto-changesm');
            const autoChangeImagessm = [
              'https://res.cloudinary.com/svbs/image/upload/v1773402078/mysore-sand-sculpture-museum-mysuru_yo9ihe.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773402071/OIP_1_hnevfp.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773402072/OIP_2_lnahvd.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773402071/OIP_1_hnevfp.webp',
              'https://res.cloudinary.com/svbs/image/upload/v1773402072/20150826175112_55de50f0c3fba_loten7.jpg'
            ];
            let autoChangeIndexsm = 0;
            // Set first image immediately
            autoChangesm.src = autoChangeImagessm[0];
            // Start interval
            setInterval(() => {
              autoChangeIndexsm = (autoChangeIndexsm + 1) % autoChangeImagessm.length;
              autoChangesm.setAttribute("src", autoChangeImagessm[autoChangeIndexsm]);
            }, 2000);
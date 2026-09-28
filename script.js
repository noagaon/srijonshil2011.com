document.addEventListener('DOMContentLoaded',function(){
 const btn=document.getElementById('menuBtn'),nav=document.getElementById('mainNav');
 if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('nav .has-sub>button').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();b.parentElement.classList.toggle('open')}));
 const iconMap=[
  ['হোম','fa-house'],['আমাদের সম্পর্কে','fa-circle-info'],['সংগঠনের পরিচিতি','fa-building'],['ইতিহাস','fa-clock-rotate-left'],['লক্ষ্য ও উদ্দেশ্য','fa-bullseye'],['মূলনীতি','fa-scale-balanced'],['গঠনতন্ত্র','fa-book'],['সাংগঠনিক কাঠামো','fa-sitemap'],['কার্যকরী কমিটি','fa-users-gear'],['স্থায়ী কমিটি','fa-people-group'],['উপদেষ্টা কমিটি','fa-user-tie'],
  ['আমাদের কার্যক্রম','fa-hand-holding-heart'],['শিক্ষা','fa-graduation-cap'],['স্বাস্থ্য','fa-heart-pulse'],['পরিবেশ','fa-leaf'],['সংস্কৃতি','fa-masks-theater'],['ক্রীড়া','fa-futbol'],['সচেতনতা','fa-bullhorn'],
  ['সদস্য তালিকা','fa-users'],['সাধারণ সদস্য','fa-user'],['প্রবাসী সদস্য','fa-earth-americas'],['দাতা সদস্য','fa-hand-holding-dollar'],['জুনিয়র সদস্য','fa-user-graduate'],['ইউনিট','fa-location-dot'],['ব্লাড ডোনার্স ইউনিট','fa-droplet'],['ইমার্জেন্সি রেসপন্স ইউনিট','fa-truck-medical'],['মিডিয়া ইউনিট','fa-photo-film'],
  ['আমাদের অর্জন','fa-trophy'],['উল্লেখযোগ্য অর্জন','fa-award'],['সম্মাননা ও স্বীকৃতি','fa-medal'],['সফল কার্যক্রম','fa-circle-check'],['সামাজিক অবদান','fa-handshake'],['পাঠাগার','fa-book-open'],['পাঠাগারের উদ্দেশ্য','fa-book-open-reader'],['বই তালিকা','fa-list'],
  ['ইভেন্ট','fa-calendar-days'],['আপকামিং ইভেন্ট','fa-calendar-plus'],['আয়োজিত ইভেন্ট','fa-calendar-check'],['বাতিলকৃত ইভেন্ট','fa-calendar-xmark'],['প্রতিবেদন','fa-chart-column'],['বার্ষিক প্রতিবেদন','fa-calendar'],['কার্যক্রম প্রতিবেদন','fa-file-lines'],['আর্থিক প্রতিবেদন','fa-coins'],['প্রকল্প প্রতিবেদন','fa-file-circle-check'],
  ['প্রকাশনা','fa-newspaper'],['সংগঠনের প্রকাশনা','fa-book'],['স্মরণিকা','fa-bookmark'],['ম্যাগাজিন','fa-newspaper'],['লিফলেট ও প্রচারপত্র','fa-file-lines'],['সহযোগিতা করুন','fa-hands-helping'],['স্বেচ্ছাসেবক হিসেবে','fa-person-circle-plus'],['আর্থিক সহযোগিতা','fa-hand-holding-dollar'],['শিক্ষা সহায়তা','fa-graduation-cap'],['মানবিক সহায়তা','fa-hands-holding-child'],['সহযোগী প্রতিষ্ঠান','fa-handshake'],
  ['স্বচ্ছতা ও জবাবদিহি','fa-shield-halved'],['সংগঠনের নীতিমালা','fa-scale-balanced'],['আয়-ব্যয়ের তথ্য','fa-chart-pie'],['সিদ্ধান্ত ও কার্যক্রম','fa-list-check'],['অভিযোগ/পরামর্শ','fa-comments'],['সাধারণ জিজ্ঞাসা','fa-circle-question'],['সংগঠন সম্পর্কে','fa-circle-info'],['সদস্যপদ','fa-id-card'],['কার্যক্রম','fa-person-running'],['দান ও সহযোগিতা','fa-hand-holding-heart'],['যোগাযোগ','fa-address-book'],['স্বেচ্ছাসেবী/সদস্যদের গল্প','fa-people-group'],['সদস্যদের গল্প','fa-user-group'],['স্বেচ্ছাসেবকদের গল্প','fa-person-circle-check'],['সফলতার গল্প','fa-star'],['অভিজ্ঞতা','fa-comment-dots'],['সংবাদ','fa-newspaper'],['নোটিশ','fa-bell'],['সদস্য হতে চাই','fa-user-plus'],['দান করুন','fa-hand-holding-heart'],['প্রাক্তন সভাপতি তালিকা','fa-user-tie'],['গ্যালারি','fa-images'],['ছবি','fa-image'],['ভিডিও','fa-video'],['মতামত দিন','fa-comment-dots']
 ];
 document.querySelectorAll('nav a,nav button').forEach(el=>{
   if(el.querySelector('i')) return;
   const label=el.textContent.replace(/[▾▸]/g,'').trim();
   const hit=iconMap.find(x=>label===x[0]);
   if(hit){const i=document.createElement('i');i.className='fa-solid '+hit[1];i.setAttribute('aria-hidden','true');el.prepend(i);}
 });
 document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{if(!a.querySelector('i')){const i=document.createElement('i');i.className='fa-solid fa-envelope';a.prepend(i)}});
 document.querySelectorAll('a[href*="facebook.com"]').forEach(a=>{if(!a.querySelector('i')){const i=document.createElement('i');i.className='fa-brands fa-facebook';a.prepend(i)}});
 document.querySelectorAll('.footer-grid p').forEach(p=>{p.innerHTML=p.innerHTML.replace(/^📍\s*/,'<i class="fa-solid fa-location-dot"></i> ').replace(/^✉️\s*/,'<i class="fa-solid fa-envelope"></i> ').replace(/^📘\s*/,'<i class="fa-brands fa-facebook"></i> ')});
});

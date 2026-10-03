# সৃজনশীল তরুণ সংঘ — GitHub Pages (সহজ আপলোড সংস্করণ)

এই সংস্করণে সব HTML পেজ repository-এর **root**-এ রাখা হয়েছে। `pages` নামে আলাদা ফোল্ডার লাগবে না। এতে GitHub Pages-এ inner page-এর 404 সমস্যা কমে যাবে।

## আপলোডের নিয়ম
1. ZIP খুলুন।
2. ভেতরের **সব ফাইল ও `assets` ফোল্ডার** GitHub repository-এর root-এ upload করুন।
3. নিশ্চিত করুন `index.html`, `about.html`, `activities.html` ইত্যাদি একই স্তরে আছে।
4. Settings → Pages → Deploy from a branch → `main` → `/ (root)` নির্বাচন করুন।
5. Deploy শেষ হলে site খুলে browser refresh করুন।

## গুরুত্বপূর্ণ
শুধু ZIP ফাইল repository-তে upload করবেন না। ZIP **extract করে** সব ফাইল upload করবেন।


## এই সংস্করণে ঠিক করা হয়েছে
- হোম লিংক এখন `./` ব্যবহার করে, তাই GitHub Pages-এ 404 হওয়ার সম্ভাবনা কমে।
- মোবাইল মেনু ২ কলামে এবং vertical scrolling সহ রাখা হয়েছে; menu scroll আটকায় এমন `touch-action:none` সরানো হয়েছে।
- Hero-এর লোগো ও ছবি `index.html`-এ embedded করা হয়েছে, তাই `assets` path না পেলেও hero image ভাঙা দেখাবে না।
- Hero: সবুজ ব্যাকগ্রাউন্ড, সাদা গোল লোগো ফ্রেম, তার নিচে আপনার দেওয়া ছবি—একই ক্রমে রাখা হয়েছে।

# সৃজনশীল তরুণ সংঘ — GitHub Pages

## কেন আগের সাইটে শুধু লেখা দেখা যাচ্ছিল
`index.html` লোড হলেও `assets/style.css` ও image files সার্ভারে না থাকলে ব্রাউজার ডিফল্ট HTML দেখায়। এই প্যাকেজে HTML, CSS, JavaScript এবং প্রয়োজনীয় image একই কাঠামোয় রাখা হয়েছে।

## আপলোড
ZIP ফাইলটি GitHub-এ ZIP হিসেবে না রেখে **Extract করে এর ভেতরের সব ফাইল/ফোল্ডার repository-এর root-এ** আপলোড করুন।

Repository root-এ এগুলো দেখা উচিত:
- `index.html`
- `member-form.html`
- `assets/`
- `pages/`
- `.nojekyll`

`assets/` ফোল্ডারের ভেতরে `style.css`, `script.js`, `logo.png`, `charter-of-srijonshil-declaration.jpg` থাকবে।

## GitHub Pages
Repository → Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save।

তারপর Pages URL খুলে hard refresh করুন।

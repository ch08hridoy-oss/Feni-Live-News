const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const today = new Date();
$('#todayDate').textContent = today.toLocaleDateString('bn-BD', {day:'numeric', month:'long', year:'numeric'});
$('#year').textContent = today.getFullYear();

const menuToggle = $('#menuToggle');
const mainNav = $('#mainNav');
menuToggle.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.textContent = opened ? '×' : '☰';
});
$('#searchOpen').addEventListener('click', () => {
  $('#searchPanel').classList.toggle('open');
  if ($('#searchPanel').classList.contains('open')) $('#searchInput').focus();
});
$('#searchClose').addEventListener('click', () => $('#searchPanel').classList.remove('open'));

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove('show'), 2600);
}

const stories = {
  lalpol: {
    category:'ফেনী সদর', title:'ফেনীর লালপোলে মাদকবিরোধী অভিযান, আটক ১৪', date:'১২ নভেম্বর ২০২৬',
    source:'Bangla Tribune', url:'https://www.banglatribune.com/country/chitagong/980417/%E0%A6%8F%E0%A6%87-%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A7%87%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%8F%E0%A6%A4%E0%A6%87-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A6%95-%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF-%E0%A6%B9%E0%A7%9F-%E0%A6%B0%E0%A6%BE%E0%A6%96%E0%A6%A4%E0%A7%87-%E0%A6%B9%E0%A7%9F%E0%A7%87%E0%A6%9B%E0%A7%87',
    image:'https://assets.dhakapost.com/media/imgAll/BG/2026March/feni2-20260318085604.jpg',
    body:'Bangla Tribune-এর ১২ নভেম্বর ২০২৬-এর প্রতিবেদনে বলা হয়েছে, ফেনী শহরতলির লালপোল বেদেপল্লিতে মাদকবিরোধী অভিযানে নগদ ১৭ লাখ ৫১ হাজার ৬০০ টাকা, টাকা গণনার মেশিন, ৬০০টি ইয়াবা ও ৩০ লিটার চোলাই মদ জব্দ করা হয়েছে। এ সময় ১৪ জনকে আটক করা হয়। প্রতিবেদনে আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বক্তব্য ও অভিযানের বিবরণ তুলে ধরা হয়েছে।'
  },
  dagan: {
    category:'দাগনভূঞা', title:'দাগনভূঞায় দুই পক্ষের সংঘর্ষ, আহত ১৫', date:'১১ নভেম্বর ২০২৬',
    source:'Bangla Tribune', url:'https://www.banglatribune.com/country/chitagong/980375/%E0%A6%AC%E0%A6%BF%E0%A6%8F%E0%A6%A8%E0%A6%AA%E0%A6%BF%E0%A6%B0-%E0%A6%A6%E0%A7%81%E0%A6%87-%E0%A6%AA%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%82%E0%A6%98%E0%A6%B0%E0%A7%8D%E0%A6%B7-%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A7%E0%A6%BF%E0%A6%95-%E0%A6%95%E0%A6%95%E0%A6%9F%E0%A7%87%E0%A6%B2-%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%AB%E0%A7%8B%E0%A6%B0%E0%A6%A3',
    image:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=80',
    body:'Bangla Tribune-এর ১১ নভেম্বর ২০২৬-এর প্রতিবেদন অনুযায়ী, দাগনভূঞা পৌর শহরের জিরো পয়েন্ট এলাকায় দুই পক্ষের সংঘর্ষে অন্তত ১৫ জন আহত হন। গুরুতর আহত দুজনকে উন্নত চিকিৎসার জন্য ফেনীতে পাঠানো হয়। প্রতিবেদনে উভয় পক্ষের বক্তব্য ও প্রত্যক্ষদর্শীদের তথ্য তুলে ধরা হয়েছে।'
  },
  muhuri: {
    category:'ভ্রমণ ও প্রকৃতি', title:'নদী, সবুজ আর সূর্যোদয়-সূর্যাস্তের সৌন্দর্যে মুহুরী সেচ প্রকল্প', date:'২ নভেম্বর ২০২৬',
    source:'Bangla Tribune', url:'https://www.banglatribune.com/journey/978129/%E0%A6%A8%E0%A6%A6%E0%A7%80-%E0%A6%B8%E0%A6%AC%E0%A7%81%E0%A6%9C-%E0%A6%86%E0%A6%B0-%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%A6%E0%A7%9F-%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A7%8C%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%87-%E0%A6%AE%E0%A7%81%E0%A6%97%E0%A7%8D%E0%A6%A7',
    image:'https://cdn.banglatribune.net/contents/cache/images/280x158x1/uploads/media/2026/11/01/7add971e0f9898c43c821c8d5804e2c6-6ae71bb872890.jpg?jadewits_media_id=1052564',
    body:'Bangla Tribune-এর ফিচারে ফেনীর সোনাগাজী উপজেলার বঙ্গোপসাগর-সংলগ্ন মুহুরী সেচ প্রকল্পের নদী, সবুজ প্রকৃতি, সূর্যোদয়-সূর্যাস্ত এবং শীতের অতিথি পাখির সৌন্দর্য তুলে ধরা হয়েছে। স্থানটির পর্যটন সম্ভাবনা এবং দর্শনার্থীদের জন্য সুযোগ-সুবিধার প্রয়োজনীয়তাও আলোচনায় এসেছে।'
  },
  train: {
    category:'যোগাযোগ', title:'নতুন যাত্রাবিরতির প্রথম দিনেই এক ঘণ্টা দেরিতে ফেনী ছাড়ে মহানগর এক্সপ্রেস', date:'২৭ অক্টোবর ২০২৬',
    source:'Bangla Tribune', url:'https://www.banglatribune.com/country/chitagong/976975/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%87-%E0%A6%8F%E0%A6%95-%E0%A6%98%E0%A6%A3%E0%A7%8D%E0%A6%9F%E0%A6%BE-%E0%A6%A6%E0%A7%87%E0%A6%B0%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%AB%E0%A7%87%E0%A6%A8%E0%A7%80-%E0%A6%9B%E0%A6%BE%E0%A7%9C%E0%A6%B2%E0%A7%8B-%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%A8%E0%A6%97%E0%A6%B0',
    image:'https://cdn.banglatribune.net/contents/cache/images/280x158x1/uploads/media/2026/10/27/8afb99a2f195386a2bdfb41a81d8beb6-6ae0251b1c24b.jpg?jadewits_media_id=1051548',
    body:'ফেনী থেকে সরাসরি কক্সবাজার যাওয়ার সুবিধা দিতে মহানগর এক্সপ্রেসের নতুন যাত্রাবিরতি চালু হয়। Bangla Tribune-এর ২৭ অক্টোবর ২০২৬-এর প্রতিবেদনে বলা হয়েছে, প্রথম দিন ট্রেনটি নির্ধারিত সময়ের এক ঘণ্টা চার মিনিট পর ফেনী স্টেশন ছাড়ে এবং ৪৭ জন যাত্রী নিয়ে কক্সবাজারের উদ্দেশে রওনা হয়।'
  },
  flood: {
    category:'উন্নয়ন', title:'ফেনীতে ১,৫৪২ কোটি টাকার বন্যা নিয়ন্ত্রণ ও সেচ প্রকল্পের উদ্বোধন', date:'১ অক্টোবর ২০২৬',
    source:'Bangla Tribune', url:'https://www.banglatribune.com/country/chitagong/971760/%E0%A6%AC%E0%A7%83%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%AD%E0%A6%BF%E0%A6%9C%E0%A7%87-%E0%A6%AE%E0%A6%BE%E0%A6%9F%E0%A6%BF-%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%81%E0%A6%A7-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A7%8B%E0%A6%A7%E0%A6%A8%E0%A7%87',
    image:'https://cdn.banglatribune.net/contents/cache/images/280x158x1/uploads/media/2026/10/01/77d2d5702309d701171d0193b0b98834-6abe47a07027b.jpg?jadewits_media_id=1046784',
    body:'Bangla Tribune-এর প্রতিবেদনে ফেনীর পরশুরামের ঘাটঘর এলাকায় মুহুরী নদীর তীরে ১ হাজার ৫৪২ কোটি ১৬ লাখ টাকা ব্যয়ে মুহুরী-কহুয়া বন্যা নিয়ন্ত্রণ, নিষ্কাশন ও সেচ প্রকল্পের পুনর্বাসন (প্রথম পর্যায়) উদ্বোধনের কথা জানানো হয়েছে। প্রকল্পটি এলাকার বন্যা নিয়ন্ত্রণ, পানি নিষ্কাশন ও সেচ ব্যবস্থার সঙ্গে সম্পর্কিত।'
  },
  press: {
    category:'মিডিয়া', title:'ফেনীতে সংবাদ সংগ্রহের সময় সাংবাদিকদের হুমকি ও কাজে বাধার অভিযোগ', date:'২ নভেম্বর ২০২৬',
    source:'Bangla Tribune', url:'https://www.banglatribune.com/country/chitagong/978230/%E0%A6%B8%E0%A6%BE%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%BF%E0%A6%95%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%B9%E0%A7%81%E0%A6%AE%E0%A6%95%E0%A6%BF-%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A6%A8%E0%A7%8B%E0%A6%B0-%E0%A6%AA%E0%A6%B0-%E0%A6%87%E0%A6%A8%E0%A6%95%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%AC-%E0%A6%AE%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AC%E0%A7%87%E0%A6%B0',
    image:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    body:'Bangla Tribune-এর ২ নভেম্বর ২০২৬-এর প্রতিবেদনে ফেনীতে ‘মার্চ ফর ইনসাফ’ কর্মসূচিতে সংবাদ সংগ্রহের সময় কয়েকজন সাংবাদিককে হুমকি, লাঞ্ছিত করা ও পেশাগত কাজে বাধা দেওয়ার অভিযোগের কথা বলা হয়েছে। প্রতিবেদনটি সংশ্লিষ্ট সাংবাদিকদের অভিযোগের ভিত্তিতে প্রকাশিত; অভিযোগগুলোকে অভিযোগ হিসেবেই বিবেচনা করতে হবে।'
  }
};

const storyModal = $('#storyModal');
function openStory(key) {
  const story = stories[key];
  if (!story) return;
  $('#modalCategory').textContent = story.category;
  $('#modalTitle').textContent = story.title;
  $('#modalMeta').textContent = `${story.date} · Feni Live news reference`;
  $('#modalImage').src = story.image;
  $('#modalImage').alt = story.title;
  $('#modalBody').textContent = story.body;
  $('#modalSource').href = story.url;
  $('#modalSource').textContent = `${story.source} — মূল প্রতিবেদন পড়ুন ↗`;
  storyModal.classList.add('open');
  storyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeStory() {
  storyModal.classList.remove('open');
  storyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
$$('[data-story]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  openStory(link.dataset.story);
}));
$$('[data-close-story]').forEach(el => el.addEventListener('click', closeStory));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeStory();
    closeTipForm();
  }
});

let activeFilter = 'all';
let searchTerm = '';
function filterNews() {
  let visible = 0;
  $$('#newsGrid .news-card').forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter || card.dataset.subcategory === activeFilter;
    const searchable = `${card.dataset.search || ''} ${card.textContent}`.toLocaleLowerCase('bn');
    const searchMatch = !searchTerm || searchable.includes(searchTerm.toLocaleLowerCase('bn'));
    card.hidden = !(categoryMatch && searchMatch);
    if (!card.hidden) visible++;
  });
  $('#noResults').hidden = visible > 0;
}
$$('.filter').forEach(button => button.addEventListener('click', () => {
  $$('.filter').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  filterNews();
}));
function searchNews() {
  searchTerm = $('#searchInput').value.trim();
  activeFilter = 'all';
  $$('.filter').forEach(item => item.classList.toggle('active', item.dataset.filter === 'all'));
  filterNews();
  $('#searchPanel').classList.remove('open');
  $('#newsFeed').scrollIntoView({behavior:'smooth'});
  if (!searchTerm) toast('সব সংবাদ দেখানো হচ্ছে');
}
$('#searchBtn').addEventListener('click', searchNews);
$('#searchInput').addEventListener('keydown', event => {
  if (event.key === 'Enter') searchNews();
});
$$('[data-filter-link]').forEach(link => link.addEventListener('click', () => {
  const requested = link.dataset.filterLink;
  const matched = $$('.filter').some(button => button.dataset.filter === requested);
  activeFilter = matched ? requested : 'all';
  $$('.filter').forEach(button => button.classList.toggle('active', button.dataset.filter === activeFilter));
  filterNews();
}));
$('#loadMore').addEventListener('click', () => toast('ডেমো সংস্করণে বর্তমানে নির্বাচিত সব নমুনা সংবাদ দেখানো হয়েছে।'));

const tipModal = $('#tipModal');
function openTipForm() {
  tipModal.classList.add('open');
  tipModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeTipForm() {
  tipModal.classList.remove('open');
  tipModal.setAttribute('aria-hidden', 'true');
  if (!storyModal.classList.contains('open')) document.body.style.overflow = '';
}
$('#openTipForm').addEventListener('click', openTipForm);
$$('[data-close-tip]').forEach(el => el.addEventListener('click', closeTipForm));
$('#tipForm').addEventListener('submit', event => {
  event.preventDefault();
  const subject = encodeURIComponent('Feni Live — পাঠকের সংবাদ');
  const body = encodeURIComponent(
    `প্রেরকের নাম: ${$('#tipName').value}\nমোবাইল: ${$('#tipPhone').value}\nঘটনার স্থান: ${$('#tipLocation').value}\n\nসংবাদের বিবরণ:\n${$('#tipMessage').value}\n\nপ্রকাশের আগে তথ্য যাচাইয়ের জন্য যোগাযোগের অনুরোধ রইল।`
  );
  window.location.href = `mailto:fenilive@gmail.com?subject=${subject}&body=${body}`;
  closeTipForm();
  toast('ইমেইল অ্যাপে সংবাদ পাঠানোর খসড়া তৈরি হবে।');
});

const backTop = $('#backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 450));
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
$('#tickerTrack').innerHTML += $('#tickerTrack').innerHTML;

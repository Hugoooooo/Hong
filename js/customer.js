/*=============================================================
Template Name: Hotel Himara - Hotel HTML Template
Author:        Eagle-Themes (Jomin Muskaj)
Author URI:    http://eagle-themes.com
Version:       1.1.0
=============================================================*/
var format = function (str, col) {
  col = typeof col === 'object' ? col : Array.prototype.slice.call(arguments, 1);

  return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return col[n];
  });
};

// 作品頁面大圖
function initProductGallery(main, count) {
  let res = '';
  const tmp = "<div class='item'><figure class='gradient-overlay-hover image-icon'><a href='images/works/{mainIndex}/{itemIndex}.jpg'><img class='img-fluid' src='images/works/{mainIndex}/{itemIndex}.jpg' alt='Image'></a></figure></div>";
  for (let index = 1; index <= count; index++) {
    const section = format(tmp, { mainIndex: main, itemIndex: index })
    res += section;
  }
  return res;
}

// 作品頁面小圖
function initProductThumbs(main, count) {
  let res = '';
  const tmp = "<div class='item'><img class='img-fluid' src='images/works/{mainIndex}/{itemIndex}.jpg' alt='Image'></div>";
  for (let index = 1; index <= count; index++) {
    const section = format(tmp, { mainIndex: main, itemIndex: index })
    res += section;
  }
  return res;
}
// 作品列表
function initWorkList(titles, descs, start, end) {
  let res = '';
  let arrIndex = 0;
  const tmp = "<div class='room-list-item'><div class='row'><div class='col-lg-4'><figure class='gradient-overlay-hover link-icon'><a href='case-{index}.html'><img src='images/works/{index}/cover.jpg' class='img-fluid' alt='Image'></a></figure></div><div class='col-lg-6'><div class='room-info'><h3 class='room-title'><a href='case-{index}.html'>{title}</a></h3><p>{desc}</p></div></div><div class='col-lg-2'><div class='room-price'><a href='case-{index}.html' class='btn btn-sm'>VIEW DETAILS</a></div></div></div></div>"
  for (let index = start; index <= end; index++) {
    const section = format(tmp, { title: titles[arrIndex], desc: descs[arrIndex], index: index })
    res += section;
  }
  return res;
}



//* PRODUK SLIDE (CHEKOUT SEKARANG) ========================>
const product = document.querySelectorAll(".produk4");
let counter = 0;

function leftSlide() {
  if (counter == 0) {
    counter = product.length / 14 - 2;
  } else {
    counter--;
  }

  scroll();
}

function rightSlide() {
  if (counter == product.length / 14 - 2) {
    counter = 0;
  } else {
    counter++;
  }
  scroll();
}

function scroll() {
  product.forEach(function (item) {
    item.style.transform = `translateX(${counter * 950}px)`;
  });
}
//* PRODUK SLIDE (CHEKOUT SEKARANG) ========================>

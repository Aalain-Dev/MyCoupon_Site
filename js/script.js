let elements = document.querySelectorAll(".count");
elements.forEach((item) => {
  let target = parseInt(item.textContent.replace("+", ""));
  let count = 0; 
  const speed = item.dataset.speed; 
  console.log(speed);
  let interval = setInterval(() => {
    if (count < target) {
      count++;
      item.textContent = count + "+"; 
    } else {
      clearInterval(interval);
    }
  }, 20); 
});
// close form code 
var close = document.querySelector(".form-close")
var back_layer = document.querySelector(".back-layer")
close.addEventListener("click",function(){
  back_layer.style.display = "none"
})
var add_btn = document.querySelector(".add-btn")
add_btn.addEventListener("click",function(){
  back_layer.style.display = "block"
})
const Validate_Form = () => {
  var brand_err = document.querySelector("#brand_err")
  var discount_err = document.querySelector("#disc_err")
  var brand = document.querySelector("#brand_name")
  var offer_err = document.querySelector("#offer_err")
  var coupon_err = document.querySelector("#coupon_err")
  var validity_err = document.querySelector("#validity_err")
  var discount = document.querySelector("#discount")
  var offer_details = document.querySelector("#offer_details")
  var coupon_code = document.querySelector("#coupon_code")
  var expiry_date = document.querySelector("#validity")
var form = document.querySelector("#form")
  brand.addEventListener("input", () => {
    brand_err.style.display = "none"
  })
  discount.addEventListener("input", () => {
    discount_err.style.display = "none"
  })
  offer_details.addEventListener("input", () => {
    offer_err.style.display = "none"
  })
  coupon_code.addEventListener("input", () => {
    coupon_err.style.display = "none"
  })
  expiry_date.addEventListener("input", () => {
    validity_err.style.display = "none"
  })
  if (brand.value === "") {
    brand_err.innerHTML = "Please Enter Brand Name"
    brand_err.style.display = "block"
    return false
  }
  if (discount.value === "") {
    discount_err.innerHTML = "Please Enter Discount"
    discount_err.style.display = "block"
    return false
  }
  if (offer_details.value === "") {
    offer_err.innerHTML = "Please Enter Offer"
    offer_err.style.display = "block"
    return false
  }
  if (coupon_code.value === "") {
    coupon_err.innerHTML = "Please Enter Offer"
    coupon_err.style.display = "block"
    return false
  }
  if (expiry_date.value === "") {
    validity_err.innerHTML = "Please Enter Expiry Date"
    validity_err.style.display = "block"
    return false
  }
  form.reset();
  return true
}
// Popular Coupons js
var star_icon = document.querySelectorAll("#star-icon");
var know_more_btn = document.querySelectorAll("#know-more-btn");
star_icon.forEach((item, index) => {
  item.addEventListener("click", function() {
     item.style.color = ""
    var btn = know_more_btn[index];
    if (btn.classList.contains("d-none")) {
      item.style.color = "#F0BB00"
      btn.classList.remove("d-none");
    } else {
      btn.classList.add("d-none");
      item.style.color = ""
    }
  });
});
document.getElementById('submit-coupon').addEventListener('click', function() {
  const brand = document.getElementById('brand_name').value;
  const offer = document.getElementById('discount').value;
  const description = document.getElementById('offer_details').value;
  const couponCode = document.getElementById('coupon_code').value;
  const validity = document.getElementById('validity').value;
  if (Validate_Form()) {
    
    const couponcard = document.createElement('div');
    couponcard.classList.add('coupon-card','new-added-coupon-card');
    couponcard.innerHTML = `
      <p class="brand">${brand}</p>
      <p class="offer mt-1">${offer}</p>
      <p class="description">${description}</p>
      <div class="dashed-line"></div>
      <button class="coupon-code">${couponCode}</button>
      <p class="validity">Valid until ${validity}</p>
    `;
    brand.value = '';
    offer.value = '';
    description.value = '';
    couponCode.value = '';
    validity.value = '';
    document.querySelector('.trending-coupon-margin').appendChild(couponcard);
    back_layer.style.display = "none";
  } 
});
const showPopup = (id)=> {
  var popup = document.getElementById("popup" + id);
  popup.classList.remove("d-none");
}
const hidePopup = (id)=> {
  var popup = document.getElementById("popup" + id);
  popup.classList.add("d-none");
}
let currentvisible = 2; 
const loadMore = () => {
  const cards = document.querySelectorAll('.trending-coupon-margin .coupon-card'); // update the cards variable
  for (let i = currentvisible; i < currentvisible + 2 && i < cards.length; i++) {
    cards[i].style.display = 'block';
  }
  currentvisible += 2;
  if (currentvisible >= cards.length) {
    document.querySelector('.load-more').style.display = 'none';
  } else {
    const cardss = document.querySelector('.new-added-coupon-card');
    cards.style.display = 'block';
  }
}
// const showLoader = () => {
//   const loader = document.querySelector(".loader-back-layer");
//   loader.style.display = "flex";
//   loader.style.opacity = "1";  
// }
// const  hideLoader = ()=> {
//   const loader = document.querySelector(".loader-back-layer");
//   loader.style.opacity = "0"; 
//   setTimeout(() => {
//       loader.style.display = "none"; 
//   }, 500);
// }
// document.addEventListener("DOMContentLoaded", () => {
//   showLoader();
//   setTimeout(hideLoader, 3000);
// });
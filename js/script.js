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
  }

  if (discount.value === "") {
    discount_err.innerHTML = "Please Enter Discount"
    discount_err.style.display = "block"
  }

  if (offer_details.value === "") {
    offer_err.innerHTML = "Please Enter Offer"
    offer_err.style.display = "block"
  }

  if (coupon_code.value === "") {
    coupon_err.innerHTML = "Please Enter Offer"
    coupon_err.style.display = "block"
  }

  if (expiry_date.value === "") {
    validity_err.innerHTML = "Please Enter Expiry Date"
    validity_err.style.display = "block"
  }
}
// Popular Coupons js
var star_icon = document.querySelector("#star-icon")
var know_more_btn = document.querySelector("#know-more-btn")
star_icon.addEventListener("click",function(){
  star_icon.style.color= "#F0BB00";
  know_more_btn.style.display = "block"
})
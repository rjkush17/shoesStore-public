import React from "react";

function Footer() {
  return (
    <>
      <hr className="my-2" />
      <footer className="flex flex-wrap p-6 gap-3 tablet:justify-evenly ">
        <div className="footer-col">
          <p className="footer_heading">INFO</p>
          <p>Track Your order</p>
          <p>Our Blog</p>
          <p>Privacy policy</p>
          <p>Shipping</p>
          <p>Contact us</p>
          <p>Help</p>
          <p>Community</p>
        </div>
        <div className="footer-col">
          <p className="footer_heading">ABOUT</p>
          <p>History</p>
          <p>our Team</p>
          <p>Services</p>
          <p>Company</p>
          <p>Manufecture</p>
          <p>Wholesale</p>
          <p>Retail</p>
        </div>
        <div className="footer-col">
          <p className="footer_heading">Collections</p>
          <p>Mens Collection</p>
          <p>Women Collection</p>
          <p>Winter collection</p>
          <p>Top trends</p>
          <p>Feshion</p>
          <p>Help</p>
          <p>Community</p>
        </div>
        <div className="footer-col">
          <p className="footer_heading">More</p>
          <p>Delivery</p>
          <p>About us</p>
          <p>Contact Us</p>
          <p>Gallery</p>
          <p>our journey</p>
          <p>Patners</p>
          <p>become Seller</p>
        </div>
        <div className="footer-col">
          <p className="footer_heading">Get In Touch</p>
          <p >Stylish Online Store 123 Main Street</p>
          <p>Toulouse - France.</p>
          <p>Call us : (+33) 800 456 789-987</p>
          <p>info@stylishshoesStore.com</p>
          <p>help@stylishshoesStore.com</p>
        </div>
      </footer>
      <div className="mb-3 text-center text-xs mobile:text-normal">
        © Copyright Stylish 2023 | Made by <a href="https://rishabhkushwah.netlify.app/" className="underline" target="_blank"> RISHABH KUSHWAH</a>
      </div>
    </>
  );
}

export default Footer;

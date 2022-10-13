import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon />  */}
        <a href="https://twitter.com/intent/tweet?button_hashtag=food&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #food</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>        
      </div>
      
      <p> &copy; 2022 Yummers.com</p>
    </div>
  );
}

export default Footer;
import "../app.css"



function Footer(){
    return(
        <div className="footer-container">
        <div className="logo-section">
     
           
            <div className="social-media">
                <a href="#"><i className="fab fa-facebook"><img src=""/></i></a>
                <a href="#"><i className="fab fa-twitter"><img src=""/></i></a>
                <a href="#"><i className="fab fa-linkedin"><img src=""/></i></a>
                <a href="#"><i className="fab fa-instagram"><img src=""/></i></a>
                <a href="#"><i className="fab fa-pinterest"><img src=""/></i></a>
            </div>
            <p>&copy; All rights reserved by ABC, Cochin, India.</p>
        </div>
        
        <div className="footer-column">
            <h3>ABOUT US</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>CONTACT US</h3>
            <p><i className="fas fa-map-marker-alt"></i>  Ernakulam, Kerala</p>
            <p><i className="fas fa-phone"></i> +91-86065 70657</p>
            <p><i className="fas fa-clock"></i> Mon - Sat / 9:00AM - 6:00PM</p>
        </div>
    
    </div>
    
    )
    }
    

      
  
export default Footer
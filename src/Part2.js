import './App.css';
import first from './images/Screenshot (101).png';
import second from './images/Screenshot (106).png';
import third from './images/Screenshot (102).png';
import fourth from './images/Screenshot (103).png';
import fifth from './images/Screenshot (104).png';
import One from './images/1.jpg';
import Two from './images/2.jpg';
import Three from './images/3.jpg';
import Four from './images/4.jpg';
import Five from './images/5.jpg';
import Six from './images/6.jpg';
import Seven from './images/7.jpg';
import Eight from './images/8.jpg';
import Nine from './images/10.jpg';
import Ten from './images/11.jpg';
import Eleven from './images/12.jpg';
import Twelve from './images/13.jpg';
import Thirteen from './images/14.png';
import Fourteen from './images/15.jpg';
import Fifteen from './images/16.jpg';

function Partsecond() {
    return (
        <div className='Part-second'>
            <a href='https://vishwashcv.github.io/sample_websites/index.html'>
            <h1 className='heading'>My Works</h1>
           <div className='one'>
            <div className='content-second-right'>
            <h1>TIME TABLE</h1>
            <h2>This Time Table is build for html layout practice.</h2>
            
            </div>
            <img src={first} className='left'/>
           </div>
           </a>

           <a href='https://vishwashcv.github.io/sample_websites/Nothing/index.html'>
           <div className='two'>

            <div className='content-second-left'>
            <h1>WEBSITE</h1>
            <h2>Its just a website for design purpose.</h2>
            
            </div>
            <img src={second} className='right'/>
           </div>
           </a>

           <a href='https://vishwashcv.github.io/sample_websites/flipkart/flipkart%20site.html'>
           <div className='three'>
          
            <div className='content-second-right'>
            <h1>FLIPKART CLONE</h1>
            <h2>This website is build for flipkart clone UI.</h2>
            
            </div>
            <img src={third} className='left'/>
           </div>
           </a>

           <a href='https://vishwashcv.github.io/sample_websites/web2/index.html'>
           <div className='four'>
           
            <div className='content-second-left'>
            <h1>FOOD ORDER</h1>
            <h2>This website is build for to order foods (UI).</h2>
            
            </div>
            <img src={fourth} className='right'/>
           </div>
           </a>

           <a href='https://vishwashcv.github.io/sample_websites/university%20site/index.html'>
           <div className='five'>
            
            <div className='content-second-right'>
            <h1>UNIVERSITY</h1>
            <h2>This University Project build for college students, and college management.</h2>
            
            </div>
            <img src={fifth} className='left'/>
           </div>
           </a>

            <div><h1 className='heading'>Landing Web Page Designs</h1></div>
            <div className='images-land'>
                <img src={One} />
                <img src={Two} />
                <img src={Three} />
            </div>
            <div className='images-land'>
                <img src={Four} />
                <img src={Five} />
                <img src={Six} />
            </div>
            <div className='images-land'>
                <img src={Seven} />
                <img src={Eight} />
                <img src={Nine} />
            </div>
            <div className='images-land-full'>
                <img src={Ten} />
                <img src={Eleven} />
                <img src={Twelve} />
            </div>
            <h1 className='heading'>Connection App and Web design</h1>
            <div className='images-web'>
                
                <img src={Thirteen}/>
            </div>
            <h1 className='heading'>ShoppingLine Website Design</h1>
            <div className='images-web'>
                
                <img src={Fourteen}/>
            </div>
            <h1 className='heading'>Shelter Task App Design</h1>
            <div className='images-web'>
                
                <img src={Fifteen}/>
            </div>
            <footer>
               <center>
                <h3><a href='' className='copyr'>By Vishwash © 2022</a></h3>
                <br/>  
            <h5><a href='https://vishwashcv.github.io/portfolio/vishwash.pdf' className='links'>Resume</a></h5>
            <br/>
            <h5><a href='https://www.linkedin.com/in/vishwash-cv-59a698233' className='links'>LinkedIn</a></h5>
            <br/>
            <h5><a href='https://www.behance.net/vishwashcv' className='links'>Behance</a></h5>
            <br/></center>
            </footer>
        </div>
    );

}

export default Partsecond;
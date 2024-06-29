import "./home.css"
import videosrc from './loadingvideo.mp4'
import gsap from 'gsap';
import './home.js'; 
import { useEffect } from "react";
import Preloader from "./Preloader.jsx";

export default function Home(){
    useEffect(()=>{
        let t1 = gsap.timeline({
        })
        
        function animation(){
               t1.fromTo(".clip", { y: -180 }, { y: 0, duration: 2 })

        t1.to("#logo", {
            duration: 1.5,
            scale: 100,
            y: 1200,
            ease: "ease.out",
            yoyo: true,
            onStart: function() {
              // Set display to flex when the animation starts
              document.querySelector("#maintext").style.display = "hidden";
          }
            });

        t1.to("#logo",{
            duration:0.1,
            scale:90,
            y: 1200,
            ease: "ease.out",
            yoyo: true,
            })
    //     })
            t1.to("#yellow1",{
                top:"-100%",
                delay:0.5,
                easy:"expo.out",
                duration:0.3,
                onStart: function() {
                    // Set display to flex when the animation starts
                    document.querySelector("#loader h1").style.display = "inline";
                }
            })   
            t1.to("#yellow2",{
                top:"0%",
                easy:"expo.out",
                delay:1.1,
                duration:0.4
                // delay:0.5,
            },"anim")
            t1.to("#loader h1",{
                color:"black",
                delay:1.1,
                duration:0.4,
            },"anim")
        }
        animation()        
    },[])
    return (
        <>
        <Preloader />
        <div className="container"> 
            
        <div id="loader">
            <div id="yellow1"></div>
            <div id="yellow2"></div>
            <video autoPlay loop muted src={videosrc}></video>
            <h1 id="maintext">
                Read your favorite <br/>
                Blogs, Podcasts, News Websites, <br/>
                Youtube Channels and RSS feeds<br />
                from one place on <em>Feedspot</em>
            </h1>
        </div>
        <div id="main">
        
        <div id="page1">
          <div className="content">
            <div className="firstheading">
              <h3>FeedSpot Business Solutions</h3>
            </div>
            <div>
              <h3>
                Media Contact Database
              </h3>
              <p className="descheading">
                Best for In-House PR teams, PR agencies, and individual Marketers.
              </p>
            </div>
          <div id="entiresvgtable">
            <div id="loadingsvg">
                <div style={{position: 'relative',width: '100%',height: '100%'}}>
                    <div className="companyimage instagram"><img src="./src/assets/instagram.png"/></div>
                    <div className="companyimage google"><img src="./src/assets/spotify.png"/></div>
                    <div className="companyimage spotify"><img src="./src/assets/playstore.png"/></div>
              
                    
                    <svg className="svgholder" width="100%" height="100%" viewBox="0 0 200 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.70622C30.5 -5.29378 160.5 42.2062 197.5 45.7062" stroke="black"/>
                      <path d="M0.5 59C3.5 65 192 60 199 60" stroke="black"/>
                      <path d="M1 109.049C58 123.049 190.5 80.0486 199 75.5486" stroke="black"/>
                      </svg>
                      
                    <svg className="svgholder" width="100%" height="100%" viewBox="0 0 200 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradient">
                              <stop offset="0" stopColor="white" stopOpacity="0" />
                              <stop offset="0.8" stopColor="white" stopOpacity="1" />
                              <stop offset="0.8" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                      
                            <mask id="gradient-mask">
                              <rect className="mask-rect" x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
                            </mask>
                          </defs>
                        <path d="M0 1.70622C30.5 -5.29378 160.5 42.2062 197.5 45.7062" stroke="#2e6da4" strokeWidth="4" mask="url(#gradient-mask)"/>
                        <path d="M0.5 59C3.5 65 192 60 199 60" stroke="#2e6da4" strokeWidth="4" mask="url(#gradient-mask)"/>
                        <path d="M1 109.049C58 123.049 190.5 80.0486 199 75.5486"  stroke="#2e6da4" strokeWidth="4" mask="url(#gradient-mask)"/>


                        
                    </svg>
                    <div className="database"><img src="./src/assets/database.png"/></div>
                    
                </div>
                
            </div>
              
            <img className="svgtable" src="./src/assets/demo.svg" />
            <div className="descservice">
              <ul>
                <li>Export Bloggers, Podcasters, YouTubers media contact lists.</li>
                <li>Feedspot media database has 250K active and verified contacts.</li>
                <li>Best for sales, marketing, PR, journalism, product launch, advertising, press release distribution, guest post or sponsored post campaign, affiliate collaboration, shout-out or guest interviews.</li>
              </ul>
              <button  className="whitebutton">Learn More</button>
              <button  className="bluebutton">Get Started</button>
            </div>
          </div>
          </div>
        </div>

        <div id="page2">
            <div id="data">
                hii
            </div>
        </div>
         </div>
        </div>
        </>
    )
}
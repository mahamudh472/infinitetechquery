class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <header class="header">
        <nav class="navbar">
            <div class="logo-area">
                <a href="index.html" class="nav-branding">
                    <img id="logo" src="Style/Gallery/full_logo.png" alt="logo">
                </a>
                <div class="rside">
                    <div class="sos-logo-area">
                        <img src="Style/Gallery/fb-black.png" class="sos-logo" alt="">
                        <img src="Style/Gallery/black twitter logo.png  " class="sos-logo" alt="">
                        <img src="Style/Gallery/new-linkedin-logo-white-black-png.png" class="sos-logo" alt="">
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="Search..." id="box">
                        <button id="sub-btn"><img src="Style/Gallery/search-3-48.png" width="15px" height="15px" alt=""></button>
                    </div>
                </div>
            </div>
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="link">
                        HOME
                    </a>
                </li>
                <li class="nav-item"><a href="error.html" class="link">
                        CATAGORIES
                    </a>
                </li>
                <li class="nav-item">
                    <a href="blog_list.html" class="link">
                        PROGRAMMING
                    </a>
                </li>
                <li class="nav-item">
                    <a href="blog_list.html" class="link">
                        BANGLA BLOGS
                    </a>
                </li>
                <li class="nav-item">
                    <a href="error.html" class="link">
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a href="error.html" class="link">
                        Contact
                    </a>
                </li>

            </ul>
            <hr id="nav-devider">
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
        
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        
        <footer class="footer">
        <div class="footer-container">
            <div class="f-lside">
                <div class="f-head">
                    Summary
                </div>
                <div class="f-list">
                    <div class="l-item">Read programming related blogs</div>
                    <div class="l-item">Read Digital Merketing blogs</div>
                    <div class="l-item">Read Bangla artiles</div>
                </div>
                
            </div>
            <div class="f-rside">
                <div class="f-head">Contact</div>
                <div class="f-list">
                    <div class="l-item">infinitetechquery@gmail.com</div>
                    <div class="l-item">mahamud.wapkiz.com</div>
                    <div class="l-item c-logo">
                        <a href="" >
                            <img class="c-item" src="Style/Gallery/fb-white.png" alt="">
                        </a>
                        <a href="" >
                            <img class="c-item" src="Style/Gallery/twitter-512.png" alt="">
                        </a>
                        <a href="" >
                            <img class="c-item" src="Style/Gallery/google-icon-white.png" alt="">
                        </a>
                        <a href="" >
                            <img class="c-item" src="Style/Gallery/github.png" alt="">    
                        </a>
                        <a href="" >
                            <img class="c-item" src="Style/Gallery/linkedin-white.png" alt="">    
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <p class="copy-rights">&copy;CopyRights are reserved</p>
    </footer>
        
        `
    }
}
customElements.define('my-footer', MyFooter)
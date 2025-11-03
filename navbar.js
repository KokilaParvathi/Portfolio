class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    background-color: rgba(15, 23, 42, 0.8);
                    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
                }
                
                .nav-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                
                .logo span {
                    color: #7c3aed;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    
                }
                
                .nav-links a {
                    color: #e2e8f0;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-links a:hover {
                    color: #7c3aed;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #7c3aed;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .theme-toggle {
                    background: none;
                    border: none;
                    color: #e2e8f0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    transition: background-color 0.3s ease;
                }
                
                .theme-toggle:hover {
                    background-color: rgba(124, 58, 237, 0.1);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #e2e8f0;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: #0f172a;
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                        border-bottom: 1px solid rgba(148, 163, 184, 0.1);
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#home" class=""></a>
                    
                    <div class="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#education">Education</a>
                        <a href="#contact">Contact</a>
                    </div>
                    
                    <button class="mobile-menu-btn" id="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </nav>
        `;
        
        // Add event listeners
        this.shadowRoot.getElementById('theme-toggle').addEventListener('click', toggleTheme);
        
        const mobileMenuBtn = this.shadowRoot.getElementById('mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
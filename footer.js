class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #0f172a;
                    border-top: 1px solid rgba(148, 163, 184, 0.1);
                    padding: 3rem 0;
                    text-align: center;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-links a {
                    color: #e2e8f0;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #7c3aed;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(124, 58, 237, 0.1);
                    color: #7c3aed;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background-color: #7c3aed;
                    color: white;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    color: #94a3b8;
                    font-size: 0.875rem;
                }
                
                .made-with {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    color: #94a3b8;
                    font-size: 0.875rem;
                }
                
                .heart {
                    color: #ef4444;
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills"></a>
                    </div>
                </div>
            </footer>`;

        }
    }
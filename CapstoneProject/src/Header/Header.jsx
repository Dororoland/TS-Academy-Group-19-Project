import "./header.css"
import groupLogo from '../assets/Group.png';
import planet from '../assets/21fbbe77-184a-4cce-8c3c-fd483dc76e0a 1.png';

// gggg
export default function Header() {
    return (
        <div className="header-section">
            {/* Header of webpage with company logo */}
            <header className="company-logo">
                <div className="logo">
                    <img
                        src={groupLogo}
                        alt="Company logo"
                        width={72.91}
                        height={52.08}
                        loading="lazy"
                    />
                </div>
                <div className="description" >
                    <h4>planet</h4>
                    <p>creative world</p>
                </div>
            </header>

            <section className="content">
                <div className="text-side">
                    <h1>
                        Explore Our Solar <br />
                        System Through Data
                    </h1>

                    <p>
                        Understand the planets not just by name, but by measurable 
                        facts. From size and mass to gravity and density, this page 
                        breaks down the solar system in a clear, data-driven way.
                    </p>

                    <div className="buttons">
                        <button>
                            Explore the Data
                        </button>
                        <button id="contact">
                            Contact Us
                        </button>
                    </div>

                </div>

                <div className="picture-side">
                    <img
                        src={planet}
                        alt="Planet photo"
                        width={299}
                        height={299}
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    )
}
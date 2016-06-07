import React from 'react'

const slide = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h2>Introduction</h2>
                    <ul>
                        <li className="fragment">
                            Matt Thomas
                        </li>
                        <li className="fragment">
                            2+ years at Centare
                        </li>
                        <li className="fragment">
                            Front-End Developer
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="img/portrait.png" alt="image of me"/>
                </div>
            </div>
        </section>
    )
}

export default slide

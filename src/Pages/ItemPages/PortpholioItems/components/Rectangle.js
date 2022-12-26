import React from "react"

import googlePlayStore from '../../../../img/portfolio/googlePlayStore.png';
import appStore from '../../../../img/portfolio/appStore.png';

import './styles-Rectangle.css';


const Rectangle = () => {

    return (
        <>
            <div className="container-rectangle">
                <div className="flex-rectangle">
                    <div className="section-platform">
                        <div className="title-section">Platform</div>
                        <div className="flex-sectionn">
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Android</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">iOS</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-tools">
                        <div className="title-section">Tools</div>
                        <div className="flex-sectionn">
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Loremsd</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-team">
                        <div className="title-section">Team</div>
                        <div className="flex-sectionn">
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">3 Members</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">3 Members</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">3 Members</div>
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="section-technologies">
                    <div className="title-section">Technologies</div>
                    <div className="flex-sectionn">
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                            <div className="content-section-rectangle">
                                <div className="square"></div>
                                <div className="text-content">Lorem ipsum</div>
                            </div>
                    </div>
                </div>
                <div className="container-button-store">
                    <div className="flex-buttons-Store">
                        <button>
                            <img src={googlePlayStore} alt='#'></img>
                        </button>
                        <button>
                            <img src={appStore} alt='#'></img>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Rectangle;
import React from "react";
import design from '../../../img/Services/design.png';
import designgroup from '../../../img/Services/Group 670.png';
import android from '../../../img/Services/android.png';
import iosapps from '../../../img/Services/ios_apps.png';
import hardware from '../../../img/Services/hardware.png';
import frontend from '../../../img/Services/frontend.png';
import backend from '../../../img/Services/backend.png';


import "./styles_ServicesSection.css";


const ServicesSection = () => {

    return (
        <div className="wrapper-services">
            <div className="container-services">
                <div className="title-services">Services</div>
                <div className="text text-title-services">
                    We specialize in the development of multi-platform solutions
                </div>
                <div className="flex-services">
                    <div className="services-uiux-design">
                        <img className="img-design" src={design} alt="img-design"/>
                        <img className="img-design-2" src={designgroup} alt="img-design-2"/>
                        <p className="text-uiux_design">UI/UX Design</p>
                    </div>
                    <div className="services-android">
                        <img className="img-android" src={android} alt="img-android"/>
                        <p className="text-android">Android apps</p>
                    </div>
                    <div className="services-ios-apps">
                        <img className="img-ios_apps" src={iosapps} alt="img-ios_apps"/>
                        <p className="text-ios_apps">iOS apps</p>
                    </div>
                </div>
                <p className="text-services">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis similique modi! Expedita molestiae error aspernatur reiciendis, rerum, dolor accusamus laborum nisi esse nulla voluptas voluptatum commodi, pariatur ratione mollitia.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quia, explicabo commodi quos dolorum in maiores quibusdam distinctio deserunt, cum nemo eos quae odit suscipit possimus nihil quasi saepe blanditiis.
                </p>
                <div className="flex-services-developers">
                    <div className="developer-hardware">
                        <img className="img-hardware" src={hardware} alt="img-hardware"/>
                        <p className="text-hardware">Hardware</p>
                    </div>
                    <div className="developer-frontend">
                        <img className="img-frontend" src={frontend} alt="img-frontend"/>
                        <p className="text-frontend">FrontEnd</p>
                    </div>
                    <div className="developer-backend">
                        <img className="img-backend" src={backend} alt="img-beckend"/>
                        <p className="text-backend">BackEnd</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ServicesSection;
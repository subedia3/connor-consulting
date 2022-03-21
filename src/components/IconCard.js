import React from 'react';
import './IconCard.css'

function IconCard(){
    return (
        <div className='container'>
        <div className='iconcard-container'>
         <div className='icons_container--one'>
            <icon className='icon'>
            <i class="fas fa-search"></i>
            </icon>
            <h1 className='icon-title'>
            Approach
            </h1>
            <p className='icon-detail'>
            CSA only takes on clients where our expertise can make a meaningful impact. This means we are selective, but also very hands on.             </p>
         </div>

         <div className='icons_container--two'>
            <icon className='icon'>
            <span class="material-icons">
            work
            </span>
            </icon>
            <h1 className='icon-title'>
            Experience
            </h1>
            <p className='icon-detail'>
            We have extensive experience in this space, we have worked with a variety of entities such as a family office, start ups, a museum, and a law firm.
            </p>
         </div>

         <div className='icons_container--three'>
            <icon className='icon'>
            <i class="fas fa-check"></i>
            </icon>
            <h1 className='icon-title'>
            Mission
            </h1>
            <p className='icon-detail'>
            To provide guidance to those looking to take action in this emerging technology by leveraging our expertise and network.            </p>
         </div>
        </div>
        </div>
    );
}

export default IconCard;
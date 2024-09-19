import React, { useContext, useState } from 'react'
import SidebarContext from './SidebarContext';


const DropdownSection = ({ title, subIndex }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { closeSidebar } = useContext(SidebarContext);

    const handleIndexClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSubindexClick = () => {
        closeSidebar();
    }

  return (
    <div>
        <h3 onClick={handleIndexClick}>
            {title}
        </h3>
        {isOpen && (
            <ul>
                {subIndex.map( (subIndex, index) => {
                    <li key={index}>
                        <button onClick={handleSubindexClick}>{subIndex}</button>
                    </li>
                })}
            </ul>
        )}
    </div>
  )
}

export default DropdownSection
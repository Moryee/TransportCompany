import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'

export default function SidebarData() {
    return [
        {
            title: 'Home',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            cname: 'nav-text'
        },
        {
            title: 'Cargo',
            path: '/cargo',
            icon: <FaIcons.FaBuilding />,
            cname: 'nav-text'
        },
        {
            title: 'Trucks',
            path: '/trucks',
            icon: <FaIcons.FaRoad />,
            cname: 'nav-text'
        },
        {
            title: 'Drivers',
            path: '/drivers',
            icon: <FaIcons.FaRoad />,
            cname: 'nav-text'
        },
        {
            title: 'Trailers',
            path: '/trailers',
            icon: <FaIcons.FaRoad />,
            cname: 'nav-text'
        },
    ];
}

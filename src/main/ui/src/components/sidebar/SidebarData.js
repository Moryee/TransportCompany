import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export default function SidebarData() {
    return [
        {
            title: 'T.COMP',
            path: '/home',
            icon: <AiIcons.AiFillHome />,
            cname: 'logo'
        },
        {
            title: 'Cargo',
            path: '/cargo',
            icon: <FaIcons.FaBuilding />,
            cname: 'link'
        },
        {
            title: 'Trucks',
            path: '/trucks',
            icon: <FaIcons.FaRoad />,
            cname: 'link'
        },
        {
            title: 'Drivers',
            path: '/drivers',
            icon: <FaIcons.FaRoad />,
            cname: 'link'
        },
        {
            title: 'Trailers',
            path: '/trailers',
            icon: <FaIcons.FaRoad />,
            cname: 'link'
        },
        {
            title: 'Users',
            path: '/users',
            icon: <FaIcons.FaUsers />,
            cname: 'link'
        },
        {
            title: 'About us',
            path: '/info',
            icon: <FaIcons.FaRoad />,
            cname: 'link'
        },
    ];
}

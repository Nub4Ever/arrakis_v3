import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArchiveIcon from '@mui/icons-material/Archive';



export const SidebarObj= [
    // {
    //     title:"Login",
    //     icon:<LockOpenIcon />,
    //     link:"/login"

    // },

    {
        title:"Bonds Overview",
        icon:<ArchiveIcon />,
        link:"/overview"

    },
    {
        title:"Maturity Analysis",
        icon:<CalendarMonthIcon />,
        link:"/maturity"

    },
    {
        title:"My Portfolio",
        icon:<AnalyticsIcon />,
        link:"/portfolio"

    },
    {
        title:"Logout",
        icon:<LogoutIcon />,
        link:"/login"

    },
]


export default SidebarObj
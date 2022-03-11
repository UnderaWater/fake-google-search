import { NavLink, useLocation } from "react-router-dom";

const links = [
    { url: '/search', text: 'All' },
    { url: '/news', text: 'News' },
    { url: '/images', text: 'Images' },
    { url: '/videos', text: 'Videos' },
]

const Links = () => {
    const location = useLocation();

    return (
        <div className='flex sm:justify-around justify-between items-center mt-4'>
            {links.map(({ url, text }, index) => (
                <NavLink key={index} to={url} className={`${location.pathname === url ? 'border-b-2' : ''} m-2 text-blue-700 dark:text-blue-300 border-blue-700 pb-2`}>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links;
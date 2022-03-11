import { NavLink } from "react-router-dom";

const links = [
    { url: '/search', text: 'All' },
    { url: '/news', text: 'News' },
    { url: '/images', text: 'Images' },
    { url: '/videos', text: 'Videos' },
]

const Links = () => {
    return (
        <div className='flex sm:justify-around justify-between items-center mt-4'>
            {links.map(({ url, text }, index) => (
                <NavLink key={index} to={url} className='m-2 text-blue-700 active:border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links;
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-kh-mhb.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h4>All Categories</h4>
            <div className='p-2'>
                {
                    categories.map(category => <p key={category.id} >
                        <NavLink to={`/category/${category.id}`} className='text-decoration-none text-black ' activeClassName="active" >{category.name}</NavLink>
                    </p>)

                }
            </div>
        </div>
    );
};

export default LeftNav;
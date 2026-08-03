import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css'


function searchBox() {

    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        setSuggestions([]);
    }

    useEffect(() => {
        if (!searchTerm.trim()) {
            setSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${searchTerm}`
                );
                const data = await res.json();
                setSuggestions(data.products.slice(0, 5));
            } catch (error) {
                console.error(error);
                setSuggestions([]);
            }
        };

        const debounce = setTimeout(fetchSuggestions, 300);

        return () => clearTimeout(debounce);
    }, [searchTerm]);

    useEffect(() => {
        setSuggestions([]);
    }, [location])

    return (
        <div className="searchBox_Container">
            <form onSubmit={handleSubmit} className="search_box">
                <input type="text" value={searchTerm} name='search' id='search' placeholder='Search for Products...' onChange={(e) => setSearchTerm(e.target.value)} autoComplete='off' />
                <button type='submit'><FaSearch /></button>
            </form>

            {suggestions.length > 0 && (
                <ul className="suggustions">
                    {suggestions.map((item) => (
                        <Link to={`/products/${item.id}`}>
                            <li key={item.id}>
                            <img src={item.images[0]} alt="" />
                            <span>{item.title}</span>
                        </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default searchBox

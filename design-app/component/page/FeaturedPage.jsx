"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FeatureSingleBanner from './FeatureSingleBanner';

const FeaturedPage = ({ slug }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (slug) => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API}/features`
                );
                console.log(response?.data);
                if (response?.data?.data?.length > 0)
                    setData(response?.data?.data[0] || null);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData(slug);
    }, [slug]);

    console.log(slug)
    if (isLoading) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            {data ?
                <div>
                    <h2>{data?.Title}</h2>
                    <FeatureSingleBanner />
                </div> :
                <div>
                    <h3>No data found</h3>
                </div>}
        </div>
    )
}

export default FeaturedPage

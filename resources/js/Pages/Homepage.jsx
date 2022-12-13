import NewsList from '@/Components/Homepage/NewsList';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/inertia-react';
import React from 'react';

export default function Homepage(props) {
    console.log(props)
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar />
            <NewsList news={props.news} />
            {/* {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className="p-4 m-2 bg-white text-black shadow-md round-md border">
                            <p className='text-2xl'>{data.title}</p>
                            <p className='text-sm'>{data.description}</p>
                            <i>{data.category}</i>
                            <i>{data.author}</i>
                        </div>
                    )
                }) : <p>Saat ini belum ada berita tersedia</p>} */}

        </div>
    )
}
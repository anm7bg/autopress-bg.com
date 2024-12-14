import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const PostCatMenu = () => {
  return (
        <ul className='post-menu post__menu'>
            <li><Link href={"/blog"}>Всички</Link></li>
            <li><Link href={"/tuning-novini"}>Тунинг новини</Link></li>
            <li><Link href={"/za-avtomobila"}>За автомобила</Link></li>
            <li><Link href={"/motorno-maslo"}>Моторно масло</Link></li>
        </ul>
  )
}

export default PostCatMenu 
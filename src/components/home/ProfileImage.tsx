import React from 'react';
import kylePic from 'public/images/kyle-cast-small.jpg';
import Image from 'next/image';

export default function ProfileImage() {
    return (
        <div className="relative h-[450px] w-[450px] overflow-hidden rounded-full">
            <Image
                src={kylePic}
                alt={'Picture of Kyle Casting'}
                className={`object-cover object-center`}
                placeholder="blur"
                fill
            />
        </div>
    );
}

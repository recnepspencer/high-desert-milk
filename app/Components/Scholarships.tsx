import Image from 'next/image';
import React from 'react';

interface Student {
    imageUrl: string,
    name: string,
    highschoolName: string,
    collegeName: string
}

export const StudentData: Student[] = [
    {
        imageUrl: '/impact/our-community-page/tanner.png',
        name: 'Tanner Schroeder',
        highschoolName: 'Declo High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/cassie.png',
        name: 'Cassie Beene',
        highschoolName: 'Burley High School',
        collegeName: 'Montana State University'
    },
    {
        imageUrl: '/impact/our-community-page/jonathan.png',
        name: 'Jonathan Bateman',
        highschoolName: 'Declo High School',
        collegeName: 'Brigham Young University - Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/emma.png',
        name: 'Emma Jeske',
        highschoolName: 'Oakley High School',
        collegeName: 'College of Southern Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/tate.png',
        name: 'Tate Cranney',
        highschoolName: 'Oakley High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/brittany.png',
        name: 'Brittany Hardy',
        highschoolName: 'Oakley High School',
        collegeName: 'Bridgerland Technical College'
    },
    {
        imageUrl: '/impact/our-community-page/elise.png',
        name: 'Elise Simkins',
        highschoolName: 'Declo High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/melanie.png',
        name: 'Melanie Searle',
        highschoolName: 'Burley High School',
        collegeName: 'College of Southern Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/jonathan2.png',
        name: 'Jonathan Brumley',
        highschoolName: 'Minico High School',
        collegeName: 'University of Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/zac.png',
        name: 'Zac Powers',
        highschoolName: 'Raft River High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/colby.png',
        name: 'Colby Wilkins',
        highschoolName: 'Minico High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/aymslee.png',
        name: 'Aymslee Mathis',
        highschoolName: 'Burley High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/tegan.png',
        name: 'Tegan Whitaker',
        highschoolName: 'Raft River High School',
        collegeName: 'Bridgerland Technical College'
    },
    {
        imageUrl: '/impact/our-community-page/ben.png',
        name: 'Ben Jones',
        highschoolName: 'Oakley High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/courtney.png',
        name: 'Courtney Beene',
        highschoolName: 'Burley High School',
        collegeName: 'College of Southern Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/rylie.png',
        name: 'Rylie Ann Nalder',
        highschoolName: 'Mince High School',
        collegeName: 'Brigham Young University - Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/j-w.png',
        name: 'J.W. Powers',
        highschoolName: 'Raft River High School',
        collegeName: 'College of Southern Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/melissa.png',
        name: 'Melissa Spurgeon',
        highschoolName: 'Declo High School',
        collegeName: 'College of Southern Idaho'
    },
    {
        imageUrl: '/impact/our-community-page/klayton.png',
        name: 'Klayton Wilson',
        highschoolName: 'Minco High School',
        collegeName: 'Utah State University'
    },
    {
        imageUrl: '/impact/our-community-page/kaylee.png',
        name: 'Kaylee Whiteley',
        highschoolName: 'Oakley High School',
        collegeName: 'College of Southern Idaho'
    },
];

export default function Students() {
    return (
        StudentData.map((student, index) => (
            <div key={index} className="flex flex-col items-center">
                <Image loading="lazy" width={1200} height={1200} alt={`picture of ${student.name}`} src={`${student.imageUrl}`} className="w-48 pb-2"/>
                <p>{student.name}</p> 
                <p>{student.highschoolName}</p> 
                <p>{student.collegeName}</p> 
            </div>
        ))
    );
}
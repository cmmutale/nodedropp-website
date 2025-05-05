import React from 'react'
import { sanityFetch } from '~/sanity/lib/live'
import { PROJECT_QUERY } from '~/sanity/lib/queries'
import { urlFor } from '~/sanity/lib/image';
import Image from 'next/image';

export default async function ProjectGallerySlide() {
  const project = await sanityFetch({
    query: PROJECT_QUERY,
  });

  return (
    <div className='full pt-12'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {project.data.map((project: any) => (
          <div key={project._id} className='relative'>
            {/* <h2>{project.projectTitle}</h2> */}
            <div className='relative w-full h-[300px]'>
              <Image
                src={urlFor(project.projectDisplayImage).url()}
                alt={project.projectTitle}
                fill
                className='object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

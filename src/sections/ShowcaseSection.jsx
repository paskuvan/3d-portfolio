import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            },
        )
    })
    
    
        gsap.fromTo(
        sectionRef.current, 
        {opacity: 0 }, 
        {opacity: 1, duration: 1.5}
    )

    }, []);

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* left */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                        <p className='text-white-50 md:text-xl'>
                            Ryde offers a seamless and convenient transportation experience. Whether you need a quick ride to work.
                        </p>
                    </div>
                </div>
                {/* right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <div className='text-content'>
                            <h2>Library Management Platform: Streamlining Book Borrowing and Returns</h2>
                        </div>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7db]'>
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <div className='text-content'>
                            <h2>YC Directory - A startup showcase app</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection
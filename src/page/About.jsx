import { AboutD, Study } from '../components/AboutDT';
function About() {
  return (
    <main className="AboutMain">
      <section className='InfeCont'>
        <div className='flex w-full justify-top text-60 py-10 px-2'>
          <h1 className='font-jet text-center'>About Me</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 About:flex About:flex-col'>
          <Study ico={<i className="fa-solid fa-graduation-cap"></i>} title={'Studies'} />
          <AboutD ico={<i className="fa-solid fa-hourglass-start"></i>} title={'Hobbies'} items={[
            'Train me in New Technologiies',
            'Digital Illustration',
            'Creating Apps for Fun',
            'Exercise my Skills',
          ]}
          />
          <AboutD ico={<i className="fa-solid fa-user-pen"></i>} title={'Skill'} items={[
            'Analysis and Problem Solving',
            ' Creativity',
            ' Dedication to Work',
            ' Adaptability',
            'Teamwork',
            'Time Management',
            ' Collaborative Problem Solving',
            'Continuous Learning'
          ]} />
        </div>
      </section>
      <section className='CV'>
        <div className='flex flex-col px-2 border-r border-sta mini3:border-none'>
          <h2>Curriculum</h2>
          <p className='w-tre text-Gr mini2:w-auto'>If you need my resume, you can download it by clicking the following button  </p>
        </div>
        <p className='text-40 mini3:hidden text-Gr text-bold font-bold m-2'>{'~~>'}</p>
        <a href="/public/cv.pdf" download="cv.pdf">
          <button className='text-30 p-5 rounded-full hover:bg-sta hover:text-Bg2 '>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </a>
      </section>
    </main>
  )
}
export default About;
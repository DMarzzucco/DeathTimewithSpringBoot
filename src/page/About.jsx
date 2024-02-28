import { AboutD, Study } from '../components/AboutDT';
function About() {
  return (
    <main className="AboutMain">
      <section className='InfeCont'>
        <div className='flex w-full justify-center text-60 p-10'>
          <h1>About Me</h1>
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
        <h2>Download Resume in Spanish</h2>
        <a href='public/img/c.png' download="">
          <button className='text-30 p-5 rounded-full hover:bg-sta hover:text-Bg2 '>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </a>
      </section>
    </main>
  )
}
export default About;
import { AboutDt } from '../components/Comp';
import './Pages.scss'
function About() {
  return (
    <main className="AboutMain">
      <section>
        <div className='info'>
          <div className='flex w-full justify-center text-60'>
            <h1>About <br /> Me</h1>
          </div>
          <div className="dt">
            <AboutDt ico={'ico'} title={'title'} items={[
              'sdsd',
              'sdsd',
              'sdsd',
            ]} />
            <AboutDt ico={'ico'} title={'title'} items={[
              'sdsd',
              'sdsd',
              'sdsd',
            ]} />
            <AboutDt ico={'ico'} title={'title'} items={[
              'sdsd',
              'sdsd',
              'sdsd',
            ]} />
          </div>
        </div>
        <div>
          <h2>Download Resume in Spanish</h2>
          <button></button>
        </div>
      </section>
    </main>
  )
}
export default About;
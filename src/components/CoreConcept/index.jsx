import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../../data'

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
        <h2 align="center">Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} title={item.title} description={item.description} image={item.image} />
          ))}
        </ul>
      </section>
  )
}

export default CoreConcepts;
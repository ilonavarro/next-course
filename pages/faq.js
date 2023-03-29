import { useEffect, useState } from 'react'
import Link from '../src/components/Link'

export async function getStaticProps(context) {
  const FAQ_URL_API =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const dadosFaq = await fetch(FAQ_URL_API)
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data
    })

  return {
    props: { dadosFaq } // will be passed to the page component as props
  }
}

const faq = ({ dadosFaq }) => {
  // const [dadosFaq, setDadosFaq] = useState([])
  // useEffect(() => {
  // }, [])
  return (
    <div>
      <h1>Alura Cases - Faq</h1>
      <Link href='/'>Ir para a Home</Link>
      <ul>
        {dadosFaq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default faq

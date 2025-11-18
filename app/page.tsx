'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    information: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your submission. Rodriguez has been found, but your interest keeps his memory alive!')
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.banner}>
            <h1 className={styles.title}>THE GREAT RODRIGUEZ HUNT</h1>
            <p className={styles.subtitle}>Have You Seen This Man?</p>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.milkCartonSection}>
            <div className={styles.milkCarton}>
              <div className={styles.milkCartonTop}></div>
              <div className={styles.milkCartonBody}>
                <div className={styles.milkCartonLabel}>
                  <h2>MISSING</h2>
                  <p className={styles.milkCartonBrand}>MUSICIAN</p>
                </div>
                <div className={styles.photoFrame}>
                  <div className={styles.silhouette}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="70" r="35" fill="#2b2b2b"/>
                      <ellipse cx="100" cy="150" rx="55" ry="70" fill="#2b2b2b"/>
                      <rect x="70" y="50" width="60" height="8" fill="#1a1a1a" rx="4"/>
                      <circle cx="85" cy="65" r="3" fill="#fff"/>
                      <circle cx="115" cy="65" r="3" fill="#fff"/>
                    </svg>
                  </div>
                  <p className={styles.photoCaption}>Rodriguez</p>
                </div>
                <div className={styles.details}>
                  <p><strong>LAST SEEN:</strong> Detroit, 1970s</p>
                  <p><strong>KNOWN FOR:</strong> "Cold Fact" & "Coming From Reality"</p>
                  <p><strong>ALBUMS:</strong> 2</p>
                  <p><strong>STATUS:</strong> Unknown</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.story}>
              <h2>Who is Rodriguez?</h2>
              <p>
                In the early 1970s, a mysterious musician named Rodriguez released two albums
                that went virtually unnoticed in the United States. But somehow, his music made
                its way to South Africa, where it became a soundtrack to a generation fighting
                apartheid.
              </p>
              <p>
                His albums outsold Elvis and the Rolling Stones in South Africa, yet Rodriguez
                remained completely unknown. Rumours spread that he had died tragically on stage.
                Some said he shot himself. Others claimed he immolated himself during a concert.
              </p>
              <p>
                Two South African fans decided to find out the truth. What happened to Rodriguez?
              </p>
            </div>

            <div className={styles.clues}>
              <h2>What We Know</h2>
              <ul>
                <li>Real name: Sixto Diaz Rodriguez</li>
                <li>Born in Detroit, Michigan</li>
                <li>Released "Cold Fact" (1970) and "Coming From Reality" (1971)</li>
                <li>Worked construction jobs after music career failed</li>
                <li>Songs include: "Sugar Man," "I Wonder," "Crucify Your Mind"</li>
                <li>Became a legend in South Africa without his knowledge</li>
                <li>Nobody in the US music industry knows where he is</li>
              </ul>
            </div>

            <div className={styles.lyrics}>
              <h3>From "Sugar Man"</h3>
              <blockquote>
                Sugar man, won't you hurry<br/>
                'Cos I'm tired of these scenes<br/>
                For a blue coin, won't you bring back<br/>
                All those colours to my dreams
              </blockquote>
            </div>

            <div className={styles.formSection}>
              <h2>Do You Have Information?</h2>
              <p className={styles.formIntro}>
                If you know anything about Rodriguez, his whereabouts, or what happened to him
                after his brief recording career, please let us know. Any information, no matter
                how small, could help solve this mystery.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="information">What do you know about Rodriguez?</label>
                  <textarea
                    id="information"
                    rows={6}
                    value={formData.information}
                    onChange={(e) => setFormData({...formData, information: e.target.value})}
                    placeholder="Any information about his life, music, or whereabouts..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Submit Information
                </button>
              </form>
            </div>

            <div className={styles.update}>
              <h2>Update: He Was Found!</h2>
              <p>
                Rodriguez was eventually discovered alive and well, still living in Detroit.
                He had no idea he was famous in South Africa. The story of his rediscovery
                became the Oscar-winning documentary "Searching for Sugar Man" (2012).
              </p>
              <p>
                He went on to tour internationally and finally received the recognition he
                deserved. Rodriguez passed away on August 8, 2023, leaving behind an incredible
                legacy and one of music's most fascinating stories.
              </p>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>This page is a tribute to Rodriguez and the fans who never stopped searching.</p>
          <p className={styles.quote}>"Thanks for keeping me alive" - Rodriguez</p>
        </footer>
      </div>
    </main>
  )
}

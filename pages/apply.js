import styles from '../styles/apply.module.css'
import {useState} from "react";




const application = () => {
    // hooks come here
const [email, setEmail] = useState("")
const [discord, setDiscord] = useState("")
const [bornLoc, setBornLoc] = useState("")
const [desc, setDesc] = useState("")
const [exp, setExp] = useState("")
const [rpDesc, setRpDesc] = useState("")
const[purpose, setPurpose] = useState("")
const [dep, setDep] = useState("")
const [scenario, setScenario] = useState("")
const [showSuccess, setShowSuccess] = useState(false)
const [showErr, setShowErr] = useState(false)

function Success() {
    return showSuccess ? <p className={styles.submitted}>Submitted successfully</p> : <p></p>
}

function Error() {
    return showErr ? <p className={styles.error}>An error occurred, please contact the developers</p> : <p></p>
}
function sendMessage(ev) {
    ev.preventDefault();
  var params = {
    username: "New Application recieved",
    avatar_url: "",
    content: "Please review", 
    embeds: [{
          "title": `@${discord} submitted a new registration`,
          "description": `Timestamp: ${new Date()}`,
          "fields": [{
              "name": "Email",
              "value": email
          }, {
            "name": "Discord ID",
            "value": discord
          },
           {
            "name": "Birth",
            "value": bornLoc
          }, {
            "name": "Roleplay Experience",
            "value": exp
          },
           {
            "name": "Player description",
            "value": desc
          }, {
            "name": "Rp experience",
            "value": rpDesc
          }, {
            "name": "Purpose",
            "value": purpose
          }, {
            "name": "Department",
            "value": dep
          },{
            "name": "Scenario",
            "value": scenario
          },]
        }]
      
  }
  fetch(`/api/apply`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(params)
  }).then(resp => {
      setShowSuccess(true)
  }).catch(err => {
      setShowErr(true)
  })
}
  return (
    <div className={styles.div}>
              <Success/>
              <Error/>
    <form>
      <label htmlFor="name">Email address</label>
      <input className={styles.inputtext} id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setEmail(e.target.value)}} />

      <label htmlFor="name">What is your discord name and id (TheHamy#2799)</label>
      <input className={styles.inputtext} id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setDiscord(e.target.value)}}/>

      <label htmlFor="name">When were you born?</label>
      <input className={styles.inputtext}  id="name" name="name" type="date" autoComplete="name" required onChange={(e) => {setBornLoc(e.target.value)}}/>

      <label htmlFor="name">Describe yourself with as much detail as possible.</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setDesc(e.target.value)}}/>

      <label htmlFor="name">Do you have any roleplay experience?</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setExp(e.target.value)}}/>

      <label htmlFor="name">In your own words, what is roleplay?</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setRpDesc(e.target.value)}}/>

      <label htmlFor="name">Why do you wish to join EverlastRP?</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setPurpose(e.target.value)}}/>

      <label htmlFor="name">What department do you wish to join? </label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setDep(e.target.value)}}/>

      <label htmlFor="name">Please give a detailed description of a roleplay scene you could bring</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required onChange={(e) => {setScenario(e.target.value)}}/>
      <button onClick={sendMessage}>Apply!</button>
    </form>
    </div>
  )
}
export default application;
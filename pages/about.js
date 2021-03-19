import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div>
            <div>
                <h1>About us:</h1>
                <div className={styles.shortdesc}>
                <p>EverlastRP is a new roleplay community for the popular game GTA V. It started development towards the end of 2020 and opened on March 10th 2021. The goal of this community is to provide a safe and special environement for roleplay.</p>
                </div>
                <div className={styles.desc}>
                    <p>EverlastRP was founded in 2020 by Siege and Faded, it started out as a ESX RP server but then got changed to Scenario-Based roleplay due to it giving more creative roleplay. We strive to provide our members with quality roleplay and do everything we possibly can to improve their experience.
                        We have multiple options for roleplay to provide the best roleplay experience possible, the departments are BCSO, LSPD, SASP, EMS, and Civilian. These departments were put in place to follow GTA V Lore.
                    </p>
                </div>
            </div>
        <h1>Our team:</h1>
        <p>Our team is composed of multiple essential people, these include:</p>
            <div className={styles.wrap}>
                <div className={styles.image1}>
                <h1>Siege</h1>
                <img src="https://cdn.discordapp.com/avatars/695800069701632071/3ee62c344245752793e2bee3baea197a.png"></img>
                <p>Siege is one of our Owners and is an essential part of the team and helped us get where we are today!</p>
                </div>
                <div  className={styles.image2}>
                <h1>Faded</h1>
                <img src="https://cdn.discordapp.com/avatars/535637960918302750/a_e581570c3ac60bf8e2faceb2d5959f01.png"></img>
                <p>Faded is also one of the Owners and keeps everyone in line.</p>
                </div>
            <div className={styles.wrap2}>
            <div  className={styles.image3}>
                <h1>Hamy</h1>
                <img src="https://cdn.discordapp.com/avatars/656091979456839700/6b9e43881bcc8f8fb8a587008a0a04ff.png"></img>
                <p>Hamy is one of the Lead Developers and helped get the server to where it is today.</p>
                </div>
                <div  className={styles.image4}>
                <h1>WowJesus</h1>
                <img src="https://cdn.discordapp.com/avatars/399955365120442389/b6207c972b7135c33098a3f8c6d0e91e.png"></img>
                <p>Jesus is not part of the community but has contributed a whole lot to this server. Thank you for your service.</p>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default About;
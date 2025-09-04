
import readline from 'readline'


export class AffirmationCat {

  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  async fetchAffirmation() {

    try {
      const response = await fetch('https://www.affirmations.dev/')
      const data = await response.json()
      return data.affirmation

    } catch {
      console.error("Error fetching affirmation", data)
    }
  
  }

  getCatAscii() {
    return `  
                 |\\_._/|        
                 | o o |        
                 (  T  )       
                .^\`-^-"'^.     
                \`.  ;  .'     
                | | | | |     
               ((_((|))_)) `
  }

  getComputerCatAscii() {
    return  `
                         \\  / 
                          \\/         
            ___             
       _.-|   |          |\\__/,|   (\`\\
      {   |   |          |o o  |__ _) )
       "-.|___|        _.( T   )  \`  /
         .--'-\\-.     _((_ \\\`^--' /_<  \\
        .+|______|__.-||__)\\'-'(((/  (((/`
  }

  displayWelcomeMessage() {
    console.log(this.getCatAscii())
    console.log("    \n\n     Affirmation cat wants to tell you something. \n")
  }

  displayAffirmation(name, affirmation) {
    console.log(`\n\n\n\n\n\n     Nice to meet you, ${name}!  \n\n     ${affirmation}. Take care and happy coding ♡`)
    console.log(this.getComputerCatAscii())
    this.readLine.close()
  }

   promptName(affirmation) {
      this.readLine.question("\n     Enter your name: ", (name) => {
      this.displayAffirmation(name, affirmation)
    })
  }

  async runAffirmationCat() {
   const affirmation = await this.fetchAffirmation()
   this.displayWelcomeMessage()
   this.promptName(affirmation)
  }
}
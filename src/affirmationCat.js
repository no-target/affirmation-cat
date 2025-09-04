

export class AffirmationCat {

  async fetchAffirmation() {

    try {
      const response = await fetch('https://www.affirmations.dev/')
      const data = await response.json()
      return data.affirmation

    } catch {
    console.error("Error fetching affirmation", data)
    }
  
  }
}
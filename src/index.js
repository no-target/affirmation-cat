
import { AffirmationCat } from "./affirmationCat.js"

const affirmationCat = new AffirmationCat() 

const affirmation = await affirmationCat.fetchAffirmation()

console.log(affirmation)
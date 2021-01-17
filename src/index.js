import {choice, remove} from './helpers'
import fuds from './foods'

const randomFruits = choice(fuds)
console.table(choice(fuds))
console.log(`I would like a ${choice(fuds)} please`)
console.log(`Here you go: ${choice(fuds)}`)
console.log('Delicious, may I have another?')
const remaining = remove(fuds, randomFruits)
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`)